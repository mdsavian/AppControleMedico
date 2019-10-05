import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-excluir-registro.component',
  templateUrl: './modal-excluir-registro.component.html'
})

export class ModalExcluirRegistroComponent {

  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {   
  }

  fechar(valor:string)
  {
    this.activeModal.close(valor);
  }
  
}