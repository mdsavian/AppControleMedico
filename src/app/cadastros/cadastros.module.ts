import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaskModule} from 'ngx-mask';
import { DragulaModule } from 'ng2-dragula';
import { UteisModule } from '../uteis/uteis.module'
import { CadastrosRoutes } from './cadastros.routing';
import { CadastroPacienteComponent } from "./paciente/cadastro-paciente.component";
import { CadastroMedicoComponent } from "./medico/cadastro-medico.component";
import { CadastroConvenioComponent } from "./convenio/cadastro-convenio.component";

@NgModule({
  imports: [NgbModule,UteisModule, CommonModule, RouterModule.forChild(CadastrosRoutes), FormsModule, DragulaModule.forRoot(), NgxMaskModule.forRoot()],
  declarations: [CadastroPacienteComponent, CadastroMedicoComponent, CadastroConvenioComponent]
})
export class CadastrosModule { }
