import { Routes } from '@angular/router';

import { ListagemMedicoComponent } from './medico/listagem-medico.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente.component';
import { ListagemConvenioComponent } from './convenio/listagem-convenio.component';
import { ListagemFuncionarioComponent } from './funcionario/listagem-funcionario.component';
import { ListagemOficioComponent } from './oficio/listagem-oficio.component';

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
      },
      {
        path: 'listagemfuncionario',
        component: ListagemFuncionarioComponent,
        data: {
          title: 'Funcionários',
          urls: [
            { title: 'Funcionários' }
          ]
        }
      },
      {
        path: 'listagemoficio',
        component: ListagemOficioComponent,
        data: {
          title: 'Ofício',
          urls: [
            { title: 'Ofício' }
          ]
        }
      },
      {      
      path: 'listagemconvenio',
      component: ListagemConvenioComponent,
      data: {
        title: 'Convênio',
        urls: [
          { title: 'Convênio' }
        ]
      }
    }
    ]
  }
];
