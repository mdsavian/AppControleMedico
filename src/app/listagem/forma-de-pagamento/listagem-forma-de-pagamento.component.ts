import { Component } from '@angular/core';
import * as tableData from './listagem-forma-de-pagamento-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-forma-de-pagamento.component.html'
})
export class ListagemFormaDePagamentoComponent {
  source: LocalDataSource;
  listaFormaDePagamentos: Array<FormaDePagamento>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;

  constructor(private formaDePagamentoService: FormaDePagamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaFormaDePagamentos();
    this.isSpinnerVisible = false;
  }

  buscaFormaDePagamentos(): void {
    this.formaDePagamentoService.Todos().subscribe(dados => {
      this.listaFormaDePagamentos = dados;
      this.formaDePagamentoService.listaFormaDePagamento = this.listaFormaDePagamentos;
      this.source = new LocalDataSource(this.listaFormaDePagamentos);
    });
  }

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim') {
          this.formaDePagamentoService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaFormaDePagamentos();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.formaDePagamentoService.formaDePagamento = this.listaFormaDePagamentos.find(c=> c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroformadepagamento']);
  }

  criarRegistro(event) {
    this.formaDePagamentoService.formaDePagamento =null;
    this.router.navigate(['/cadastros/cadastroformadepagamento']);
  }

  

}


