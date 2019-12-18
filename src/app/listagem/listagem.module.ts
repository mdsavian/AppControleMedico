import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { ListagemClinicaComponent } from './clinica/listagem-clinica.component';
import { ListagemFornecedorComponent } from './fornecedor/listagem-fornecedor.component';
import { ListagemContaPagarComponent } from './conta-pagar/listagem-conta-pagar.component';
import { ListagemContaReceberComponent } from './conta-receber/listagem-conta-receber.component';
import { ListagemFormaDePagamentoComponent } from './forma-de-pagamento/listagem-forma-de-pagamento.component';
import { ListagemProntuarioComponent } from './prontuario/listagem-prontuario.component';
import { ListagemCaixaComponent } from './caixa/listagem-caixa.component';
import { CorComponent } from './shared/cor-component';
import { SharedModalModule } from '../shared/modal/shared-modal.module';


@NgModule({
  imports: [
    SharedModalModule,
    CommonModule,
    RouterModule.forChild(ListagemRoutes),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ListagemMedicoComponent, ListagemPacienteComponent,ListagemCaixaComponent, ListagemContaPagarComponent,ListagemContaReceberComponent, ListagemFornecedorComponent, ListagemFormaDePagamentoComponent, ListagemExameComponent, ListagemCirurgiaComponent, ListagemLocalComponent,
    ListagemConvenioComponent, ListagemProntuarioComponent, ListagemFuncionarioComponent, ListagemClinicaComponent, ListagemOficioComponent, ListagemEspecialidadeComponent,
    ListagemProcedimentoComponent, CorComponent
  ],
  entryComponents: [
    CorComponent
  ]
})
export class ListagemModule { }
