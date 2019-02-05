import { Routes } from '@angular/router';

import {CadastroPacienteComponent } from './paciente/cadastro-paciente.component';

export const CadastrosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cadastropaciente',
        component: CadastroPacienteComponent,
        data: {
          title: 'Cadastro Paciente',
          urls: [
            { title: 'Cadastro Paciente', url: '/cadastros/cadastroPaciente' },
            { title: 'Cadastro Paciente' }
          ]
        }
      }
    ]
  }
];
