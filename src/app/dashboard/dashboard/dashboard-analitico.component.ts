import { Component, AfterViewInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist/dist/chartist.component';
declare var require: any;

const data: any = require('./data.json');

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
export class DashboardAnaliticoComponent implements AfterViewInit {
  subtitle: string;
  // This is for the dashboar line chart
  public lineChartData: Array<any> = [
    { data: [6, 5, 6, 8, 25, 9, 8, 24], label: 'Confirmado(s)' },
    { data: [4, 3, 1, 2, 8, 1, 5, 1], label: 'Finalizado(s)' },
    { data: [3, 7, 8, 4, 1, 6, 9, 10], label: 'Cancelado(s)' },
    { data: [1, 13, 12, 4, 9, 12, 23, 11], label: 'Atrasado(s)' }, // agendamentos em que já se passou a hora dele e n foi finalizado colcoar uma dica
    
  ];
  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public lineChartOptions: any = {
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
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
  public lineChartLegend = false;
  public lineChartType = 'line';

  // This is for the donute chart
  donuteChart1: Chart = {
    type: 'Pie',
    data: data['Pie'],
    options: {
      donut: true,
      showLabel: false,
      donutWidth: 30
    }
    // events: {
    //   draw(data: any): boolean {
    //     return data;
    //   }
    // }
  };

  ngAfterViewInit() {}
}
