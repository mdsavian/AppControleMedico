import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlteraSenha } from '../../modelos/naoPersistidos/alteraSenha';


@Component({
  selector: 'app-modal-altera-senha.component',
  templateUrl: './modal-altera-senha.component.html'
})

export class ModalAlteraSenhaComponent {
  public alteraSenha: AlteraSenha = new AlteraSenha();
  usuarioId: string;
  labelDescricao: string = "";
  @ViewChild('senhaAtual', { read: ElementRef, static: false }) private senhaAtual: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.senhaAtual.nativeElement.focus();
  }

  salvar() {
    this.activeModal.close(this.alteraSenha);
  }

  fechar() {
    this.activeModal.close();
  }
}