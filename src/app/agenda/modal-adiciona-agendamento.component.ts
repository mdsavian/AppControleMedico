import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
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
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-modal-adiciona-agendamento.component',
  templateUrl: './modal-adiciona-agendamento.component.html',
  styleUrls: ["./styles.css"]
})

export class ModalAdicionaAgendamentoComponent implements OnInit, AfterViewInit {
  

  isSpinnerVisible = false;
  editando = false;
  agendamento = new Agendamento();
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
  tituloTela: string = "";

  @ViewChild('tipoAgendamento', { read: ElementRef }) private tipoAgendamento: ElementRef;

  constructor(public activeModal: NgbActiveModal, private agendamentoService: AgendamentoService, public modalService: NgbModal, private localService: LocalService,
    private exameService: ExameService, private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService,
    private pacienteService: PacienteService, private convenioService: ConvenioService) {
  }

  ngAfterViewInit(): void {
    this.tipoAgendamento.nativeElement.focus();
  }


  ngOnInit() {

    this.buscarModelosNovoAgendamento().subscribe(c => {
      this.isSpinnerVisible = false;

      if (this.editando) {

        this.tituloTela = "Editar Agendamento - ";
        this.falhaNaBusca = false;


        this.tipoAgenda = ETipoAgendamento[this.agendamento.tipoAgendamento];
        if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {
          if (this.agendamento.paciente != null && this.pacientes.length > 0) {
            this.pacienteSelecionado = this.nomePacientes.find(c => c == this.agendamento.paciente.nomeCompleto);
            this.paciente = this.pacientes.find(c => c.id == this.agendamento.paciente.id);
          }


          this.agendamento.convenio = this.convenios.find(c => c.id == this.agendamento.convenio.id);

          if (this.agendamento.exame != null)
            this.agendamento.exame = this.exames.find(c => c.id == this.agendamento.exame.id);

          if (this.agendamento.cirurgia != null)
            this.agendamento.cirurgia = this.cirurgias.find(c => c.id == this.agendamento.cirurgia.id);

          if (this.agendamento.local != null)
            this.agendamento.local = this.locais.find(c => c.id == this.agendamento.local.id);

          if (this.agendamento.procedimento != null)
            this.agendamento.procedimento = this.procedimentos.find(c => c.id == this.agendamento.procedimento.id);
        }

        this.dataAgenda = this.agendamento.dataAgendamento;

      }
      else {
        this.tituloTela = "Novo Agendamento - ";
        this.agendamento.dataAgendamento = new Date().toDateString();
      }

      this.tituloTela += this.medico.nomeCompleto;
    });

  }

  salvar() {

    this.agendamento.medico = this.medico;
    if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {
      if (this.agendamento.paciente == null) {
        var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modalErro.componentInstance.mensagemErro = "Paciente inválido.";
        return;
      }
      if (this.agendamento.dataAgendamento == null) {
        var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modalErro.componentInstance.mensagemErro = "Data/Hora inválida.";
        return;
      }
    }

    var validaHoras = this.validadorAgendamento.validaHorasAgendamento(this.medico.configuracaoAgenda,
      this.util.stringParaData(this.agendamento.dataAgendamento), this.agendamento.horaInicial, this.agendamento.horaFinal, this.agendamento.tipoAgendamento);
    if (validaHoras != "") {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = validaHoras;
      return;
    }

    this.agendamento = this.validadorAgendamento.tratarCorAgendamento(this.agendamento);

    this.agendamentoService.salvar(this.agendamento).subscribe((novoAgendamento: Agendamento) => this.activeModal.close(novoAgendamento));
  }

  fechar() {
    this.activeModal.close();
  }

  public formataData(e): void {

    if (e.target.id == "dataAgendamento" && e.target.value.length == 10) {

      this.agendamento.dataAgendamento = e.target.value;

    }
  }

  buscarModelosNovoAgendamento() {
    this.isSpinnerVisible = true;
    let reqPaciente = this.pacienteService.Todos().map(dados => {
      this.pacientes = dados;
      this.nomePacientes = new Array<string>();
      dados.forEach(d => {
        this.nomePacientes.push(d.nomeCompleto);
      });
    });

    let reqExames = this.exameService.Todos().map(dados => { this.exames = dados; });
    let reqLocais = this.localService.Todos().map(dados => { this.locais = dados; });
    let reqCirurgias = this.cirurgiaService.Todos().map(dados => { this.cirurgias = dados; });
    let reqProcedimento = this.procedimentoService.Todos().map(dados => { this.procedimentos = dados; });
    let reqConvenios = this.convenioService.Todos().map(c => this.convenios = c);

    return Observable.forkJoin([reqPaciente, reqExames, reqLocais, reqCirurgias, reqProcedimento, reqConvenios]);
  }

  selecionaTipoAgendamento(value: string) {
    this.agendamento.tipoAgendamento = ETipoAgendamento[value];

    if (ETipoAgendamento[value] == ETipoAgendamento.Bloqueio)
      this.falhaNaBusca = false;
    else if (this.pacienteSelecionado == "")
      this.falhaNaBusca = true;

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

              var convenioExistente = this.convenios.find(c => c.descricao == convenio.descricao);
              if (convenioExistente != null) {
                this.agendamento.convenio = convenioExistente;
              }
              else {

                var convenioNovo = new Convenio();
                convenioNovo.descricao = convenio.descricao;
                this.convenios.push(convenioNovo);

                this.convenioService.salvar(convenioNovo).subscribe(convenioCadastrado => {
                  this.agendamento.convenio = this.convenios.find(c => c.descricao == convenio.descricao);
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
                this.agendamento.corFundo = local.corFundo
                this.agendamento.corLetra = local.corLetra
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
              cirurgiaNova.corFundo = cirurgia.corFundo;
              cirurgiaNova.corLetra = cirurgia.corLetra;
              this.cirurgias.push(cirurgiaNova);

              this.cirurgiaService.salvar(cirurgiaNova).subscribe(cirurgiaCadastrado => {
                this.agendamento.cirurgia = this.cirurgias.find(c => c.descricao == cirurgiaCadastrado.descricao);
                this.agendamento.corFundo = cirurgia.corFundo
                this.agendamento.corLetra = cirurgia.corLetra
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
              procedimentoNovo.corFundo = procedimento.corFundo;
              procedimentoNovo.corLetra = procedimento.corLetra;

              this.procedimentos.push(procedimentoNovo);

              this.procedimentoService.salvar(procedimentoNovo).subscribe(procedimentoCadastrado => {
                this.agendamento.procedimento = this.procedimentos.find(c => c.descricao == procedimentoCadastrado.descricao);
                this.agendamento.corFundo = procedimento.corFundo
                this.agendamento.corLetra = procedimento.corLetra
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
              exameNovo.corFundo = exame.corFundo;
              exameNovo.corLetra = exame.corLetra;

              this.exames.push(exameNovo);

              this.exameService.salvar(exameNovo).subscribe(exameCadastrado => {
                this.agendamento.exame = this.exames.find(c => c.descricao == exameCadastrado.descricao);
                this.agendamento.corFundo = exame.corFundo
                this.agendamento.corLetra = exame.corLetra
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