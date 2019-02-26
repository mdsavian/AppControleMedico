import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ListagemRoutes } from './listagem.routing';
import { ListagemMedicoComponent } from './medico/listagem-medico.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListagemRoutes),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [ListagemMedicoComponent]
})
export class ListagemModule {}
