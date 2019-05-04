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
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import { ModalAdicionaModeloDescricaoComponent } from '../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalCadastroPacienteComponent } from '../cadastros/paciente/modal-cadastro-paciente.component';
import { PacienteService } from '../services/paciente.service';
import { Convenio } from '../modelos/convenio';
import { ConvenioService } from '../services/convenio.service';
import { ModeloDescricao } from '../modelos/naoPersistidos/modeloDescricao';
import { Util } from '../uteis/Util';
import{ModalErrorComponent} from '../shared/modal/modal-error.component';

@Component({
  selector: 'app-modal-adiciona-agendamento.component',
  templateUrl: './modal-adiciona-agendamento.component.html',
  styleUrls: ["./styles.css"]
})

export class ModalAdicionaAgendamentoComponent {
  agendamento: Agendamento = new Agendamento();
  horaInicial: string;
  horaFinal: string;

  paciente: Paciente = new Paciente;
  tipoAgendamentoEnum = ETipoAgendamento;
  tipoAgenda: string = ETipoAgendamento[1].toString();
  nomePacientes: Array<string>;
  pacientes: Array<Paciente> = [];
  pacienteSelecionado: string;
  locais: Array<Local> = [];
  local: Local;
  procedimentos: Array<Procedimento> = [];
  procedimento: Procedimento;
  exames: Array<Exame> = [];
  exame: Exame;
  util = new Util();
  dataAgenda = this.util.dataParaString(new Date());
  convenios: Array<Convenio> = [];
  cirurgias: Array<Cirurgia> = [];
  cirurgia: Cirurgia;
  falhaNaBusca = true;

  @ViewChild('tipoAgendamento', { read: ElementRef }) private tipoAgendamento: ElementRef;

  constructor(public activeModal: NgbActiveModal, public modalService: NgbModal, private localService: LocalService,
    private exameService: ExameService, private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService,
    private pacienteService: PacienteService, private convenioService: ConvenioService) { }

  salvar() {
    //validar se registros preenchidos existem
    //validar horario data agendamento se pertence a configuração do médico 

    if (this.agendamento.dataAgendamentoInicial == null || this.agendamento.dataAgendamentoFinal == null)
    {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = "Data/Hora inválida.";
    }
    this.activeModal.close(this.agendamento);
  }

  fechar() {
    this.activeModal.close();
  }

  public formataData(e): void {
    if (e.target.id == "dataAgendamento") {
      var data = this.util.stringParaData(e.target.value);
      this.agendamento.dataAgendamentoInicial.setDate(data.getDate());
      this.agendamento.dataAgendamentoFinal.setDate(data.getDate());
    }
  }

  public concatenaHora(event): void {

    if (event.target.id == "horaInicial") {
      if (this.agendamento.dataAgendamentoInicial != null)
        this.agendamento.dataAgendamentoInicial.setHours(parseInt(event.target.value.toString().substring(0, 2)), parseInt(event.target.value.toString().substring(3, 5)));
    }
    else if (event.target.id == "horaFinal") {
      if (this.agendamento.dataAgendamentoFinal != null)
        this.agendamento.dataAgendamentoFinal.setHours(parseInt(event.target.value.toString().substring(0, 2)), parseInt(event.target.value.toString().substring(3, 5)));
    }
  }

  ngOnInit() {
    this.tipoAgendamento.nativeElement.focus();
    this.agendamento.dataAgendamentoInicial = new Date();
    this.agendamento.dataAgendamentoFinal = new Date();
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
                  this.agendamento.convenio = convenioCadastrado;
                });

                this.agendamento.convenio = this.convenios.find(c => c.nomeConvenio == convenio.descricao);
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
              this.local = localExistente;
            }
            else {

              this.local = new Local();
              this.local.descricao = local.descricao;
              this.locais.push(this.local);

              this.localService.salvar(this.local).subscribe(localCadastrado => {
                this.agendamento.local = localCadastrado;
              });

              this.local = this.locais.find(c => c.descricao == local.descricao);
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
              this.cirurgia = cirurgiaExistente;
            }
            else {

              this.cirurgia = new Cirurgia();
              this.cirurgia.descricao = cirurgia.descricao;
              this.cirurgia.cor = cirurgia.cor;
              this.cirurgias.push(this.cirurgia);

              this.cirurgia = this.cirurgias.find(c => c.descricao == cirurgia.descricao);
              this.cirurgiaService.salvar(this.cirurgia).subscribe(cirurgiaCadastrado => {
                this.agendamento.cirurgia = cirurgiaCadastrado;
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
              this.procedimento = procedimentoExistente;
            }
            else {
              this.procedimento = new Cirurgia();
              this.procedimento.descricao = procedimento.descricao;
              this.procedimento.cor = procedimento.cor;

              this.procedimentos.push(this.procedimento);
              this.procedimento = this.procedimentos.find(c => c.descricao == procedimento.descricao);

              this.procedimentoService.salvar(this.procedimento).subscribe(procedimentoCadastrado => {
                this.agendamento.procedimento = procedimentoCadastrado;
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
              this.exame = exameExistente;
            }
            else {
              this.exame = new Cirurgia();
              this.exame.descricao = exame.descricao;
              this.exame.cor = exame.cor;

              this.exames.push(this.exame);
              this.exame = this.exames.find(c => c.descricao == exame.descricao);

              this.exameService.salvar(this.exame).subscribe(exameCadastrado => {
                this.agendamento.exame = exameCadastrado;
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
      debounceTime(100),
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