import { Routes } from '@angular/router';

import { ListagemMedicoComponent } from './medico/listagem-medico.component';

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
      }
    ]
  }
];
