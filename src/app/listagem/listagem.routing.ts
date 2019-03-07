import { Routes } from '@angular/router';

import { ListagemMedicoComponent } from './medico/listagem-medico.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente.component';

export const ListagemRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listagemmedico',
        component: ListagemMedicoComponent,
        data: {
          title: 'Médicos',
          urls: [
            { title: 'Médicos' }
          ]
        }
      },
      {
        path: 'listagempaciente',
        component: ListagemPacienteComponent,
        data: {
          title: 'Pacientes',
          urls: [
            { title: 'Pacientes' }
          ]
        }
      }
    ]
  }
];
