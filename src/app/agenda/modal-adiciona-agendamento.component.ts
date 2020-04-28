import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { Paciente } from '../modelos/paciente';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Local } from '../modelos/local';
import { Exame } from '../modelos/exame';
import { Medico } from '../modelos/medico';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import { ModalAdicionaModeloDescricaoComponent } from '../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalCadastroPacienteComponent } from '../cadastros/paciente/modal-cadastro-paciente.component';
import { Convenio } from '../modelos/convenio';
import { ModeloDescricao } from '../modelos/naoPersistidos/modeloDescricao';
import { Util } from '../uteis/Util';
import { ModalErrorComponent } from '../shared/modal/modal-error.component';
import { ValidadorAgendamento } from './validadorAgendamento';
import { AgendamentoService } from '../services/agendamento.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { MedicoService } from '../services/medico.service';
import { AppService } from '../services/app.service';
import { PacienteService } from '../services/paciente.service';
import { LocalService } from '../services/local.service';
import { ConvenioService } from '../services/convenio.service';
import { CirurgiaService } from '../services/cirurgia.service';
import { ExameService } from '../services/exame.service';
import { ProcedimentoService } from '../services/procedimento.service';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { UploadService } from '../services/upload.service';
import { TimelineService } from '../services/timeline.service';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { FormaDePagamento } from '../modelos/formaDePagamento';
import { ModalPagamentoAgendamentoComponent } from '../cadastros/agendamento-pagamento/modal-pagamento-agendamento.component';
import { CaixaService } from '../services/caixa.service';
import { FormaDePagamentoService } from '../services/forma-de-pagamento.service';

@Component({
  selector: 'app-modal-adiciona-agendamento.component',
  templateUrl: './modal-adiciona-agendamento.component.html',
  styleUrls: ["./styles.css"]
})

export class ModalAdicionaAgendamentoComponent implements OnInit, AfterViewInit {

  isSpinnerVisible = false;
  editando = false;
  agendamento = new Agendamento();
  agendamentoJson: Agendamento;
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
  telefone: string;
  obrigaPaciente = true;
  agendamentoEmAtendimento = false;
  formaDePagamentos = new Array<FormaDePagamento>();
  sourcePagamentos: LocalDataSource;
  totalPagamentos: string;
  selecionarAbaPagamento: boolean;
  mensagemUltimoAgendamento: string;
  ultimoAgendamentoCancelado = false;

  @ViewChild('tipoAgendamento', { read: ElementRef, static: false }) private tipoAgendamento: ElementRef;
  @ViewChild('pacienteModel', { read: ElementRef, static: false }) private pacienteModel: ElementRef;
  @ViewChild('tipoExame', { read: ElementRef, static: false }) private exameModel: ElementRef;
  @ViewChild('tipoCirurgia', { read: ElementRef, static: false }) private cirurgiaModel: ElementRef;
  @ViewChild('tipoLocal', { read: ElementRef, static: false }) private localCirurgiaModel: ElementRef;
  @ViewChild('tipoProcedimento', { read: ElementRef, static: false }) private procedimentoModel: ElementRef;
  @ViewChild('horaInicialModel', { read: ElementRef, static: false }) private horaInicialModel: ElementRef;
  @ViewChild('horaFinalModel', { read: ElementRef, static: false }) private horaFinalModel: ElementRef;
  @ViewChild('dataAgendamento', { read: ElementRef, static: false }) private dataAgendamentoModel: ElementRef;
  @ViewChild('convenioModel', { read: ElementRef, static: false }) private convenioModel: ElementRef;

  constructor(public activeModal: NgbActiveModal, private timelineService: TimelineService, private router: Router, private caixaService: CaixaService,
    private medicoService: MedicoService, private agendamentoService: AgendamentoService, public modalService: NgbModal, private appService: AppService, private formaPagamentoService: FormaDePagamentoService,
    private uploadService: UploadService, private pacienteService: PacienteService, private convenioService: ConvenioService, private procedimentoService: ProcedimentoService, private localService: LocalService, private cirurgiaService: CirurgiaService, private exameService: ExameService) {
  }

  ngAfterViewInit(): void {
    this.tipoAgendamento.nativeElement.focus();

    if (this.editando) {
      this.tipoAgendamento.nativeElement.setAttribute('disabled', true);
      this.exameModel.nativeElement.setAttribute('disabled', true);
      this.cirurgiaModel.nativeElement.setAttribute('disabled', true);
      this.localCirurgiaModel.nativeElement.setAttribute('disabled', true);
      this.pacienteModel.nativeElement.setAttribute('readonly', true);
      this.procedimentoModel.nativeElement.setAttribute('disabled', true);
    }

    if (this.agendamento.situacaoAgendamento == ESituacaoAgendamento["Em Atendimento"]) {
      this.horaInicialModel.nativeElement.setAttribute('disabled', true);
      this.horaInicialModel.nativeElement.setAttribute('disabled', true);
      this.horaFinalModel.nativeElement.setAttribute('disabled', true);
      this.dataAgendamentoModel.nativeElement.setAttribute('disabled', true);
      this.convenioModel.nativeElement.setAttribute('disabled', true);
    }
  }

  ngOnInit() {

    this.nomePacientes = new Array<string>();
    this.pacientes.forEach(d => {
      this.nomePacientes.push(d.nomeCompleto);
    });

    if (this.agendamentoJson != null)
      this.agendamento = this.agendamentoJson;

    if (this.editando) {

      this.agendamentoEmAtendimento = this.agendamento.situacaoAgendamento == ESituacaoAgendamento["Em Atendimento"];

      this.tituloTela = "Editar Agendamento - ";
      this.falhaNaBusca = false;
      this.tipoAgenda = ETipoAgendamento[this.agendamento.tipoAgendamento];

      if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {

        if (!this.util.isNullOrWhitespace(this.agendamento.pacienteId) && this.util.hasItems(this.pacientes)) {
          this.paciente = this.pacientes.find(c => c.id == this.agendamento.pacienteId);
          this.pacienteSelecionado = this.nomePacientes.find(c => c == this.paciente.nomeCompleto);
          this.agendamento.paciente = this.paciente;

          this.buscarDadosPaciente();
        }

        if (!this.util.isNullOrWhitespace(this.agendamento.convenioId) && this.util.hasItems(this.convenios))
          this.agendamento.convenio = this.convenios.find(c => c.id == this.agendamento.convenioId);

        if (!this.util.isNullOrWhitespace(this.agendamento.exameId) && this.util.hasItems(this.exames))
          this.agendamento.exame = this.exames.find(c => c.id == this.agendamento.exameId);

        if (!this.util.isNullOrWhitespace(this.agendamento.cirurgiaId) && this.util.hasItems(this.cirurgias))
          this.agendamento.cirurgia = this.cirurgias.find(c => c.id == this.agendamento.cirurgiaId);

        if (!this.util.isNullOrWhitespace(this.agendamento.localId) && this.util.hasItems(this.locais))
          this.agendamento.local = this.locais.find(c => c.id == this.agendamento.localId);

        if (!this.util.isNullOrWhitespace(this.agendamento.procedimentoId) && this.util.hasItems(this.procedimentos)) {

          this.agendamento.procedimento = this.procedimentos.find(c => c.id == this.agendamento.procedimentoId);

          this.obrigaPaciente = this.agendamento.procedimento.obrigaPaciente;
        }

        if (this.util.hasItems(this.agendamento.pagamentos) && this.util.hasItems(this.formaDePagamentos)) {

          if (this.util.hasItems(this.agendamento.pagamentos)) {
            this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos);
          }
          let soma = 0;
          this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
          this.totalPagamentos = this.util.formatarDecimalBlur(soma);
        }
      }
      else this.obrigaPaciente = false;

      this.dataAgenda = this.util.dataParaString(this.agendamento.dataAgendamento);

    }
    else {
      this.tituloTela = "Novo Agendamento - ";
      this.agendamento.medicoId = this.medico.id;
      this.agendamento.clinicaId = this.appService.retornarClinicaCorrente().id;
      this.agendamento.funcionarioId = this.appService.retornarUsuarioCorrente().funcionarioId;
      this.dataAgenda = this.util.dataParaString(this.agendamento.dataAgendamento);
    }

    this.tituloTela += this.medico.nomeCompleto;
  }

  finalizarAtendimento() {

    this.agendamento.horaFinalAtendimento = this.util.horaAgoraString();
    this.agendamento.situacaoAgendamento = ESituacaoAgendamento.Finalizado;

    this.agendamentoService.salvar(this.agendamento).subscribe((novoAgendamento: Agendamento) => {
      this.activeModal.close(novoAgendamento)
    });
  }

  salvar() {

    var retorno = false;

    this.agendamento.pacienteId = this.paciente.id;

    if (this.obrigaPaciente && this.util.isNullOrWhitespace(this.agendamento.pacienteId)) {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = "Paciente inválido.";
      retorno = true;
    }

    if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio && !this.util.validaData(this.util.dataParaString(this.agendamento.dataAgendamento))) {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = "Data/Hora inválida.";
      retorno = true;
    }

    if (this.agendamento.situacaoAgendamento == ESituacaoAgendamento.Cancelado)
      this.agendamento.situacaoAgendamento = ESituacaoAgendamento.Agendado;

    var validaHoras = this.validadorAgendamento.validaHorasAgendamento(this.medico.configuracaoAgenda,
      this.util.dataParaString(this.agendamento.dataAgendamento), this.agendamento.horaInicial, this.agendamento.horaFinal, this.agendamento.tipoAgendamento);

    if (validaHoras != "") {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = validaHoras;
      retorno = true;
    }

    if (!retorno) {
      this.agendamento = this.agendamentoService.tratarCorAgendamento(this.agendamento, this.exames, this.cirurgias, this.procedimentos);
      this.agendamentoService.salvar(this.agendamento).subscribe((novoAgendamento: Agendamento) => {
        this.activeModal.close(novoAgendamento)
      });
    }
  }

  fechar() {
    this.activeModal.close();
  }

  historicoPaciente() {
    if (this.paciente != null && !this.util.isNullOrWhitespace(this.paciente.id)) {
      this.timelineService.pacienteId = this.paciente.id;
      this.timelineService.paciente = this.paciente;
      this.activeModal.close();
      this.router.navigate(['/listagem/timeline']);
    }
    else {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = "Paciente inválido.";
    }
  }

  public formataData(e): void {
    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    if (e.target.id == "dataAgendamento") {
      this.agendamento.dataAgendamento = this.util.stringParaData(dataFormatada);
      this.dataAgenda = dataFormatada;
    }
  }

  selecionaProcedimento(e: any) {
    var procedimento = this.procedimentos.find(c => c.id == this.agendamento.procedimentoId);
    if (procedimento != null) {
      this.falhaNaBusca = this.obrigaPaciente = procedimento.obrigaPaciente;
      if (!procedimento.obrigaPaciente) {
        this.paciente = null;
        this.pacienteSelecionado = "";
      }
    }
  }

  selecionaTipoAgendamento(value: string) {
    this.agendamento.tipoAgendamento = ETipoAgendamento[value];

    if (ETipoAgendamento[value] == ETipoAgendamento.Bloqueio) {
      this.falhaNaBusca = this.obrigaPaciente = false;
    }
    else if (this.pacienteSelecionado == "")
      this.falhaNaBusca = true;

    this.agendamento.procedimento = null;
    this.agendamento.procedimentoId = null;
    this.agendamento.cirurgia = null;
    this.agendamento.cirurgiaId = null;
    this.agendamento.local = null;
    this.agendamento.localId = null;
    this.agendamento.exame = null;
    this.agendamento.exameId = null;
  }

  adicionaPaciente() {
    var modalNovoPaciente = this.modalService.open(ModalCadastroPacienteComponent, { size: 'lg' })

    modalNovoPaciente.result.then((paciente: Paciente) => {
      if (paciente != null && paciente.nomeCompleto != '') {
        var pacienteExistente = this.pacientes.find(c => c.nomeCompleto == paciente.nomeCompleto);

        if (pacienteExistente != null) {
          this.agendamento.paciente = pacienteExistente;
          this.agendamento.pacienteId = pacienteExistente.id;
          this.pacienteSelecionado = pacienteExistente.nomeCompleto;
          this.paciente = pacienteExistente;

          this.falhaNaBusca = false;
          this.buscarDadosPaciente();
        }
        else {

          this.pacientes.push(paciente);
          this.nomePacientes.push(paciente.nomeCompleto);
          this.pacienteSelecionado = paciente.nomeCompleto;

          this.pacienteService.salvar(paciente).subscribe(pacienteCadastrado => {

            if (!this.medico.conveniosId.includes(paciente.convenioId)) {
              this.convenios.push(paciente.convenio);
              this.agendamento.convenio = paciente.convenio;
              this.agendamento.convenioId = paciente.convenioId;
              this.medico.conveniosId.push(paciente.convenioId);
              this.medicoService.salvar(this.medico).subscribe(c => { });
            }

            if (paciente.foto != null)
              this.uploadService.salvarImagem(paciente.foto, "paciente", pacienteCadastrado.id);

            this.agendamento.paciente = pacienteCadastrado;
            this.paciente = pacienteCadastrado
            this.agendamento.pacienteId = pacienteCadastrado.id;

            this.falhaNaBusca = false;
            this.buscarDadosPaciente();

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
                this.agendamento.convenioId = convenioExistente.id;
                this.medico.conveniosId.push(convenioExistente.id);
                this.medicoService.salvar(this.medico).subscribe(c => { });
              }
              else {

                var convenioNovo = new Convenio();
                convenioNovo.descricao = convenio.descricao;

                this.convenioService.salvar(convenioNovo).subscribe(convenioCadastrado => {
                  this.convenios.push(convenioCadastrado);
                  this.agendamento.convenio = this.convenios.find(c => c.descricao == convenioCadastrado.descricao);

                  this.agendamento.convenioId = convenioCadastrado.id;
                  this.medico.conveniosId.push(convenioCadastrado.id);
                  this.medicoService.salvar(this.medico).subscribe(c => { });
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
              this.agendamento.localId = localExistente.id;
            }
            else {

              var localNovo = new Local();
              localNovo.descricao = local.descricao;

              this.localService.salvar(localNovo).subscribe(localCadastrado => {
                this.locais.push(localCadastrado);
                this.agendamento.local = this.locais.find(c => c.descricao == localCadastrado.descricao);
                this.agendamento.localId = localCadastrado.id;
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
              this.agendamento.cirurgiaId = cirurgiaExistente.id;

            }
            else {
              var cirurgiaNova = new Cirurgia();
              cirurgiaNova.descricao = cirurgia.descricao;
              cirurgiaNova.corFundo = cirurgia.corFundo;
              cirurgiaNova.corLetra = cirurgia.corLetra;


              this.cirurgiaService.salvar(cirurgiaNova).subscribe(cirurgiaCadastrado => {
                this.cirurgias.push(cirurgiaCadastrado);
                this.agendamento.cirurgia = this.cirurgias.find(c => c.descricao == cirurgiaCadastrado.descricao);
                this.agendamento.cirurgiaId = cirurgiaCadastrado.id;

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
              this.agendamento.procedimentoId = procedimentoExistente.id;
            }
            else {
              var procedimentoNovo = new Procedimento();
              procedimentoNovo.descricao = procedimento.descricao;
              procedimentoNovo.corFundo = procedimento.corFundo;
              procedimentoNovo.corLetra = procedimento.corLetra;

              this.procedimentoService.salvar(procedimentoNovo).subscribe(procedimentoCadastrado => {
                this.procedimentos.push(procedimentoCadastrado);

                this.agendamento.procedimento = this.procedimentos.find(c => c.descricao == procedimentoCadastrado.descricao);
                this.agendamento.procedimentoId = procedimentoCadastrado.id;
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
              this.agendamento.exameId = exameExistente.id;
            }
            else {

              var exameNovo = new Exame();
              exameNovo.descricao = exame.descricao;
              exameNovo.corFundo = exame.corFundo;
              exameNovo.corLetra = exame.corLetra;

              this.exameService.salvar(exameNovo).subscribe(exameCadastrado => {
                this.exames.push(exameCadastrado);

                this.agendamento.exame = this.exames.find(c => c.descricao == exameCadastrado.descricao);

                this.agendamento.exameId = exameCadastrado.id;
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
      this.agendamento.pacienteId = paciente.id;

      this.buscarDadosPaciente();

      if (!this.util.isNullOrWhitespace(paciente.convenioId)) {
        this.agendamento.convenioId = paciente.convenioId;
        this.agendamento.convenio = this.convenios.find(c => c.id == paciente.convenioId);
      }
    }

  }

  buscarDadosPaciente() {
    this.telefone = this.pacienteService.retornarTelefonePaciene(this.paciente);
    this.buscarUltimoAgendamentoPaciente();
  }

  buscarUltimoAgendamentoPaciente() {
    if (this.paciente != null) {
      var agendamentoId = this.editando ? this.agendamento.id : "";

      this.agendamentoService.buscarUltimoAgendamentoPaciente(this.paciente.id, agendamentoId).subscribe(ultimoAgendamento => {
        if (ultimoAgendamento != null) {
          this.ultimoAgendamentoCancelado = ultimoAgendamento.situacaoAgendamento == ESituacaoAgendamento.Cancelado;

          this.mensagemUltimoAgendamento = "Último agendamento em " + this.util.dataParaString(ultimoAgendamento.dataAgendamento) +
            " | Situação: " + ESituacaoAgendamento[ultimoAgendamento.situacaoAgendamento];

          if (ultimoAgendamento.convenio.diasRetorno > 0) {
            var dataRetorno = new Date(ultimoAgendamento.dataAgendamento);
            dataRetorno.setDate(dataRetorno.getDate() + ultimoAgendamento.convenio.diasRetorno)

            this.mensagemUltimoAgendamento = this.mensagemUltimoAgendamento + " | Retorno até " + this.util.dataParaString(dataRetorno);
          }

          if (ultimoAgendamento.contemPagamentos) {
            var soma = 0;
            ultimoAgendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));

            this.mensagemUltimoAgendamento = this.mensagemUltimoAgendamento + " | Valor: " + this.util.formatarDecimalBlur(soma);
          }
        }
      });
    }
  }

  adicionarPagamento() {

    this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
      if (!this.util.hasItems(caixas)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não existe caixa aberto, abra um caixa para proceder com o pagamento.";
      }
      else {

        var modalPagamento = this.modalService.open(ModalPagamentoAgendamentoComponent, { size: "lg" });

        modalPagamento.componentInstance.agendamento = this.agendamento;
        modalPagamento.componentInstance.medico = this.medico;
        modalPagamento.componentInstance.formasPagamento = this.formaDePagamentos;
        modalPagamento.componentInstance.caixas = caixas;

        modalPagamento.result.then(retorno => {

          if (retorno != null && retorno != "") {
            this.agendamento = retorno;
          }

          this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos);

          let soma = 0;
          this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
          this.totalPagamentos = this.util.formatarDecimalBlur(soma);

        }, (error) => { })
      }
    });
  }

  settingsPagamentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum pagamento",
    columns: {
      formaPagamentoId: {
        title: 'Forma Pagamento',
        filter: true,
        valuePrepareFunction: (formaPagamentoId) => {
          return formaPagamentoId == null || !this.util.hasItems(this.formaDePagamentos) ? "" : this.formaDePagamentos.find(c => c.id == formaPagamentoId).descricao;
        }
      },
      parcela: {
        title: 'Parcela',
        filter: false
      },
      valor: {
        title: 'Valor',
        filter: false,
        valuePrepareFunction: (valor) => {
          return this.util.formatarDecimal(valor);
        }
      }
    },
    add:
    {
      addButtonContent: 'Adicionar Pagamento'
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    },
    actions:
    {
      edit: true,
      add: true,
      delete: true,
      columnTitle: '  '
    },
  };

}