import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import { Oficio } from '../../modelos/oficio';
import { OficioService } from '../../services/oficio.service';


@Component({
  selector: 'app-modal-adiciona-oficio.component',
  templateUrl: './modal-adiciona-oficio.component.html',
})

export class ModalAdicionaOficioComponent {
  @Input() public oficio: Oficio = new Oficio();
  @ViewChild('descricao', { read: ElementRef }) private descricao: ElementRef;

  constructor(public activeModal: NgbActiveModal, public oficioService: OficioService) { }

  ngOnInit() {
    this.descricao.nativeElement.focus();
  }

  salvar() {
    this.activeModal.close(this.oficio);
  }
}