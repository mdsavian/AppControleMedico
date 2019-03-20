import { Routes } from '@angular/router';
import {CadastroPacienteComponent } from './paciente/cadastro-paciente.component';
import {CadastroMedicoComponent } from './medico/cadastro-medico.component';
import { CadastroConvenioComponent } from './convenio/cadastro-convenio.component';
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario.component';
import { CadastroOficioComponent } from './oficio/cadastro-oficio.component';

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
            { title: 'Cadastro Paciente', url: '/cadastros/cadastrar' }            
          ]
        }        
      },
      {
        path: 'cadastrofuncionario',
        component: CadastroFuncionarioComponent,
        data: {
          title: 'Cadastro Funcionário',
          urls: [
            { title: 'Cadastro Funcionário', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastrooficio',
        component: CadastroOficioComponent,
        data: {
          title: 'Cadastro Ofício',
          urls: [
            { title: 'Cadastro Ofício', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastromedico',
        component: CadastroMedicoComponent,
        data: {
          title: 'Cadastro Médico',
          urls: [
            { title: 'Cadastro Médico', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastroconvenio',
        component: CadastroConvenioComponent,
        data: {
          title: 'Cadastro Convênio',
          urls: [
            { title: 'Cadastro Convênio', url: '/cadastros/cadastrar' }
          ]
        }
      }
    ]
  }
];
