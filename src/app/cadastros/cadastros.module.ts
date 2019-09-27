import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UteisModule } from '../uteis/uteis.module'
import { CadastrosRoutes } from './cadastros.routing';

import { ValidaDescricaoConvenioDirective } from '../validadores/valida-descricao-convenio.directive';
import { ValidaDescricaoCirurgiaDirective } from '../validadores/valida-descricao-cirurgia.directive';
import { ValidaDescricaoLocalDirective } from '../validadores/valida-descricao-local.directive';
import { ValidaDescricaoProcedimentoDirective } from '../validadores/valida-descricao-procedimento.directive';
import { ValidaDescricaoExameDirective } from '../validadores/valida-descricao-exame.directive';
import { ValidaDescricaoEspecialidadeDirective } from '../validadores/valida-descricao-especialidade.directive';
import { ValidaDescricaoFormaDePagamentoDirective } from '../validadores/valida-descricao-forma-de-pagamento.directive';
import { ValidaEmailUsuarioDirective } from '../validadores/valida-email-usuario';
import { ValidaNomeOficioDirective } from '../validadores/valida-nome-oficio.directive';
import { ValidaCpfDirective } from '../validadores/valida-cpf.directive';
import { ValidaCnpjDirective } from '../validadores/valida-cnpj.directive';

import { CadastroPacienteComponent } from "./paciente/cadastro-paciente.component";
import { CadastroMedicoComponent } from "./medico/cadastro-medico.component";
import { CadastroConvenioComponent } from "./convenio/cadastro-convenio.component";
import { ModalAdicionaConvenioComponent } from "./convenio/modal-adiciona-convenio.component";
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario.component';
import { CadastroOficioComponent } from './oficio/cadastro-oficio.component';
import { CadastroEspecialidadeComponent } from './especialidade/cadastro-especialidade.component';
import { CadastroProcedimentoComponent } from './procedimento/cadastro-procedimento.component';
import { CadastroExameComponent } from './exame/cadastro-exame.component';
import { CadastroLocalComponent } from './local/cadastro-local.component';
import { CadastroCirurgiaComponent } from './cirurgia/cadastro-cirurgia.component';
import { CadastroClinicaComponent } from './clinica/cadastro-clinica.component';
import { CadastroFornecedorComponent } from './fornecedor/cadastro-fornecedor.component';
import { CadastroContaPagarComponent } from './conta-pagar/cadastro-conta-pagar.component';
import { CadastroFormaDePagamentoComponent } from './forma-de-pagamento/cadastro-forma-de-pagamento.component';
import { ConfiguracaoAgendaComponent } from './configuracao-agenda/configuracao-agenda.component'
import { SharedModalModule } from '../shared/modal/shared-modal.module';


@NgModule({
  imports: [NgbModule, SharedModalModule, UteisModule, CommonModule, Ng2SmartTableModule, RouterModule.forChild(CadastrosRoutes), FormsModule, DragulaModule.forRoot(), NgxMaskModule.forRoot()],

  declarations: [CadastroLocalComponent, CadastroCirurgiaComponent, CadastroContaPagarComponent, CadastroExameComponent, CadastroPacienteComponent,
    CadastroFornecedorComponent, ConfiguracaoAgendaComponent, CadastroFormaDePagamentoComponent, CadastroMedicoComponent, CadastroConvenioComponent, ModalAdicionaConvenioComponent,
    CadastroFuncionarioComponent, CadastroProcedimentoComponent,
    CadastroOficioComponent, CadastroEspecialidadeComponent, CadastroClinicaComponent,
    ValidaDescricaoConvenioDirective, ValidaCnpjDirective, ValidaCpfDirective, ValidaNomeOficioDirective,
    ValidaDescricaoEspecialidadeDirective, ValidaDescricaoExameDirective, ValidaDescricaoProcedimentoDirective,
    ValidaDescricaoCirurgiaDirective, ValidaDescricaoLocalDirective, ValidaEmailUsuarioDirective, ValidaDescricaoFormaDePagamentoDirective],

  entryComponents: [ModalAdicionaConvenioComponent]
})
export class CadastrosModule { }
