import { Component } from '@angular/core';
import * as tableData from './listagem-fornecedor-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../modelos/fornecedor';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Util } from '../../uteis/Util';
import { ContaPagarService } from '../../services/contaPagar.service';

@Component({
  templateUrl: './listagem-fornecedor.component.html'
})
export class ListagemFornecedorComponent {
  source: LocalDataSource;
  listaFornecedors: Array<Fornecedor>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private contaPagarService: ContaPagarService, private fornecedorService: FornecedorService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaFornecedores();
    this.isSpinnerVisible = false;
  }

  buscaFornecedores(): void {
    this.fornecedorService.Todos().subscribe(dados => {
      this.listaFornecedors = dados;
      this.fornecedorService.listaFornecedor = this.listaFornecedors;
      this.source = new LocalDataSource(this.listaFornecedors);
    });
  }

  deletarRegistro(event, modalExcluir) {
    console.log(event.data.id);
    this.contaPagarService.buscarContaPagarPorFornecedor(event.data.id).subscribe(conta => {
      if (this.util.hasItems(conta)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir fornecedor vínculado a conta(s) a pagar.";
      }
      else {
        this.modalService.open(modalExcluir).result.then(
          result => {
            if (result == 'Sim') {
              this.fornecedorService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaFornecedores();
                }
              });
            }
          });
      }
    });
  }

  editarRegistro(event) {
    this.fornecedorService.fornecedor = this.listaFornecedors.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrofornecedor']);
  }

  criarRegistro(event) {
    this.fornecedorService.fornecedor = null;
    this.router.navigate(['/cadastros/cadastrofornecedor']);
  }
}


