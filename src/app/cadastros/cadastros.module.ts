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

import { ValidaNomeConvenioDirective } from '../validadores/valida-nome-convenio.directive';
import { ValidaCpfDirective } from '../validadores/valida-cpf.directive';

import { CadastroPacienteComponent } from "./paciente/cadastro-paciente.component";
import { CadastroMedicoComponent } from "./medico/cadastro-medico.component";
import { CadastroConvenioComponent } from "./convenio/cadastro-convenio.component";
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario.component';
import { CadastroOficioComponent } from './oficio/cadastro-oficio.component';

@NgModule({
  imports: [NgbModule,UteisModule, CommonModule, Ng2SmartTableModule,RouterModule.forChild(CadastrosRoutes), FormsModule, DragulaModule.forRoot(), NgxMaskModule.forRoot()],
  declarations: [CadastroPacienteComponent, CadastroMedicoComponent, CadastroConvenioComponent, CadastroFuncionarioComponent, CadastroOficioComponent,
                ValidaNomeConvenioDirective,ValidaCpfDirective]
})
export class CadastrosModule { }
