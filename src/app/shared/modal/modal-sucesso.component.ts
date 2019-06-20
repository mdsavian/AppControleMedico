import { Component, Input } from '@angular/core';
import {
  NgbModal, NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sucesso',
  templateUrl: './modal-sucesso.component.html'

})

export class ModalSucessoComponent {
  @Input() public mensagem:string;
  @Input() public titulo:string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {    
  }
}