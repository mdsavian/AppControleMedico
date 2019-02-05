import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImportarConferenciaComponent } from './relatorio/importar-conferencia.component';
import { ImportadorRoutes } from './importador.routing';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


@NgModule({
  imports: [NgbModule, FileUploadModule, CommonModule, RouterModule.forChild(ImportadorRoutes), FormsModule],
  declarations: [ImportarConferenciaComponent]
})
export class ImportadorModule { }
