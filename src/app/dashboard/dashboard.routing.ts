import { Routes } from '@angular/router';

import { DashboardAnaliticoComponent } from './dashboard/dashboard-analitico.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'transacoesfinanceiras',
        component: DashboardAnaliticoComponent,
        data: {
          title: 'Transações Financeiras',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Transações Financeiras' }
          ]
        }
      }
    ]
  }
];
