import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';

import { CadastrosRoutes } from './cadastros.routing';
import { CadastroPacienteComponent } from "./paciente/cadastro-paciente.component";
import { CadastroMedicoComponent } from "./medico/cadastro-medico.component";
import { CadastroConvenioComponent } from "./convenio/cadastro-convenio.component";
import { EnumToArrayPipe } from "../uteis/enumtoarray";

@NgModule({
  imports: [NgbModule,CommonModule, RouterModule.forChild(CadastrosRoutes), FormsModule, DragulaModule],
  declarations: [CadastroPacienteComponent, EnumToArrayPipe, CadastroMedicoComponent, CadastroConvenioComponent]
})
export class CadastrosModule {}
