import { Component } from '@angular/core';
import * as tableData from './listagem-oficio-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { OficioService } from '../../services/oficio.service';
import { Oficio } from '../../modelos/oficio';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-oficio.component.html'
})
export class ListagemOficioComponent {
  source: LocalDataSource;
  listaOficios: Array<Oficio>;
  public isSpinnerVisible = false;
  closeResult: string;

constructor( private oficioService: OficioService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaOficios();
    this.isSpinnerVisible = false;
  }
  
  buscaOficios(): void {
    this.oficioService.Todos().subscribe(dados => {
      this.listaOficios = dados;     
      this.oficioService.listaOficio = dados;
      this.source = new LocalDataSource(this.listaOficios);      
    });
  }
  settings = tableData.settings;

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim')
        {
          this.oficioService.Excluir(event.data.id).subscribe(retorno=> {
          if (retorno)
          {
            this.buscaOficios();
          }
          });
        }
      }
    );      
  } 

  editarRegistro(event) {
    this.oficioService.oficio = this.listaOficios.find(c=> c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrooficio']);
  }

  criarRegistro(event) {
    this.oficioService.oficio =null;
    this.router.navigate(['/cadastros/cadastrooficio']);
  }
}


