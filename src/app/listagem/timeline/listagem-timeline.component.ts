import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Paciente } from '../../modelos/paciente';
import { Util } from '../../uteis/Util';
import { Router } from '@angular/router';
import { TimelineService } from '../../services/timeline.service';
@Component({
  templateUrl: 'listagem-timeline.component.html'
})
export class ListagemTimelineComponent {

  listaPacientes: Array<Paciente>;
  source: LocalDataSource;
  util = new Util();

  public isSpinnerVisible = false;

  constructor(private timelineService:TimelineService, private pacienteService: PacienteService,private router: Router,) {

    this.isSpinnerVisible = true;
    this.buscaPacientes();
  } 

  buscaPacientes(): void {
    this.pacienteService.Todos().subscribe(dados => {
      this.listaPacientes = dados;
      this.source = new LocalDataSource(this.listaPacientes);
      this.isSpinnerVisible = false;
    });
  }

  visualizarTimeline(event) {
    this.timelineService.pacienteId = event.data.id;
    this.timelineService.paciente = this.listaPacientes.find(c=> c.id == event.data.id);
    this.router.navigate(['/listagem/timeline']);
 }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      nomeCompleto: {
        title: 'Nome',
        filter: true
      },
      celular: {
        title: 'Celular',
        filter: true,
        valuePrepareFunction: (celular) => { return celular === null ? "" : new Util().formataCelular(celular) }
      },
      tipoPlano:
      {
        title: "Tipo Plano",
        filter: true
      },
      ativo: {
        title: 'Ativo',
        filter: false,
        valuePrepareFunction: (valor) => { return valor === true ? 'Sim' : 'false' }
      }

    },
    actions:
    {
      columnTitle: '',
      add: false,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    }
  };

  }
