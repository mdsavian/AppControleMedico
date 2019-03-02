import { Component } from '@angular/core';
import * as tableData from './listagem-medico';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-medico.component.html'
})
export class ListagemMedicoComponent {
  source: LocalDataSource;
  listaMedicos: Array<Medico>;
  public isSpinnerVisible = false;
  closeResult: string;

constructor( private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaMedicos();
    this.isSpinnerVisible = false;
  }
  
  buscaMedicos(): void {
    this.medicoService.Todos().subscribe(dados => {
      this.listaMedicos = dados;     
      this.source = new LocalDataSource(this.listaMedicos);      
    });
  }
  settings = tableData.settings;

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim')
        {
          this.medicoService.Excluir(event.data.id).subscribe(retorno=> {
          if (retorno)
          {
            this.buscaMedicos();
          }
          });
        }
      }
    );      
  } 

  editarRegistro(event) {
    console.log(event.data.id);
    this.router.navigate(['/cadastros/cadastromedico', {id:event.data.id}]);
  }

  criarRegistro(event) {
    this.router.navigate(['/cadastros/cadastromedico']);
  }
}


