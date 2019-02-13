import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RelatorioRoutes } from './relatorio.routing';
import { RelatorioUnimedComponent } from './unimed/relatorio-unimed.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RelatorioRoutes),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [RelatorioUnimedComponent]
})
export class RelatorioModule {}
