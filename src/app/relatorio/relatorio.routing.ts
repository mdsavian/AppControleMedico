import { Routes } from '@angular/router';

import { RelatorioUnimedComponent } from './unimed/relatorio-unimed.component';

export const RelatorioRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'relatoriounimed',
        component: RelatorioUnimedComponent,
        data: {
          title: 'Relatório Unimed',
          urls: [
            { title: 'Relatório Unimed' }
          ]
        }
      }
    ]
  }
];
