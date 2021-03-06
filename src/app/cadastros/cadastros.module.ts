
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModalModule } from '../shared/modal/shared-modal.module'
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
import { ValidaCnpjDirective } from '../validadores/valida-cnpj.directive';
import { ValidaDataDirective } from '../validadores/valida-data.directive';

import { CadastroPacienteComponent } from "./paciente/cadastro-paciente.component";
import { CadastroMedicoComponent } from "./medico/cadastro-medico.component";
import { CadastroConvenioComponent } from "./convenio/cadastro-convenio.component";
import { CadastroModeloPrescricaoComponent } from "./modelo-prescricao/cadastro-modelo-prescricao.component";
import { ModalAdicionaConvenioComponent } from "./convenio/modal-adiciona-convenio.component";
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario.component';
import { ModalCadastroFornecedorComponent } from "./fornecedor/modal-cadastro-fornecedor.component";
import { ModalCadastroPrescricaoPacienteComponent } from "./modelo-prescricao/modal-cadastro-prescricao-paciente.component";
import { CadastroOficioComponent } from './oficio/cadastro-oficio.component';
import { CadastroEspecialidadeComponent } from './especialidade/cadastro-especialidade.component';
import { CadastroProcedimentoComponent } from './procedimento/cadastro-procedimento.component';
import { CadastroExameComponent } from './exame/cadastro-exame.component';
import { CadastroLocalComponent } from './local/cadastro-local.component';
import { CadastroCirurgiaComponent } from './cirurgia/cadastro-cirurgia.component';
import { CadastroClinicaComponent } from './clinica/cadastro-clinica.component';
import { CadastroFornecedorComponent } from './fornecedor/cadastro-fornecedor.component';
import { CadastroContaPagarComponent } from './conta-pagar/cadastro-conta-pagar.component';
import { CadastroContaReceberComponent } from './conta-receber/cadastro-conta-receber.component';
import { CadastroFormaDePagamentoComponent } from './forma-de-pagamento/cadastro-forma-de-pagamento.component';
import { CadastroProntuarioComponent } from './prontuario/cadastro-prontuario.component';
import { ConfiguracaoAgendaComponent } from './configuracao-agenda/configuracao-agenda.component'
import { DetalhesCaixaComponent } from './caixa/detalhes-caixa.component'
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { ConfiguracaoAtalhoComponent } from './configuracao-atalho/configuracao-atalho.component';

@NgModule({
  imports: [NgbModule, FileUploadModule, SharedModalModule, CommonModule, Ng2SmartTableModule, RouterModule.forChild(CadastrosRoutes), FormsModule,
    QuillModule.forRoot(), DragulaModule.forRoot(), NgxMaskModule.forRoot()],

  declarations: [CadastroLocalComponent, CadastroProntuarioComponent, CadastroModeloPrescricaoComponent, CadastroCirurgiaComponent, CadastroContaPagarComponent, CadastroContaReceberComponent, CadastroExameComponent, CadastroPacienteComponent, ModalCadastroFornecedorComponent,
    ConfiguracaoAtalhoComponent, CadastroFornecedorComponent, ModalCadastroPrescricaoPacienteComponent, ConfiguracaoAgendaComponent, CadastroFormaDePagamentoComponent, DetalhesCaixaComponent, CadastroMedicoComponent, CadastroConvenioComponent, ModalAdicionaConvenioComponent,
    CadastroFuncionarioComponent, CadastroProcedimentoComponent, CadastroOficioComponent, CadastroEspecialidadeComponent, CadastroClinicaComponent,
    ValidaDescricaoConvenioDirective, ValidaCnpjDirective, ValidaDataDirective, ValidaNomeOficioDirective,
    ValidaDescricaoEspecialidadeDirective, ValidaDescricaoExameDirective, ValidaDescricaoProcedimentoDirective,
    ValidaDescricaoCirurgiaDirective, ValidaDescricaoLocalDirective, ValidaEmailUsuarioDirective, ValidaDescricaoFormaDePagamentoDirective],
    exports:[ValidaDataDirective],

  entryComponents: [ModalAdicionaConvenioComponent, ModalCadastroPrescricaoPacienteComponent, ModalCadastroFornecedorComponent,]
})
export class CadastrosModule { }
