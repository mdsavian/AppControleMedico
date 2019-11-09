import { Component, AfterViewInit, OnInit } from '@angular/core';
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
export class DashboardAnaliticoComponent implements OnInit, AfterViewInit {

  subtitle: string;
  isSpinnerVisible = false;
  contasReceber: Array<ContaReceber> = new Array<ContaReceber>();
  contasPagar: Array<ContaPagar> = new Array<ContaPagar>();
  agendamentos: Array<Agendamento> = new Array<Agendamento>();
  util = new Util();

  constructor(private contaPagarService: ContaPagarService, private contaReceberService: ContaReceberService,
    private agendamentoService: AgendamentoService) { }
  // This is for the dashboar line chart
  public dadosGraficoLinhas: Array<any> = [
    { data: [6, 5, 6, 8, 25, 9, 8, 24], label: 'Confirmado(s)' },
    { data: [4, 3, 1, 2, 8, 1, 5, 1], label: 'Finalizado(s)' },
    { data: [3, 7, 8, 4, 1, 6, 9, 10], label: 'Cancelado(s)' },
    { data: [1, 13, 12, 4, 9, 12, 23, 11], label: 'Atrasado(s)' }, // agendamentos em que já se passou a hora dele e n foi finalizado colcoar uma dica

  ];
  public labelsGraficoLinhas = new Array<any>();
  public opcoesGraficoLinhas: any = {
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit(): void {
    var dataHoje = new Date();
    var primeiroDiaMes = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), 1);

    this.labelsGraficoLinhas[0] = 0;
    for (var i = 1; i <= dataHoje.getDate(); i++) {
      this.labelsGraficoLinhas[i] = i;
    }

    this.buscarDadosDashboard(dataHoje, primeiroDiaMes).subscribe(c => {
      for (var i = 1; i <= dataHoje.getDate(); i++) {

        let dataBuscaAgendamentos = dataHoje.setDate(i);    
  
        let agendamentosHoje
      }

      this.isSpinnerVisible = false;

    }); 
  }

  buscarDadosDashboard(dataHoje, primeiroDiaMes) {
    this.isSpinnerVisible = true;

    let reqContaReceber = this.contaReceberService.TodosPorPeriodo(this.util.dataParaString(primeiroDiaMes), this.util.dataParaString(dataHoje)).map(dados => {
      this.contasReceber = dados;
    });

    let reqContaPagar = this.contaPagarService.TodosPorPeriodo(this.util.dataParaString(primeiroDiaMes), this.util.dataParaString(dataHoje)).map(dados => {
      this.contasPagar = dados;
    });

    let reqAgendamento = this.agendamentoService.TodosPorPeriodo(this.util.dataParaString(primeiroDiaMes), this.util.dataParaString(dataHoje)).map(dados => {
      this.agendamentos = dados;
    });

   return Observable.forkJoin([reqContaReceber, reqContaPagar, reqAgendamento]);
       
  }

  ngAfterViewInit() { }


  //Váriaveis 
  public coresGraficoLinhas: Array<any> = [
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
    },
    {
      // laranja Atrasados
      backgroundColor: 'rgba(255,102,0,0)',
      borderColor: 'rgba(255,102,0,1)',
      pointBackgroundColor: 'rgba(255,102,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,102,0,0.5)'
    }
  ];
}
