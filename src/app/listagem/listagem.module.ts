import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ListagemRoutes } from './listagem.routing';
import { ListagemMedicoComponent } from './medico/listagem-medico.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente.component';
import { ListagemConvenioComponent } from './convenio/listagem-convenio.component';
import { ListagemFuncionarioComponent } from './funcionario/listagem-funcionario.component';
import { ListagemOficioComponent } from './oficio/listagem-oficio.component';
import { ListagemEspecialidadeComponent } from './especialidade/listagem-especialidade.component';
import { ListagemProcedimentoComponent } from './procedimento/listagem-procedimento.component';
import { ListagemExameComponent } from './exame/listagem-exame.component';
import { ListagemCirurgiaComponent } from './cirurgia/listagem-cirurgia.component';
import { ListagemLocalComponent } from './local/listagem-local.component';
import { CorComponent } from './shared/cor-component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListagemRoutes),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ListagemMedicoComponent, ListagemPacienteComponent, ListagemExameComponent, ListagemCirurgiaComponent, ListagemLocalComponent,
    ListagemConvenioComponent, ListagemFuncionarioComponent, ListagemOficioComponent, ListagemEspecialidadeComponent,
    ListagemProcedimentoComponent, CorComponent
  ],
  entryComponents: [
    CorComponent
  ]
})
export class ListagemModule { }
