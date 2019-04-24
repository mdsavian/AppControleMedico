import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
// import { consulta } from '../modelos/consulta';
// import { consultaService } from '../services/consulta.service';
// import { ValidaNomeconsultaDirective } from '../../validadores/valida-nome-consulta.directive';


@Component({
  selector: 'app-modal-adiciona-consulta.component',
  templateUrl: './modal-adiciona-consulta.component.html'
})

export class ModalAdicionaConsultaComponent {

  // @ViewChild('nomeconsulta', { read: ElementRef }) private nomeconsulta: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.nomeconsulta.nativeElement.focus();
  }

  salvar() {
    this.activeModal.close();
  }
}