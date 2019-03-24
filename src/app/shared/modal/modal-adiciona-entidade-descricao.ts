import { Component, Input } from '@angular/core';
import {
  NgbModal, NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html'
})

export class ModalErrorComponent {
  @Input() public mensagemErro:string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log("mensagemErro= ", this.mensagemErro);
  }
}