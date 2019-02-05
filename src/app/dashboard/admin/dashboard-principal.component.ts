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
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardPrincipalComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }
  // This is for the dashboar line chart
  // lineChart
  public lineChartData: Array<any> = [
    { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
    { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' },
    { data: [20, 80, 70, 140, 140, 80, 200], label: 'Marketing' }
  ];

  public lineChartLabels: Array<any> = [
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017'
  ];
  public lineChartOptions: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(36,210,181,0)',
      borderColor: 'rgba(36,210,181,1)',
      pointBackgroundColor: 'rgba(36,210,181,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(36,210,181,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(32,174,227,0)',
      borderColor: 'rgba(32,174,227,1)',
      pointBackgroundColor: 'rgba(32,174,227,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(32,174,227,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(103,114,229,0)',
      borderColor: 'rgba(103,114,229,1)',
      pointBackgroundColor: 'rgba(103,114,229,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103,114,229,0.5)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 5
  };

  public barChartLabels: string[] = ['0', '1', '2', '3'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [
    { data: [100, 200, 100, 300], label: 'Iphone 8' },
    { data: [130, 100, 140, 200], label: 'Iphone X' }
  ];
  public barChartColors: Array<any> = [
    { backgroundColor: '#24d2b5' },
    { backgroundColor: '#20aee3' }
  ];

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

  // Doughnut
  public doughnutChartLabels: string[] = ['Sales', 'Earning', 'Cost'];

  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // Sales Analytics Pie chart
  public pieChartLabels: string[] = ['Sales', 'Earning', 'Cost'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  ngAfterViewInit() {}
}
