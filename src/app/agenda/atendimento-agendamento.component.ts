import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
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


@Component({
  templateUrl: './atendimento-agendamento.component.html',
})

export class AtendimentoAgendamentoComponent implements OnInit {


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
  iniciadoAgendamento="";

  constructor(private pacienteService: PacienteService, private agendamentoService: AgendamentoService,
    private appService: AppService, private uploadService: UploadService, private modalService: NgbModal, private convenioService:ConvenioService,
    private caixaService: CaixaService, private formaPagamentoService: FormaDePagamentoService,
    private medicoService: MedicoService, private prescricaoPacienteService: PrescricaoPacienteService, ) {
  }

  ngOnInit(): void {

    this.agendamento = this.agendamentoService.agendamento;

    if (this.agendamento != null) {
      this.isSpinnerVisible = true;

      this.buscarModelos().subscribe(c => {


        this.nomePaciente = this.paciente.nomeCompleto.toUpperCase();
        this.anosConvenio = this.pacienteService.RetornarIdadePaciente(this.paciente).toString() + " anos, ";
      this.iniciadoAgendamento = "ATENDIMENTO INICIADO EM " + this.util.dataParaString(this.agendamento.dataInicioAtendimento) + " " + this.util.formatarHora(this.agendamento.horaInicialAtendimento);

      console.log(this.nomePaciente, this.anosConvenio, this.iniciadoAgendamento);
        
        if (this.util.isNullOrWhitespace(this.paciente.convenioId))
        {
          this.convenioService.buscarPorId(this.paciente.convenioId).subscribe(convenio=>
            {
              this.anosConvenio = this.anosConvenio + convenio.descricao.toUpperCase
            })
        }

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
          }

          this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos);

          let soma = 0;
          this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
          this.totalPagamentos = this.util.formatarDecimalBlur(soma);

        }, (error) => { })
      }
    });
  }

  buscarModelos() {

    let requisicoes = [];

    if (!this.util.isNullOrWhitespace(this.agendamento.pacienteId)) {
      let reqPaciente = this.pacienteService.buscarPorId(this.agendamento.pacienteId).map(paciente => {
        this.paciente = paciente;
        this.agendamento.paciente = paciente;
        this.telefone = paciente.telefone || paciente.celular ? this.util.formataTelefone(paciente.telefone) + " / " + this.util.formataTelefone(paciente.celular) : "-";
      });
      requisicoes.push(reqPaciente);


      let reqUltimoAgendamento = this.agendamentoService.buscarUltimoAgendamentoPaciente(this.agendamento.pacienteId, this.agendamento.id).map(ultimoAgendamento => {
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
      requisicoes.push(reqUltimoAgendamento);
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

    let reqPrescricaoPaciente = this.prescricaoPacienteService.buscarPorPaciente(this.paciente.id).map(c => {
      if (this.util.hasItems(c)) {
        this.prescricoes = c;
        this.prescricaoPacienteService.listaPrescricaoPaciente = c;
        this.sourcePrescricao = new LocalDataSource(c);
      }
    });
    requisicoes.push(reqPrescricaoPaciente);


    return forkJoin(requisicoes);
  }

  public formataData(e): void {

    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    else if (e.target.id == "dataUltimaMenstruacao") {
      this.paciente.dataUltimaMenstruacao = this.util.stringParaData(dataFormatada);
      this.dataUltimaMenstru = dataFormatada;
    }
  }


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