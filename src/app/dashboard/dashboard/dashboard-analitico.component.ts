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

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  templateUrl: './dashboard-analitico.component.html',
  styleUrls: ['./dashboard-analitico.component.css']
})
export class DashboardAnaliticoComponent implements OnInit {

  subtitle: string;
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

  totalAgendados = 0;
  totalConfirmados = 0;
  totalPagosFinalizados = 0;
  totalCancelados = 0;
  usuario = this.appService.retornarUsuarioCorrente();


  constructor(private contaPagarService: ContaPagarService, private modalService: NgbModal, private appService: AppService,
    private medicoService: MedicoService, private contaReceberService: ContaReceberService, private agendamentoService: AgendamentoService) { }

  public dadosGraficoLinhas: Array<any> = [];

  public labelsGraficoLinhas = new Array<any>();
  public opcoesGraficoLinhas: any = {
    lineTension: 1,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0
        }
      }]
    }
  };

  ngOnInit(): void {

    var primeiroDiaMes = new Date(this.dataHoje.getFullYear(), this.dataHoje.getMonth(), 1);
    this.dataInicial = this.util.dataParaString(primeiroDiaMes);

    this.buscarDadosDashboard(primeiroDiaMes, this.dataHoje).subscribe(c => {
      this.calcularTotais();
      this.montarGrafico();
      this.montarListagemMedico();

      this.isSpinnerVisible = false;

    });
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
        this.calcularTotais();
        this.montarGrafico();
        this.montarListagemMedico();

        this.isSpinnerVisible = false;

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

        agendamentosMedicos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento["Pago/Finalizado"]).forEach(agendamento => {
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

  montarGrafico() {
    let confirmados = new Array<number>();
    let pagosFinalizados = new Array<number>();
    let agendados = new Array<number>();
    let cancelados = new Array<number>();

    this.dadosGraficoLinhas = [];

    //inicializa os arrays para começarem em 0, se nã o gráfico começa encima
    confirmados[0] = 0;
    pagosFinalizados[0] = 0;
    agendados[0] = 0;
    cancelados[0] = 0;

    let maiorValorAxesY = 0;
    for (var i = 1; i <= this.dataHoje.getDate(); i++) {
      confirmados[i] = 0;
      pagosFinalizados[i] = 0;
      agendados[i] = 0;
      cancelados[i] = 0;

      this.medicos.forEach(medico => {

        var agendamentosNaData = this.agendamentos.filter((agenda) => new Date(agenda.dataAgendamento).getDate() == i && agenda.medicoId == medico.id);

        confirmados[i] = confirmados[i] + agendamentosNaData.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Confirmado).length;
        pagosFinalizados[i] = pagosFinalizados[i] + agendamentosNaData.filter(c => c.situacaoAgendamento == ESituacaoAgendamento["Pago/Finalizado"]).length;
        agendados[i] = agendados[i] + agendamentosNaData.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Agendado).length;
        cancelados[i] = cancelados[i] + agendamentosNaData.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Cancelado).length;
      });

      if (confirmados[i] > maiorValorAxesY)
        maiorValorAxesY = confirmados[i];

      if (pagosFinalizados[i] > maiorValorAxesY)
        maiorValorAxesY = pagosFinalizados[i];

      if (agendados[i] > maiorValorAxesY)
        maiorValorAxesY = agendados[i];

      if (cancelados[i] > maiorValorAxesY)
        maiorValorAxesY = cancelados[i];
    }

    this.totalConfirmados = confirmados.reduce(function (total, valor) { return total + valor; }, 0);
    this.totalAgendados = agendados.reduce(function (total, valor) { return total + valor; }, 0);
    this.totalPagosFinalizados = pagosFinalizados.reduce(function (total, valor) { return total + valor; }, 0);
    this.totalCancelados = cancelados.reduce(function (total, valor) { return total + valor; }, 0);
    
    maiorValorAxesY = Math.round(maiorValorAxesY * 1.25) == 0 ? 1 : Math.round(maiorValorAxesY * 1.25);
    this.opcoesGraficoLinhas = {
      lineTension: 1,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            max: maiorValorAxesY,
            min : 0
          }
        }]
      }
    };

    this.dadosGraficoLinhas = [
      { data: agendados, label: 'Agendados(s)' },
      { data: confirmados, label: 'Confirmado(s)' },
      { data: pagosFinalizados, label: 'Finalizado(s)' },
      { data: cancelados, label: 'Cancelado(s)' },
    ];


  }

  calcularTotais() {
    let totalAgendamentoPagos = 0;
    let totalContasRebidas = 0;
    let totalContasPagar = 0;

    this.medicos.forEach(medico => {
      var agendamentosPagos = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento["Pago/Finalizado"] && c.medicoId == medico.id);

      agendamentosPagos.forEach(agendamento => {
        agendamento.pagamentos.forEach(pagamento => {
          totalAgendamentoPagos = totalAgendamentoPagos + pagamento.parcela * pagamento.valor
        });
      });
    });

    var contasRecebidasPagas = this.contasReceber.filter(c => c.pagamentos != null && c.pagamentos.length > 0);

    contasRecebidasPagas.forEach(conta => {
      conta.pagamentos.forEach(pagamento => {
        totalContasRebidas = totalContasRebidas + pagamento.parcela * pagamento.valor
      });
    });

    var contasPagarPagas = this.contasPagar.filter(c => c.pagamentos != null && c.pagamentos.length > 0);

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

    var diferencaTempo = Math.abs(dataInicio.getTime() - dataFim.getTime());
    var diferencaDias = Math.ceil(diferencaTempo / (1000 * 3600 * 24));

    this.labelsGraficoLinhas = new Array<any>();

    this.labelsGraficoLinhas[0] = 0;
    for (var i = 1; i <= diferencaDias; i++) {
      this.labelsGraficoLinhas[i] = i;
    }

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
      else
        this.medico = this.medicos.find(c => true);

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
    });

    return Observable.forkJoin([reqContaReceber, reqContaPagar, reqAgendamento, reqMedicos]);

  }

  public coresGraficoLinhas: Array<any> = [
    {
      // laranja Agendado
      backgroundColor: 'rgba(255,102,0,0)',
      borderColor: 'rgba(255,102,0,1)',
      pointBackgroundColor: 'rgba(255,102,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,102,0,0.5)'
    },
    {
      // verde Confirmados
      backgroundColor: 'rgba(0,153,0,0)',
      borderColor: 'rgba(0,153,0,1)',
      pointBackgroundColor: 'rgba(0,153,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,153,0,0.5)'
    },
    {
      // azul Finalizados
      backgroundColor: 'rgba(0,0,255,0)',
      borderColor: 'rgba(0,0,255,1)',
      pointBackgroundColor: 'rgba(0,0,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,255,0.5)'
    },
    {
      // vermelho cancelados
      backgroundColor: 'rgba(255,0,0,0)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,0.5)'
    }
  ];

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
