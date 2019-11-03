import { Routes } from '@angular/router';

import { DashboardAnaliticoComponent } from './dashboard/dashboard-analitico.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboardanalitico',
        component: DashboardAnaliticoComponent,
        data: {
          title: 'Dashboard Analítico',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard Analítico' }
          ]
        }
      }
    ]
  }
];
