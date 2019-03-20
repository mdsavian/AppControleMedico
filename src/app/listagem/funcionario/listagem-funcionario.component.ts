import { Component } from '@angular/core';
import * as tableData from './listagem-funcionario-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../modelos/funcionario';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-funcionario.component.html'
})
export class ListagemFuncionarioComponent {
  source: LocalDataSource;
  listaFuncionarios: Array<Funcionario>;
  public isSpinnerVisible = false;
  closeResult: string;

constructor( private funcionarioService: FuncionarioService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaFuncionarios();
    this.isSpinnerVisible = false;
  }
  
  buscaFuncionarios(): void {
    this.funcionarioService.Todos().subscribe(dados => {
      this.listaFuncionarios = dados;     
      this.source = new LocalDataSource(this.listaFuncionarios);      
    });
  }
  settings = tableData.settings;

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim')
        {
          this.funcionarioService.Excluir(event.data.id).subscribe(retorno=> {
          if (retorno)
          {
            this.buscaFuncionarios();
          }
          });
        }
      }
    );      
  } 

  editarRegistro(event) {
    this.router.navigate(['/cadastros/cadastrofuncionario', {id:event.data.id}]);
  }

  criarRegistro(event) {
    this.router.navigate(['/cadastros/cadastrofuncionario']);
  }
}


