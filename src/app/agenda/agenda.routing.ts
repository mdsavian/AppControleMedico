import { Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { AtendimentoAgendamentoComponent } from './atendimento-agendamento.component';

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
      },
      {
      path: 'atendimento',
        component: AtendimentoAgendamentoComponent,
        data: {
          title: 'Atendimento',
          urls: [
            { title: 'Atendimento', url: '/agenda/atendimento' }            
          ]
        }        
      }
    ]
  }
];
