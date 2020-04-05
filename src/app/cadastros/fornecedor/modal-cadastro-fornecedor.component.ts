import { Component} from '@angular/core';
import { Fornecedor } from '../../modelos/fornecedor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cadastro-fornecedor.component',
  templateUrl: './modal-cadastro-fornecedor.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class ModalCadastroFornecedorComponent  {

  mensagemErro: string;
  id: string;
  fornecedor = new Fornecedor();

  constructor(private activeModal: NgbActiveModal) {
  }
  
  public salvar(): void {
    this.activeModal.close(this.fornecedor);
  }

  fechar() {
    this.activeModal.close();
  }
  
}
