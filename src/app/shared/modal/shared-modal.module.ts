import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaModeloDescricaoComponent } from './modal-adiciona-modelo-descricao.component';
import { ModalAlteraSenhaComponent } from './modal-altera-senha.component';
import { ModalSucessoComponent } from './modal-sucesso.component';


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, FormsModule],
  declarations: [ModalAdicionaModeloDescricaoComponent,ModalAlteraSenhaComponent,ModalSucessoComponent],
  entryComponents: [ModalAdicionaModeloDescricaoComponent,ModalAlteraSenhaComponent,ModalSucessoComponent]
})
export class SharedModalModule { }
