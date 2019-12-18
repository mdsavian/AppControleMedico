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
import { ListagemClinicaComponent } from './clinica/listagem-clinica.component';
import { ListagemFormaDePagamentoComponent } from './forma-de-pagamento/listagem-forma-de-pagamento.component';
import { ListagemFornecedorComponent } from './fornecedor/listagem-fornecedor.component';
import { ListagemContaPagarComponent } from './conta-pagar/listagem-conta-pagar.component';
import { ListagemContaReceberComponent } from './conta-receber/listagem-conta-receber.component';
import { ListagemCaixaComponent } from './caixa/listagem-caixa.component';
import { ListagemProntuarioComponent } from './prontuario/listagem-prontuario.component';


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
        path: 'listagemcaixa',
        component: ListagemCaixaComponent,
        data: {
          title: 'Caixas',
          urls: [
            { title: 'Caixas' }
          ] 
        }
      },
      {
        path: 'listagemprontuario',
        component: ListagemProntuarioComponent,
        data: {
          title: 'Prontuário',
          urls: [
            { title: 'Prontuários' }
          ] 
        }
      },
      {
        path: 'listagemcontapagar',
        component: ListagemContaPagarComponent,
        data: {
          title: 'Contas a Pagar',
          urls: [
            { title: 'Contas a Pagar' }
          ] 
        }
      },
      {
        path: 'listagemcontareceber',
        component: ListagemContaReceberComponent,
        data: {
          title: 'Contas a Receber',
          urls: [
            { title: 'Contas a Receber' }
          ] 
        }
      },
      {
        path: 'listagemfornecedor',
        component: ListagemFornecedorComponent,
        data: {
          title: 'Fornecedores',
          urls: [
            { title: 'Fornecedores' }
          ] 
        }
      },
      {
        path: 'listagemespecialidade',
        component: ListagemEspecialidadeComponent,
        data: {
          title: 'Especialidades',
          urls: [
            { title: 'Especialidades' }
          ]
        }
      },
      {
        path: 'listagemprocedimento',
        component: ListagemProcedimentoComponent,
        data: {
          title: 'Procedimentos',
          urls: [
            { title: 'Procedimentos' }
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
          title: 'Ofícios',
          urls: [
            { title: 'Ofícios' }
          ]
        }
      },
      {
        path: 'listagemconvenio',
        component: ListagemConvenioComponent,
        data: {
          title: 'Convênios',
          urls: [
            { title: 'Convênios' }
          ]
        }
      },
      {
        path: 'listagemexame',
        component: ListagemExameComponent,
        data: {
          title: 'Exames',
          urls: [
            { title: 'Exames' }
          ]
        }
      },
      {
        path: 'listagemlocal',
        component: ListagemLocalComponent,
        data: {
          title: 'Locais',
          urls: [
            { title: 'Locais' }
          ]
        }
      },
      {
        path: 'listagemcirurgia',
        component: ListagemCirurgiaComponent,
        data: {
          title: 'Cirurgias',
          urls: [
            { title: 'Cirurgias' }
          ]
        }
      },
      {
        path: 'listagemclinica',
        component: ListagemClinicaComponent,
        data: {
          title: 'Clínicas',
          urls: [
            { title: 'Clínicas' }
          ]
        }
      },
      {
        path: 'listagemformadepagamento',
        component: ListagemFormaDePagamentoComponent,
        data: {
          title: 'Formas de Pagamento',
          urls: [
            { title: 'Formas De Pagamento' }
          ]
        }
      }
    ]
  }
];
