import { Component } from '@angular/core';
import * as tableData from './listagem-local-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { LocalService } from '../../services/local.service';
import { Local } from '../../modelos/local';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-local.component.html'
})
export class ListagemLocalComponent {
  source: LocalDataSource;
  listaLocals: Array<Local>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;

  constructor(private localService: LocalService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaLocals();
    this.isSpinnerVisible = false;
  }

  buscaLocals(): void {
    this.localService.Todos().subscribe(dados => {
      this.listaLocals = dados;
      this.localService.listaLocal = this.listaLocals;
      this.source = new LocalDataSource(this.listaLocals);
    });
  }

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim') {
          this.localService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaLocals();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.router.navigate(['/cadastros/cadastrolocal', { id: event.data.id }]);
  }

  criarRegistro(event) {
    this.router.navigate(['/cadastros/cadastrolocal']);
  }

  

}


