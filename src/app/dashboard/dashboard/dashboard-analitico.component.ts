import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import { ChartType, ChartEvent } from 'ng-chartist/dist/chartist.component';
import { AgendamentoService } from '../../services/agendamento.service';
import { ContaReceberService } from '../../services/contaReceber.service';
import { ContaPagarService } from '../../services/contaPagar.service';
import { ContaReceber } from '../../modelos/contaReceber';
import { ContaPagar } from '../../modelos/contaPagar';
import { Agendamento } from '../../modelos/agendamento';
import { Util } from '../../uteis/Util';
import { ESituacaoAgendamento } from '../../enums/ESituacaoAgendamento';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { AppService } from '../../services/app.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: './dashboard-analitico.component.html',
  styleUrls: ['./dashboard-analitico.component.css']
})
export class DashboardAnaliticoComponent implements OnInit {

  isSpinnerVisible = false;
  contasReceber: Array<ContaReceber> = new Array<ContaReceber>();
  contasPagar: Array<ContaPagar> = new Array<ContaPagar>();
  medicos: Array<Medico> = new Array<Medico>();
  medico: Medico = new Medico();
  agendamentos: Array<Agendamento> = new Array<Agendamento>();
  util = new Util();
  dataHoje = new Date();
  sourceAgendamentosMedicos: LocalDataSource;
  dataInicial = this.util.dataParaString(new Date());
  dataFinal = this.util.dataParaString(new Date());

  totalRecebido = this.util.formatarDecimal(0);
  totalAPagar = this.util.formatarDecimal(0);
  lucroBruto = this.util.formatarDecimal(0);
  projecaoLucroBruto = this.util.formatarDecimal(0);
  totalAgendamentosMedicos = this.util.formatarDecimal(0);

  tempoMedioAgendamento = "";
  totalAgendados = 0;
  totalConfirmados = 0;
  totalFinalizados = 0;
  totalCancelados = 0;
  usuario = this.appService.retornarUsuarioCorrente();


  constructor(private contaPagarService: ContaPagarService, private modalService: NgbModal, private appService: AppService,
    private medicoService: MedicoService, private contaReceberService: ContaReceberService, private agendamentoService: AgendamentoService) { }


  ngOnInit(): void {

    var primeiroDiaMes = new Date(this.dataHoje.getFullYear(), this.dataHoje.getMonth(), 1);
    this.dataInicial = this.util.dataParaString(primeiroDiaMes);

    this.buscarDadosDashboard(primeiroDiaMes, this.dataHoje).subscribe(c => {
      this.refreshPage();

    });
  }

  montarTooltip() {

    this.totalConfirmados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Confirmado).length;
    this.totalFinalizados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento["Finalizado"]).length;
    this.totalAgendados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Agendado).length;
    this.totalCancelados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Cancelado).length;

  }

  refreshPage() {
    this.calcularTotais();
    this.montarListagemMedico();
    this.montarTooltip();
    this.isSpinnerVisible = false;
  }

  buscar() {
    let retorno = false;

    //transforma 01112019 para 01/11/2019
    var dataInicioBusca = this.util.formatarData(this.dataInicial);
    var dataFimBusca = this.util.formatarData(this.dataFinal);

    if (!this.util.validaData(dataInicioBusca) || !this.util.validaData(dataFimBusca) || this.util.stringParaData(dataInicioBusca) > this.util.stringParaData(dataFimBusca)) {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = "Data inválida.";
      retorno = true;
    }

    if (!retorno) {
      var dataInicio = this.util.stringParaData(dataInicioBusca);
      var dataFim = this.util.stringParaData(dataFimBusca);
      this.isSpinnerVisible = true;

      this.buscarDadosDashboard(dataInicio, dataFim).subscribe(c => {
        this.refreshPage();
      });
    }
  }

  public formataData(e): void {
    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    if (e.target.id == "dataInicio") {
      this.dataInicial = dataFormatada;
    }
    if (e.target.id == "dataFim") {
      this.dataFinal = dataFormatada;
    }
  }

  montarListagemMedico() {
    let dados = new Array<any>();
    var totalAgendamentos = 0;
    this.sourceAgendamentosMedicos = new LocalDataSource();

    this.medicos.forEach(medico => {
      if (this.medico != null && !this.util.isNullOrWhitespace(this.medico.id) && medico.id != this.medico.id)
        return;

      let agendamentosMedicos = this.agendamentos.filter(c => c.medicoId == medico.id);

      let totalRecebidoAgendamentos = 0;
      let mediaAgendamento = 0;
      let quantidadeAgendamentos = 0;

      if (agendamentosMedicos.length > 0) {

        agendamentosMedicos.filter(c => this.util.hasItems(c.pagamentos)).forEach(agendamento => {
          agendamento.pagamentos.forEach(pagamento => {
            totalRecebidoAgendamentos = totalRecebidoAgendamentos + pagamento.parcela * pagamento.valor
          });
        });

        quantidadeAgendamentos = agendamentosMedicos.length;
        mediaAgendamento = totalRecebidoAgendamentos > 0 && quantidadeAgendamentos > 0 ? totalRecebidoAgendamentos / quantidadeAgendamentos : 0;
      }

      totalAgendamentos = totalAgendamentos + totalRecebidoAgendamentos;

      dados.push({ nomeMedico: medico.nomeCompleto, quantidadeAgendamentos: quantidadeAgendamentos, total: totalRecebidoAgendamentos, mediaAgendamento: mediaAgendamento })
    });

    this.totalAgendamentosMedicos = this.util.formatarDecimal(totalAgendamentos);

    this.sourceAgendamentosMedicos = new LocalDataSource(dados.sort((a, b) => a.nomeMedico.localeCompare(b.nomeMedico)));

  }

  calcularTotais() {
    let totalAgendamentoPagos = 0;
    let totalContasRebidas = 0;
    let totalContasPagar = 0;

    this.medicos.forEach(medico => {
      var agendamentosPagos = this.agendamentos.filter(c => this.util.hasItems(c.pagamentos) && c.medicoId == medico.id);

      agendamentosPagos.forEach(agendamento => {
        agendamento.pagamentos.forEach(pagamento => {
          totalAgendamentoPagos = totalAgendamentoPagos + pagamento.parcela * pagamento.valor
        });
      });
    });

    var contasRecebidasPagas = this.contasReceber.filter(c => this.util.hasItems(c.pagamentos));

    contasRecebidasPagas.forEach(conta => {
      conta.pagamentos.forEach(pagamento => {
        totalContasRebidas = totalContasRebidas + pagamento.parcela * pagamento.valor
      });
    });

    var contasPagarPagas = this.contasPagar.filter(c => this.util.hasItems(c.pagamentos));

    contasPagarPagas.forEach(conta => {
      conta.pagamentos.forEach(pagamento => {
        totalContasPagar = totalContasPagar + pagamento.parcela * pagamento.valor
      });
    });

    this.totalRecebido = this.util.formatarDecimal(totalContasRebidas + totalAgendamentoPagos);
    this.totalAPagar = this.util.formatarDecimal(totalContasPagar);
    let lucroBrutoDecimal = (totalContasRebidas + totalAgendamentoPagos) - totalContasPagar;
    this.lucroBruto = this.util.formatarDecimal(lucroBrutoDecimal);
    this.projecaoLucroBruto = this.util.formatarDecimal((lucroBrutoDecimal / this.dataHoje.getDate()) * 30);
  }

  buscarDadosDashboard(dataInicio: Date, dataFim: Date) {
    this.isSpinnerVisible = true;

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(dados => {

      if (dados.length > 1) {
        let medicoTodos = new Medico();
        medicoTodos.nomeCompleto = "Todos";
        medicoTodos.id = "";
        this.medicos.push(medicoTodos);

        this.medicos = this.medicos.concat(dados);

        if (this.medico == null)
          this.medico = this.medicos.find(c => c == medicoTodos);
        else
          this.medico = this.medicos.find(c => c.id == this.medico.id);
      }
      else {
        this.medicos = dados;
        this.medico = this.medicos.find(c => true);
      }

      //quando usuário for um médico traz ele selecionado primeiro
      if (!this.util.isNullOrWhitespace(this.usuario.medicoId))
        this.medico = this.medicos.find(c => c.id == this.usuario.medicoId);

    });

    let reqContaReceber = this.contaReceberService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id).map(dados => {
      this.contasReceber = dados;
    });

    let reqContaPagar = this.contaPagarService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id).map(dados => {
      this.contasPagar = dados;
    });

    let reqAgendamento = this.agendamentoService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id).map(dados => {
      this.agendamentos = dados;
      console.log(this.agendamentoService.calcularTempoMedio(dados));
      this.tempoMedioAgendamento = this.agendamentoService.calcularTempoMedio(dados) + " Minutos";
    });

    return Observable.forkJoin([reqContaReceber, reqContaPagar, reqAgendamento, reqMedicos]);

  }

  settingsAgendamentosMedicos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      nomeMedico: {
        title: 'Médico',
        filter: false
      },
      quantidadeAgendamentos: {
        title: 'Qtd. Agendamentos',
        filter: false
      },
      total: {
        title: 'Total Agendamentos',
        valuePrepareFunction: (total) => { return this.util.formatarDecimal(total) },
        filter: false
      },
      mediaAgendamento: {
        title: 'Média por Agendamento',
        valuePrepareFunction: (mediaAgendamento) => { return this.util.formatarDecimal(mediaAgendamento) },
        filter: false
      }
    },
    actions:
    {
      columnTitle: '',
      delete: false,
      add: false,
      edit: false
    }
  };
}
