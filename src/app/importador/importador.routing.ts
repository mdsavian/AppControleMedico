import { Routes } from '@angular/router';

import {ImportarConferenciaComponent } from './relatorio/importar-conferencia.component';

export const ImportadorRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'importarconferencia',
        component: ImportarConferenciaComponent,
        data: {
          title: 'Importar Conferência',
          urls: [
            { title: 'Importar Conferência', url: '/relatorio/ImportarConferencia' },
            { title: 'Importar Conferência' }
          ]
        }
      }
    ]
  }
];
