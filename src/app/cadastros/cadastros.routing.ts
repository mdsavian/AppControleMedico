import { Routes } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente.component';
import { CadastroMedicoComponent } from './medico/cadastro-medico.component';
import { CadastroConvenioComponent } from './convenio/cadastro-convenio.component';
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario.component';
import { CadastroOficioComponent } from './oficio/cadastro-oficio.component';
import { CadastroEspecialidadeComponent } from './especialidade/cadastro-especialidade.component';
import { CadastroProcedimentoComponent } from './procedimento/cadastro-procedimento.component';
import { ConfiguracaoAgendaComponent } from './configuracao-agenda/configuracao-agenda.component';
import { CadastroExameComponent } from './exame/cadastro-exame.component';
import { CadastroLocalComponent } from './local/cadastro-local.component';
import { CadastroCirurgiaComponent } from './cirurgia/cadastro-cirurgia.component';
import { CadastroClinicaComponent } from './clinica/cadastro-clinica.component';
import { CadastroFornecedorComponent } from './fornecedor/cadastro-fornecedor.component';
import { CadastroFormaDePagamentoComponent } from './forma-de-pagamento/cadastro-forma-de-pagamento.component';
import { CadastroContaPagarComponent } from './conta-pagar/cadastro-conta-pagar.component';
import { CadastroContaReceberComponent } from './conta-receber/cadastro-conta-receber.component';

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
        path: 'cadastrofornecedor',
        component: CadastroFornecedorComponent,
        data: {
          title: 'Cadastro Fornecedor',
          urls: [
            { title: 'Cadastro Fornecedor', url: '/cadastros/cadastrar' }
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
        path: 'cadastroespecialidade',
        component: CadastroEspecialidadeComponent,
        data: {
          title: 'Cadastro Especialidade',
          urls: [
            { title: 'Cadastro Especialidade', url: '/cadastros/cadastrar' }
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
        },
      },
      {
        path: 'cadastroprocedimento',
        component: CadastroProcedimentoComponent,
        data: {
          title: 'Cadastro Procedimento',
          urls: [
            { title: 'Cadastro Procedimento', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastroclinica',
        component: CadastroClinicaComponent,
        data: {
          title: 'Cadastro Clínica',
          urls: [
            { title: 'Cadastro Clínica', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'configuracaoagenda',
        component: ConfiguracaoAgendaComponent,
        data: {
          title: 'Configuração Agenda',
          urls: [
            { title: 'Configuração Agenda', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastroexame',
        component: CadastroExameComponent,
        data: {
          title: 'Cadastro Exame',
          urls: [
            { title: 'Cadastro Exame', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastrolocal',
        component: CadastroLocalComponent,
        data: {
          title: 'Cadastro Local',
          urls: [
            { title: 'Cadastro Local', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastrocirurgia',
        component: CadastroCirurgiaComponent,
        data: {
          title: 'Cadastro Cirurgia',
          urls: [
            { title: 'Cadastro Cirurgia', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastroformadepagamento',
        component: CadastroFormaDePagamentoComponent,
        data: {
          title: 'Cadastro Forma De Pagamento',
          urls: [
            { title: 'Cadastro Forma De Pagamento', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastrocontapagar',
        component: CadastroContaPagarComponent,
        data: {
          title: 'Cadastro Conta a Pagar',
          urls: [
            { title: 'Cadastro Conta a Pagar', url: '/cadastros/cadastrar' }
          ]
        }
      },
      {
        path: 'cadastrocontareceber',
        component: CadastroContaReceberComponent,
        data: {
          title: 'Cadastro Conta a Receber',
          urls: [
            { title: 'Cadastro Conta a Receber', url: '/cadastros/cadastrar' }
          ]
        }
      }
    ]
  }
];
