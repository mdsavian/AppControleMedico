import { Routes } from '@angular/router';

import { DashboardPrincipalComponent } from './admin/dashboard-principal.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboardprincipal',
        component: DashboardPrincipalComponent,
        data: {
          title: 'Modern Dashboard',
          urls: [
            { title: 'Dashboard', url: '/admin/DashboardPrincipal' }
          ]
        }
      }
    ]
  }
];
