import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import { Convenio } from '../modelos/convenio';
import { ConvenioService } from '../services/convenio.service';
// import { ValidaNomeConvenioDirective } from '../../validadores/valida-nome-convenio.directive';


@Component({
  selector: 'app-modal-adiciona-convenio.component',
  templateUrl: './modal-adiciona-convenio.component.html'
})

export class ModalAdicionaConsultaComponent {
  public convenio: Convenio = new Convenio("", 0, "");

  @ViewChild('nomeConvenio', { read: ElementRef }) private nomeConvenio: ElementRef;

  constructor(public activeModal: NgbActiveModal, public convenioService: ConvenioService) { }

  ngOnInit() {
    this.nomeConvenio.nativeElement.focus();
  }

  salvar() {
    this.activeModal.close(this.convenio);
  }
}