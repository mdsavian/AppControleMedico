import { Component } from '@angular/core';
import * as tableData from './listagem-paciente-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../modelos/paciente';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-paciente.component.html'
})
export class ListagemPacienteComponent {
  source: LocalDataSource;
  listaPacientes: Array<Paciente>;
  public isSpinnerVisible = false;
  closeResult: string;

constructor( private pacienteService: PacienteService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaPacientes();
    this.isSpinnerVisible = false;
  }
  
  buscaPacientes(): void {
    this.pacienteService.Todos().subscribe(dados => {
      this.listaPacientes = dados;     
      this.source = new LocalDataSource(this.listaPacientes);      
    });
  }
  settings = tableData.settings;

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim')
        {
          this.pacienteService.Excluir(event.data.id).subscribe(retorno=> {
          if (retorno)
          {
            this.buscaPacientes();
          }
          });
        }
      }
    );      
  } 

  editarRegistro(event) {
    this.router.navigate(['/cadastros/cadastropaciente', {id:event.data.id}]);
  }

  criarRegistro(event) {
    this.router.navigate(['/cadastros/cadastropaciente']);
  }
}


