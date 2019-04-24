import { Routes } from '@angular/router';

import { ListagemMedicoComponent } from './medico/listagem-medico.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente.component';
import { ListagemConvenioComponent } from './convenio/listagem-convenio.component';
import { ListagemFuncionarioComponent } from './funcionario/listagem-funcionario.component';
import { ListagemOficioComponent } from './oficio/listagem-oficio.component';
import { ListagemEspecialidadeComponent } from './especialidade/listagem-especialidade.component';
import { ListagemProcedimentoComponent } from './procedimento/listagem-procedimento.component';
import { ListagemExameComponent } from './exame/listagem-exame.component';
import { ListagemCirurgiaComponent } from './cirurgia/listagem-cirurgia.component';
import { ListagemLocalComponent } from './local/listagem-local.component';

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
        path: 'listagemespecialidade',
        component: ListagemEspecialidadeComponent,
        data: {
          title: 'Especialidade',
          urls: [
            { title: 'Especialidade' }
          ]
        }
      },
      {
        path: 'listagemprocedimento',
        component: ListagemProcedimentoComponent,
        data: {
          title: 'Serviço',
          urls: [
            { title: 'Serviço' }
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
      },
      {
        path: 'listagemexame',
        component: ListagemExameComponent,
        data: {
          title: 'Exame',
          urls: [
            { title: 'Convênio' }
          ]
        }
      },
      {
        path: 'listagemlocal',
        component: ListagemLocalComponent,
        data: {
          title: 'Local',
          urls: [
            { title: 'Local' }
          ]
        }
      },
      {
        path: 'listagemcirurgia',
        component: ListagemCirurgiaComponent,
        data: {
          title: 'Cirurgia',
          urls: [
            { title: 'Cirurgia' }
          ]
        }
      }
    ]
  }
];
