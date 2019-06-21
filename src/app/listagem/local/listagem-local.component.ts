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
  listaLocais: Array<Local>;
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
      this.listaLocais = dados;
      this.localService.listaLocal = this.listaLocais;
      this.source = new LocalDataSource(this.listaLocais);
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
    this.localService.local = this.listaLocais.find(c=> c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrolocal']);
  }

  criarRegistro(event) {
    this.localService.local=null;
    this.router.navigate(['/cadastros/cadastrolocal']);
  }

  

}


