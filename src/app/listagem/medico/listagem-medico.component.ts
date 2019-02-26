import { Component } from '@angular/core';
import * as tableData from './listagem-medico';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService} from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { Router } from '@angular/router';
@Component({
  templateUrl: './listagem-medico.component.html'
})
export class ListagemMedicoComponent {
  source: LocalDataSource;
  listaMedicos : Array<Medico>;

  constructor(private medicoService:MedicoService, private router: Router,) {
    this.buscaMedicos();
  }

  buscaMedicos() : void
  {
    this.medicoService.Todos().subscribe(dados=> {
      this.listaMedicos = dados;
      this.source = new LocalDataSource(this.listaMedicos); // create the source
    });
  }
  settings = tableData.settings;

  deletarRegistro(event)
  {
    alert.
    console.log("opa");
    return false;
  }

  editarRegistro(event)
  {
    console.log(event.data.id);
    return false;
  }

  criarRegistro(event)
  {
    this.router.navigate(['/cadastros/cadastromedico']);

    return false;
  }
}


