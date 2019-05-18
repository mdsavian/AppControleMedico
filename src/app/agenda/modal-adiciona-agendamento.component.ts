import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { Paciente } from '../modelos/paciente';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Local } from '../modelos/local';
import { LocalService } from '../services/local.service';
import { ProcedimentoService } from '../services/procedimento.service';
import { ExameService } from '../services/exame.service';
import { CirurgiaService } from '../services/cirurgia.service';
import { Exame } from '../modelos/exame';
import { Medico } from '../modelos/medico';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import { ModalAdicionaModeloDescricaoComponent } from '../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalCadastroPacienteComponent } from '../cadastros/paciente/modal-cadastro-paciente.component';
import { PacienteService } from '../services/paciente.service';
import { Convenio } from '../modelos/convenio';
import { ConvenioService } from '../services/convenio.service';
import { ModeloDescricao } from '../modelos/naoPersistidos/modeloDescricao';
import { Util } from '../uteis/Util';
import { ModalErrorComponent } from '../shared/modal/modal-error.component';
import { ValidadorAgendamento } from './validadorAgendamento';
import { AgendamentoService } from '../services/agendamento.service';

@Component({
  selector: 'app-modal-adiciona-agendamento.component',
  templateUrl: './modal-adiciona-agendamento.component.html',
  styleUrls: ["./styles.css"]
})

export class ModalAdicionaAgendamentoComponent {
  agendamento: Agendamento = new Agendamento();
  horaInicial: string;
  horaFinal: string;
  validadorAgendamento = new ValidadorAgendamento();
  medico: Medico;
  paciente: Paciente = new Paciente;
  tipoAgendamentoEnum = ETipoAgendamento;
  tipoAgenda: string = ETipoAgendamento[1].toString();
  nomePacientes: Array<string>;
  pacientes: Array<Paciente> = [];
  pacienteSelecionado: string;
  locais: Array<Local> = [];
  procedimentos: Array<Procedimento> = [];
  exames: Array<Exame> = [];
  util = new Util();
  dataAgenda = this.util.dataParaString(new Date());
  convenios: Array<Convenio> = [];
  cirurgias: Array<Cirurgia> = [];
  falhaNaBusca = true;
  nomeMedico: string; s

  @ViewChild('tipoAgendamento', { read: ElementRef }) private tipoAgendamento: ElementRef;

  constructor(public activeModal: NgbActiveModal, private agendamentoService: AgendamentoService, public modalService: NgbModal, private localService: LocalService,
    private exameService: ExameService, private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService,
    private pacienteService: PacienteService, private convenioService: ConvenioService) { }

  salvar() {

    if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {
      if (this.agendamento.paciente == null) {
        var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modalErro.componentInstance.mensagemErro = "Paciente inválido.";
        return;
      }
      if (this.agendamento.dataAgendamentoInicial == null || this.agendamento.dataAgendamentoFinal == null) {
        var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modalErro.componentInstance.mensagemErro = "Data/Hora inválida.";
        return;
      }
    }

    var erroHoras = this.validadorAgendamento.validaHorasAgendamento(this.medico.configuracaoAgenda,
      this.agendamento.dataAgendamentoInicial, this.agendamento.dataAgendamentoFinal, this.agendamento.tipoAgendamento);
    if (erroHoras != "") {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = erroHoras;
      return;
    }

    switch (this.agendamento.tipoAgendamento) {
      case ETipoAgendamento.Bloqueio.valueOf(): {
        this.agendamento.cor = "#EE0000"; //red2
        break;
      }
      case ETipoAgendamento.Cirurgia.valueOf():{
        this.agendamento.cor = this.agendamento.cirurgia.cor;
        break;
      }
      case ETipoAgendamento.Consulta.valueOf():{
        this.agendamento.cor = "#A2B5CD"; // LightSteelBlue3
        break;
      }
      case ETipoAgendamento.Exame.valueOf():{
        this.agendamento.cor = this.agendamento.exame.cor;
        break;
      }
      case ETipoAgendamento.Procedimento.valueOf():{
        this.agendamento.cor = this.agendamento.procedimento.corFundo;
        break;
      }
      case ETipoAgendamento.Retorno.valueOf():{
        this.agendamento.cor = "#CAE1FF"; //LightSteelBlue1
        break;
      }
    }

    console.log(this.agendamento.cor);

    this.activeModal.close(this.agendamento);
  }

  fechar() {
    this.activeModal.close();
  }

  public formataData(e): void {

    if (e.target.id == "dataAgendamento" && e.target.value.length == 10) {
      var data = this.util.stringParaData(e.target.value);
      this.agendamento.dataAgendamentoInicial.setDate(data.getDate());
      this.agendamento.dataAgendamentoFinal.setDate(data.getDate());

    }
  }

  public concatenaHora(event): void {
    if (event.target.value.toString().length == 5) {

      if (event.target.id == "horaInicial") {
        if (this.agendamento.dataAgendamentoInicial != null)
          this.agendamento.dataAgendamentoInicial.setHours(parseInt(event.target.value.toString().substring(0, 2)), parseInt(event.target.value.toString().substring(3, 5)));
      }
      else if (event.target.id == "horaFinal") {
        if (this.agendamento.dataAgendamentoFinal != null)
          this.agendamento.dataAgendamentoFinal.setHours(parseInt(event.target.value.toString().substring(0, 2)), parseInt(event.target.value.toString().substring(3, 5)));
      }
    }
  }

  ngOnInit() {
    this.tipoAgendamento.nativeElement.focus();
    this.agendamento.dataAgendamentoInicial = new Date();
    this.agendamento.dataAgendamentoFinal = new Date();

    this.nomeMedico = this.medico.nomeCompleto;
    this.buscarModelosNovoAgendamento();
  }

  buscarModelosNovoAgendamento() {
    this.pacienteService.Todos().subscribe(dados => {
      this.pacientes = dados;
      this.nomePacientes = new Array<string>();
      dados.forEach(d => {
        this.nomePacientes.push(d.nomeCompleto);
      });
    });

    this.exameService.Todos().subscribe(dados => { this.exames = dados; });
    this.localService.Todos().subscribe(dados => { this.locais = dados; });
    this.cirurgiaService.Todos().subscribe(dados => { this.cirurgias = dados; });
    this.procedimentoService.Todos().subscribe(dados => { this.procedimentos = dados; });
    this.convenioService.Todos().subscribe(c => this.convenios = c);
  }

  selecionaTipoAgendamento(value: string) {
    this.agendamento.tipoAgendamento = ETipoAgendamento[value];

    this.agendamento.procedimento = null;
    this.agendamento.cirurgia = null;
    this.agendamento.local = null;
    this.agendamento.exame = null;
  }

  adicionaPaciente() {
    var modalNovoPaciente = this.modalService.open(ModalCadastroPacienteComponent, { size: 'lg' })

    modalNovoPaciente.result.then((paciente: Paciente) => {
      if (paciente != null && paciente.nomeCompleto != '') {

        var pacienteExistente = this.pacientes.find(c => c.nomeCompleto == paciente.nomeCompleto);
        if (pacienteExistente != null) {
          this.agendamento.paciente = pacienteExistente;
        }
        else {

          this.pacientes.push(paciente);
          this.nomePacientes.push(paciente.nomeCompleto);
          this.pacienteSelecionado = paciente.nomeCompleto;

          this.pacienteService.salvar(paciente).subscribe(pacienteCadastrado => {
            this.agendamento.paciente = pacienteCadastrado;
          });
        }
      }
    }).catch((error) => { })

  }
  chamaModalAdiciona(nome: string) {
    var modalAdiciona = this.modalService.open(ModalAdicionaModeloDescricaoComponent);

    switch (nome) {
      case "Convenio":
        {
          modalAdiciona.componentInstance.descricaoErro = "Convênio obrigatório.";
          modalAdiciona.componentInstance.labelDescricao = "Convênio";
          modalAdiciona.componentInstance.mostrarCor = false;

          modalAdiciona.result.then((convenio: ModeloDescricao) => {
            if (convenio != null && convenio.descricao != '') {

              var convenioExistente = this.convenios.find(c => c.nomeConvenio == convenio.descricao);
              if (convenioExistente != null) {
                this.agendamento.convenio = convenioExistente;
              }
              else {

                var convenioNovo = new Convenio();
                convenioNovo.nomeConvenio = convenio.descricao;
                this.convenios.push(convenioNovo);

                this.convenioService.salvar(convenioNovo).subscribe(convenioCadastrado => {
                  this.agendamento.convenio = this.convenios.find(c => c.nomeConvenio == convenio.descricao);
                });
              }
            }
          }).catch((error) => { })

          break;
        }
      case "Local": {
        modalAdiciona.componentInstance.descricaoErro = "Local obrigatório.";
        modalAdiciona.componentInstance.labelDescricao = "Local";
        modalAdiciona.componentInstance.mostrarCor = false;

        modalAdiciona.result.then((local: ModeloDescricao) => {
          if (local != null && local.descricao != '') {

            var localExistente = this.locais.find(c => c.descricao == local.descricao);
            if (localExistente != null) {
              this.agendamento.local = localExistente;
            }
            else {

              var localNovo = new Local();
              localNovo.descricao = local.descricao;
              this.locais.push(localNovo);

              this.localService.salvar(localNovo).subscribe(localCadastrado => {
                this.agendamento.local = this.locais.find(c => c.descricao == localCadastrado.descricao);
              });
            }
          }
        }).catch((error) => { })
        break;
      }
      case "Cirurgia": {
        modalAdiciona.componentInstance.descricaoErro = "Cirurgia obrigatória.";
        modalAdiciona.componentInstance.labelDescricao = "Cirurgia";
        modalAdiciona.componentInstance.mostrarCor = true;

        modalAdiciona.result.then((cirurgia: ModeloDescricao) => {
          if (cirurgia != null && cirurgia.descricao != '') {

            var cirurgiaExistente = this.cirurgias.find(c => c.descricao == cirurgia.descricao);

            if (cirurgiaExistente != null) {
              this.agendamento.cirurgia = cirurgiaExistente;

            }
            else {

              var cirurgiaNova = new Cirurgia();
              cirurgiaNova.descricao = cirurgia.descricao;
              cirurgiaNova.cor = cirurgia.cor;
              this.cirurgias.push(cirurgiaNova);

              this.cirurgiaService.salvar(cirurgiaNova).subscribe(cirurgiaCadastrado => {
                this.agendamento.cirurgia = this.cirurgias.find(c => c.descricao == cirurgiaCadastrado.descricao);
                ;
              });
            }
          }
        }).catch((error) => { })
        break;
      }
      case "Procedimento": {
        modalAdiciona.componentInstance.descricaoErro = "Procedimento obrigatório.";
        modalAdiciona.componentInstance.labelDescricao = "Procedimento";
        modalAdiciona.componentInstance.mostrarCor = true;

        modalAdiciona.result.then((procedimento: ModeloDescricao) => {
          if (procedimento != null && procedimento.descricao != '') {

            var procedimentoExistente = this.procedimentos.find(c => c.descricao == procedimento.descricao);

            if (procedimentoExistente != null) {
              this.agendamento.procedimento = procedimentoExistente;
            }
            else {
              var procedimentoNovo = new Procedimento();
              procedimentoNovo.descricao = procedimento.descricao;
              procedimentoNovo.corFundo = procedimento.cor;

              this.procedimentos.push(procedimentoNovo);

              this.procedimentoService.salvar(procedimentoNovo).subscribe(procedimentoCadastrado => {
                this.agendamento.procedimento = this.procedimentos.find(c => c.descricao == procedimentoCadastrado.descricao);
              })
            }
          }
        }).catch((error) => { })
        break;
      }
      case "Exame": {
        modalAdiciona.componentInstance.descricaoErro = "Exame obrigatório.";
        modalAdiciona.componentInstance.labelDescricao = "Exame";
        modalAdiciona.componentInstance.mostrarCor = true;

        modalAdiciona.result.then((exame: ModeloDescricao) => {
          if (exame != null && exame.descricao != '') {

            var exameExistente = this.exames.find(c => c.descricao == exame.descricao);

            if (exameExistente != null) {
              this.agendamento.exame = exameExistente;
            }
            else {
              var exameNovo = new Exame();
              exameNovo.descricao = exame.descricao;
              exameNovo.cor = exame.cor;

              this.exames.push(exameNovo);

              this.exameService.salvar(exameNovo).subscribe(exameCadastrado => {
                this.agendamento.exame = this.exames.find(c => c.descricao == exameCadastrado.descricao);
              })
            }
          }
        }).catch((error) => { })
        break;
      }
    }
  }

  buscaPaciente = (text$: Observable<string>) =>
    text$.pipe(
      distinctUntilChanged(),
      map(term => {

        if (this.nomePacientes == null) {
          this.falhaNaBusca = true;
          return false;
        }

        if (term.length < 2) {
          this.falhaNaBusca = true;
          return false;
        }

        this.falhaNaBusca = this.nomePacientes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return this.nomePacientes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  selecionaPaciente(item) {
    var paciente = this.pacientes.find(c => c.nomeCompleto === item.item);
    if (paciente != null) {
      this.paciente = paciente;
      this.agendamento.paciente = paciente;

      if (paciente.convenio != null)
        this.agendamento.convenio = this.convenios.find(c => c.id == paciente.convenio.id);
    }

  }

}