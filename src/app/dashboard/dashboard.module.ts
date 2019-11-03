import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardAnaliticoComponent } from './dashboard/dashboard-analitico.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { IncomeCounterComponent } from './dashboard-components/income-counter/income-counter.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    Ng2SmartTableModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    DashboardAnaliticoComponent,
    IncomeCounterComponent
  ]
})
export class DashboardModule {}
