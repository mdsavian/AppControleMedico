import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaModeloDescricaoComponent } from './modal-adiciona-modelo-descricao.component';
import { ModalAlteraSenhaComponent } from './modal-altera-senha.component';
import { ModalSucessoComponent } from './modal-sucesso.component';
import { ModalWebcamComponent } from './modal-webcam.component';
import { ModalPagamentoComponent } from './modal-pagamento.component';

import { WebcamModule } from 'ngx-webcam';



@NgModule({
  imports: [CommonModule, WebcamModule, NgbModule, RouterModule, FormsModule],
  declarations: [ModalWebcamComponent, ModalAdicionaModeloDescricaoComponent, ModalAlteraSenhaComponent, ModalSucessoComponent],
  entryComponents: [ModalWebcamComponent,ModalPagamentoComponent, ModalAdicionaModeloDescricaoComponent, ModalAlteraSenhaComponent, ModalSucessoComponent]
})
export class SharedModalModule { }
