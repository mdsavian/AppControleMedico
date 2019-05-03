import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaModeloDescricaoComponent } from './modal-adiciona-modelo-descricao.component';


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, FormsModule],
  declarations: [ModalAdicionaModeloDescricaoComponent],
  entryComponents: [ModalAdicionaModeloDescricaoComponent]
})
export class SharedModalModule { }
