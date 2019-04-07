import { Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';

export const AgendaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agenda',
        component: AgendaComponent,
        data: {
          title: 'Agenda',
          urls: [
            { title: 'Agenda', url: '/agenda/agenda' }            
          ]
        }        
      }
    ]
  }
];
