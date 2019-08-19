import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloDescricao } from '../../modelos/naoPersistidos/modeloDescricao';


@Component({
  selector: 'app-modal-adiciona-modelo-descricao.component',
  templateUrl: './modal-adiciona-modelo-descricao.component.html'
})

export class ModalAdicionaModeloDescricaoComponent {
  public modeloDescricao: ModeloDescricao = new ModeloDescricao();
  descricaoErro: string;
  labelDescricao: string;
  mostrarCor = false;

  @ViewChild('nomeDescricao', { read: ElementRef, static:false }) private nomeDescricao: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.nomeDescricao.nativeElement.focus();
  }

  salvar() {
    this.activeModal.close(this.modeloDescricao);
  }

  fechar() {
    this.activeModal.close();
  }
}