import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, } from '@ng-bootstrap/ng-bootstrap';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { AppService } from '../services/app.service'
import { Util } from '../uteis/Util';
import { UploadService } from '../services/upload.service';
import { forkJoin } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../modelos/paciente';
import { AgendamentoService } from '../services/agendamento.service';
import { ModalCadastroPrescricaoPacienteComponent } from '../cadastros/modelo-prescricao/modal-cadastro-prescricao-paciente.component';
import { LocalDataSource } from 'ng2-smart-table';
import { PrescricaoPaciente } from '../modelos/prescricaoPaciente';
import { PrescricaoPacienteService } from '../services/prescricaoPaciente.service';
import { MedicoService } from '../services/medico.service';
import { BotaoImprimirComponent } from '../shared/components/botao-imprimir-component';
import { Medico } from '../modelos/medico';
import { ModalErrorComponent } from '../shared/modal/modal-error.component';
import { ModalPagamentoAgendamentoComponent } from '../cadastros/agendamento-pagamento/modal-pagamento-agendamento.component';
import { CaixaService } from '../services/caixa.service';
import { FormaDePagamento } from '../modelos/formaDePagamento';
import { FormaDePagamentoService } from '../services/forma-de-pagamento.service';
import { ESemanasGestacao } from '../enums/ESemanasGestacao';
import { EDiasGestacao } from '../enums/EDiasGestacao';
import { ConvenioService } from '../services/convenio.service';
import { ModalSucessoComponent } from '../shared/modal/modal-sucesso.component';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';
import { TimelineService } from '../services/timeline.service';
import { ProcedimentoService } from '../services/procedimento.service';
import { CirurgiaService } from '../services/cirurgia.service';
import { ExameService } from '../services/exame.service';
import { Exame } from '../modelos/exame';
import { Cirurgia } from '../modelos/cirurgia';
import { Local } from '../modelos/local';
import { Procedimento } from '../modelos/procedimento';
import { Timeline } from '../modelos/timeline';
import { ModalDetalhesAgendamentoComponent } from './modal-detalhes-agendamento.component';
import { ModalDetalheContaReceberComponent } from '../cadastros/conta-receber/modal-detalhe-conta-receber.component';
import { AgendamentoPagamentoService } from '../services/agendamentoPagamento.service';

@Component({
  templateUrl: './atendimento-agendamento.component.html',
})

export class AtendimentoAgendamentoComponent implements OnInit {

  editorModel;
  spinnerPrescricao: boolean;
  spinnerHistorico: boolean;
  isSpinnerVisible: boolean;
  semanasGestacao = ESemanasGestacao;
  diasGestacao = EDiasGestacao;
  agendamento: Agendamento;
  paciente: Paciente = new Paciente();
  util = new Util();
  horario: string;
  fotoPaciente: any = '../../../assets/images/fotoCadastro.jpg';
  telefone: string = "";
  descricaoData: string;
  mensagemUltimoAgendamento: string;
  ultimoAgendamentoCancelado: boolean;
  sourcePrescricao: LocalDataSource;
  prescricoes = new Array<PrescricaoPaciente>();
  medicos = new Array<Medico>();
  medico: Medico;
  totalPagamentos: string;
  formaDePagamentos = new Array<FormaDePagamento>();
  sourcePagamentos: LocalDataSource;
  exibeAbaEspecialidade: boolean;
  dataUltimaMenstru: string = "01/01/1901"
  nomePaciente = "";
  anosConvenio = "";
  iniciadoAgendamento = "";
  horarioAgendamentoDescricao = "";
  telefoneDescricao = "";
  descricaoLocal = "";
  descricaoProcedimento = "";
  exames: Array<Exame> = [];
  cirurgias: Array<Cirurgia> = [];
  pacientes: Array<Paciente> = [];
  locais: Array<Local> = [];
  procedimentos: Array<Procedimento> = [];
  acoesPermitidas: Array<string> = [];
  agendamentos: Array<Agendamento> = [];
  listaTimeline = new Array<Timeline>();


  constructor(private pacienteService: PacienteService, private agendamentoService: AgendamentoService,
    private uploadService: UploadService, private modalService: NgbModal, private convenioService: ConvenioService,
    private localService: LocalService, private timelineService: TimelineService, private appService: AppService, private agendamentoPagamentoService:AgendamentoPagamentoService,
    private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService, private exameService: ExameService,
    private caixaService: CaixaService, private formaPagamentoService: FormaDePagamentoService, private router: Router,
    private medicoService: MedicoService, private prescricaoPacienteService: PrescricaoPacienteService, ) {
  }

  ngOnInit(): void {

    if (this.agendamentoService.agendamento != null) {
      this.agendamento = this.agendamentoService.agendamento;
      this.editorModel = this.agendamento.descricaoAtendimento;

      this.isSpinnerVisible = true;

      this.buscarModelos().subscribe(c => {

        this.iniciadoAgendamento = "ATENDIMENTO INICIADO EM " + this.util.dataParaString(this.agendamento.dataInicioAtendimento)
          + " " + this.util.formatarHora(this.agendamento.horaInicialAtendimento);
        this.horarioAgendamentoDescricao = this.util.dataParaString(this.agendamento.dataAgendamento) + " " + this.util.formatarHora(this.agendamento.horaInicial) + " - " + this.util.formatarHora(this.agendamento.horaFinal);


        if (this.paciente != null) {
          this.nomePaciente = this.paciente.nomeCompleto.toUpperCase() + ",";
          this.anosConvenio = this.pacienteService.RetornarIdadePaciente(this.paciente).toString() + " anos. Convênio: ";

          this.telefoneDescricao = this.pacienteService.retornarTelefonePaciene(this.paciente);
          if (!this.util.isNullOrWhitespace(this.agendamento.convenioId)) {
            this.convenioService.buscarPorId(this.agendamento.convenioId).subscribe(convenio => {
              if (convenio != null)
                this.anosConvenio = this.anosConvenio + convenio.descricao.toUpperCase();
            })
          }

          this.agendamentoService.buscarUltimoAgendamentoPaciente(this.paciente.id, this.agendamento.id).subscribe(ultimoAgendamento => {

            if (ultimoAgendamento != null) {
              this.ultimoAgendamentoCancelado = ultimoAgendamento.situacaoAgendamento == ESituacaoAgendamento.Cancelado;

              this.mensagemUltimoAgendamento = "Último agendamento em " + this.util.dataParaString(ultimoAgendamento.dataAgendamento) +
                " | Situação: " + ESituacaoAgendamento[ultimoAgendamento.situacaoAgendamento];

              if (ultimoAgendamento.contemPagamentos) {
                var soma = 0;
                ultimoAgendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));

                this.mensagemUltimoAgendamento = this.mensagemUltimoAgendamento + " | Valor: " + this.util.formatarDecimalBlur(soma);
              }
            }

          });


          this.spinnerPrescricao = true;
          this.prescricaoPacienteService.buscarPorPaciente(this.paciente.id).subscribe(c => {
            if (this.util.hasItems(c)) {
              this.prescricoes = c;
              this.prescricaoPacienteService.listaPrescricaoPaciente = c;
              this.sourcePrescricao = new LocalDataSource(c);
            }
            this.spinnerPrescricao = false;
          });
        }

        this.buscarDadosTimeline();

        if (this.util.hasItems(this.agendamento.pagamentos) && this.util.hasItems(this.formaDePagamentos)) {

          if (this.util.hasItems(this.agendamento.pagamentos)) {
            this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos);
          }
          let soma = 0;
          this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
          this.totalPagamentos = this.util.formatarDecimalBlur(soma);
        }

        if (!this.util.isNullOrWhitespace(this.paciente.fotoId)) {
          this.uploadService.downloadImagem(this.paciente.id, "paciente").subscribe(byte => {
            this.fotoPaciente = "data:image/jpeg;base64," + byte['value'];
            this.isSpinnerVisible = false;
          });
        }
        else { this.isSpinnerVisible = false; }
      })
    }
    else {
      this.router.navigate(['/agenda/agenda']);
    }
  }

  buscarDadosTimeline() {
    this.spinnerHistorico = true;

    this.buscarModelosNovoAgendamento().subscribe(c => {

      this.timelineService.paciente = this.paciente;
      this.agendamentoService.buscarAgendamentosPaciente(this.paciente.id, this.appService.retornarUsuarioCorrente().id,
        this.appService.retornarClinicaCorrente().id).subscribe(agendamentos => {

          this.agendamentos = agendamentos;

          this.listaTimeline = this.timelineService.montarDadosTimeline(agendamentos, this.exames, this.cirurgias, this.procedimentos,
             this.locais, this.medicos, true, this.agendamento.id);

          this.spinnerHistorico = false;
        });
    });

  }

  chamaContaReceber(timeline: Timeline) {
    var modalDetalheContaReceber = this.modalService.open(ModalDetalheContaReceberComponent, { size: "lg" });
    modalDetalheContaReceber.componentInstance.contaReceber = timeline.contaReceber;
  }

  chamaAgendamento(agendamentoId: string) {
    var agendamento = this.agendamentos.find(c => c.id == agendamentoId);
    if (agendamento != null) {
      var modalDetalhesAgendamento = this.modalService.open(ModalDetalhesAgendamentoComponent, { size: "lg" });
      modalDetalhesAgendamento.componentInstance.agendamento = agendamento;
    }
    else {
      var modalErro = this.modalService.open(ModalErrorComponent);
      modalErro.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde."
    }
  }

  buscarModelosNovoAgendamento() {

    let reqExames = this.exameService.Todos().map(dados => { this.exames = dados; });
    let reqLocais = this.localService.Todos().map(dados => { this.locais = dados; });
    let reqCirurgias = this.cirurgiaService.Todos().map(dados => { this.cirurgias = dados; });
    let reqProcedimento = this.procedimentoService.Todos().map(dados => { this.procedimentos = dados; });
    let reqMedico = this.medicoService.buscarMedicosPorUsuario()
      .map(dados => { this.medicos = dados; });

    return forkJoin([reqExames, reqMedico, reqLocais, reqCirurgias, reqProcedimento]);
  }

  getEditorInstance(editorInstance: any) {
  }

  cadastroPaciente() {
    this.pacienteService.paciente = this.paciente;
    this.router.navigate(['/cadastros/cadastropaciente']);
  }

  ExibeAbaEspecialidade(especialidade: string) {
    if (this.medico != null) {
      if (!this.exibeAbaEspecialidade)
        this.exibeAbaEspecialidade = this.medico.especialidade.descricao.toUpperCase().includes(especialidade.toUpperCase());
    }
  }

  criarPrescricao() {

    var modalPrescricao = this.modalService.open(ModalCadastroPrescricaoPacienteComponent, { size: "lg" });
    modalPrescricao.componentInstance.paciente = this.paciente;
    modalPrescricao.componentInstance.medico = this.medico;

    modalPrescricao.result.then(novaPrescricao => {

      if (novaPrescricao != null) {

        this.prescricoes.push(novaPrescricao);
        this.sourcePrescricao = new LocalDataSource(this.prescricoes);
      }

    }, error => { })
  }

  editarPrescricao(prescricaoPacienteId) {
    var prescricao = this.prescricoes.find(c => c.id == prescricaoPacienteId);

    if (prescricao != null) {
      var modalPrescricao = this.modalService.open(ModalCadastroPrescricaoPacienteComponent, { size: "lg" });
      modalPrescricao.componentInstance.prescricaoPaciente = prescricao;
      modalPrescricao.componentInstance.medico = this.medico;
      modalPrescricao.componentInstance.editando = true;
      modalPrescricao.componentInstance.paciente = this.paciente;

      modalPrescricao.result.then(novaPrescricao => {

        if (novaPrescricao != null) {
          this.prescricoes.splice(this.prescricoes.indexOf(prescricao), 1);
          this.prescricoes.push(novaPrescricao);
          this.sourcePrescricao = new LocalDataSource(this.prescricoes);
        }

      }, error => { })

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
            this.agendamentoService.salvar(this.agendamento).subscribe(c => {

              this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos); let soma = 0;
              this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
              this.totalPagamentos = this.util.formatarDecimalBlur(soma);
            })
          }
        }, (error) => { })
      }
    });
  }

  buscarModelos() {

    let requisicoes = [];

    if (!this.util.isNullOrWhitespace(this.agendamento.pacienteId)) {
      let reqPaciente = this.pacienteService.buscarPorId(this.agendamento.pacienteId).map(paciente => {
        this.paciente = paciente;
        this.dataUltimaMenstru = this.util.dataParaString(paciente.dataUltimaMenstruacao);
        this.agendamento.paciente = paciente;
        this.telefone = this.pacienteService.retornarTelefonePaciene(paciente);
      });
      requisicoes.push(reqPaciente);

      let reqUltimoAgendamento = this.agendamentoService.buscarUltimoAgendamentoPaciente(this.agendamento.pacienteId, this.agendamento.id).map(ultimoAgendamento => {
        if (ultimoAgendamento != null) {
          this.ultimoAgendamentoCancelado = ultimoAgendamento.situacaoAgendamento == ESituacaoAgendamento.Cancelado;

          console.log(ultimoAgendamento.situacaoAgendamento);
          this.mensagemUltimoAgendamento = "Último agendamento em " + this.util.dataParaString(ultimoAgendamento.dataAgendamento) +
            " | Situação: " + ESituacaoAgendamento[ultimoAgendamento.situacaoAgendamento];

          if (ultimoAgendamento.contemPagamentos) {
            var soma = 0;
            ultimoAgendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));

            this.mensagemUltimoAgendamento = this.mensagemUltimoAgendamento + " | Valor: " + this.util.formatarDecimalBlur(soma);
          }
        }
      });
      requisicoes.push(reqUltimoAgendamento);
    }

    if (!this.util.isNullOrWhitespace(this.agendamento.localId)) {
      let reqLocal = this.localService.buscarPorId(this.agendamento.localId).map(local => {
        this.agendamento.local = local;
        this.descricaoLocal = local.descricao;
      });
      requisicoes.push(reqLocal);
    }

    let reqFormas = this.formaPagamentoService.Todos().map(formas => {
      this.formaDePagamentos = formas;
    });
    requisicoes.push(reqFormas);

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario(true).map(medicos => {
      this.medicos = medicos;
      this.medico = medicos.find(c => c.id == this.agendamento.medicoId);
      this.ExibeAbaEspecialidade("obstetrícia");
    });
    requisicoes.push(reqMedicos);


    return forkJoin(requisicoes);
  }

  salvarAgendamento() {
    this.agendamento.descricaoAtendimento = this.editorModel;

    this.agendamentoService.salvar(this.agendamento).subscribe(c => {

      this.pacienteService.salvar(this.paciente).subscribe(c => {
        this.paciente = c;

        var modal = this.modalService.open(ModalSucessoComponent, { windowClass: "modal-holder modal-error" });

        modal.componentInstance.mensagem = "Agendamento salvo com sucesso.";
      });
    });

  }

  finalizarAtendimento() {

    this.agendamento.descricaoAtendimento = this.editorModel;
    this.agendamento.situacaoAgendamento = ESituacaoAgendamento.Finalizado;
    this.agendamento.corFundo = this.agendamento.corLetra = "#003200";
    this.agendamento.horaFinalAtendimento = this.util.horaAgoraString();

    this.agendamentoService.salvar(this.agendamento).subscribe(c => {

      this.pacienteService.salvar(this.paciente).subscribe(c => {
        this.paciente = c;

        this.router.navigate(['/agenda/agenda']);
      });
    });

  }
  
  imprimirRecibo()
  {
    
      var descricao = this.agendamentoPagamentoService.imprimirRecibo(this.agendamento);

      let popupWinindow;
      popupWinindow = window.open('', '_blank', 'width=800,height=500,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /><title>Recibo</title></head><body onload="window.print()">' + descricao + '</html>');
      popupWinindow.document.close();
  
  }

  public voltar() {
    this.router.navigate(['/agenda/agenda']);
  }

  public formataData(e): void {

    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    if (e.target.id == "dataUltimaMenstruacao") {
      this.paciente.dataUltimaMenstruacao = this.util.stringParaData(dataFormatada);
      this.dataUltimaMenstru = dataFormatada;
    }
  }

  customToolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      //['link', 'image', 'video']                          link and image, video
    ]
  };

  settingsPrescricoes = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      data: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (data) => { return this.util.dataParaString(data) }
      },
      medicoId: {
        title: 'Médico',
        filter: true,
        valuePrepareFunction: (medicoId) => {
          return this.util.hasItems(this.medicos) && !this.util.isNullOrWhitespace(medicoId) ? this.medicos.find(c => c.id == medicoId).nomeCompleto : ""
        }
      },
      id: {
        title: "Download",
        type: "custom",
        filter: false,
        renderComponent: BotaoImprimirComponent,
      }
    },
    actions:
    {
      columnTitle: '',
      delete: false
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    add:
    {
      addButtonContent: 'Nova Prescrição'
    }
  };

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