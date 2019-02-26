import { Component } from '@angular/core';
import * as tableData from './listagem-medico';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService} from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
@Component({
  templateUrl: './listagem-medico.component.html'
})
export class ListagemMedicoComponent {
  source: LocalDataSource;
  listaMedicos : Array<Medico>;
  constructor(private medicoService:MedicoService) {
    this.buscaMedicos();
  }

  buscaMedicos() : void
  {
    this.medicoService.Todos().subscribe(c=> {
      this.listaMedicos = c;
      this.source = new LocalDataSource(this.listaMedicos); // create the source
    });
  }
  settings = tableData.settings;
}
