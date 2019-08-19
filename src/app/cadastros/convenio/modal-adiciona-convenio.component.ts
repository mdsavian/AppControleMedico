import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; import { Convenio } from '../../modelos/convenio';
import { ConvenioService } from '../../services/convenio.service';


@Component({
  selector: 'app-modal-adiciona-convenio.component',
  templateUrl: './modal-adiciona-convenio.component.html'
})

export class ModalAdicionaConvenioComponent {
  convenio: Convenio = {  
    id: "", descricao: "", diasRetorno: 0, ativo: true
  };
  mostrarCor = false;

  @ViewChild('nomeConvenio', { read: ElementRef, static:false }) private nomeConvenio: ElementRef;

  constructor(public activeModal: NgbActiveModal, private convenioService: ConvenioService) { }

  ngOnInit() {
    this.nomeConvenio.nativeElement.focus();
  }

  salvar() {
    this.convenioService.salvar(this.convenio).subscribe(conv=> {
      this.activeModal.close(conv);
    });    
  }

  fechar() {
    this.activeModal.close();
  }
}