import { Component} from '@angular/core';
import { Fornecedor } from '../../modelos/fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cadastro-fornecedor.component',
  templateUrl: './modal-cadastro-fornecedor.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class ModalCadastroFornecedorComponent  {

  mensagemErro: string;
  id: string;
  fornecedor = new Fornecedor();

  constructor(private fornecedorService: FornecedorService, private route: ActivatedRoute, private enderecoService: EnderecoService, private router: Router, private modalService: NgbModal) {
  }
  
  public salvar(): void {
    this.fornecedorService.salvar(this.fornecedor).subscribe(
      data => {
        this.router.navigate(["listagem/listagemfornecedor"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
