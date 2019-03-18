import { Component } from '@angular/core';
import * as tableData from './listagem-convenio-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-convenio.component.html'
})
export class ListagemConvenioComponent {
  source: LocalDataSource;
  listaConvenios: Array<Convenio>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;

constructor( private convenioService: ConvenioService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaConvenios();
    this.isSpinnerVisible = false;
  }
  
  buscaConvenios(): void {
    this.convenioService.Todos().subscribe(dados => {

      this.listaConvenios = dados;     
      this.source = new LocalDataSource(this.listaConvenios);      
    });
  }  

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim')
        {
          this.convenioService.Excluir(event.data.id).subscribe(retorno=> {
          if (retorno)
          {
            this.buscaConvenios();
          }
          });
        }
      }
    );      
  } 

  editarRegistro(event) {
    this.router.navigate(['/cadastros/cadastroconvenio', {id:event.data.id}]);
  }

  criarRegistro(event) {
    this.router.navigate(['/cadastros/cadastroconvenio']);
  }
}


