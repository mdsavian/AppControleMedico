import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Cadastro',
    icon: 'icon-Double-Circle',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/listagem/listagemclinica',
        title: 'Clínica',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '',
        title: 'Pessoas',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/listagem/listagempaciente',
            title: 'Paciente',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/listagem/listagemfornecedor',
            title: 'Fornecedor',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Funcionário',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/listagem/listagemfuncionario',
            title: 'Funcionário',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/listagem/listagemoficio',
            title: 'Ofício',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
        ]
      },
      {
        path: '/listagem/listagemmedico',
        title: 'Médico',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/listagem/listagemmedico',
            title: 'Médico',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/listagem/listagemespecialidade',
            title: 'Especialidade',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/cadastros/configuracaoagenda',
            title: 'Configuração Agenda',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
        ]
      },
      {
        path: '/listagem/listagemprocedimento',
        title: 'Procedimentos',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/listagem/listagemprocedimento',
            title: 'Procedimento',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/listagem/listagemexame',
            title: 'Exame',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/listagem/listagemcirurgia',
            title: 'Cirurgia',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
        ]
      },
      {
        path: '',
        title: 'Financeiro',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/listagem/listagemformadepagamento',
            title: 'Forma de Pagamento',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
        ]
      },
      {
        path: '/listagem/listagemlocal',
        title: 'Local',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/listagem/listagemconvenio',
        title: 'Convênio',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Agenda',
    icon: 'icon-Calendar-4',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/agenda/agenda',
        title: 'Agenda',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Financeiro',
    icon: 'icon-Calendar-4',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '',
        title: 'Dashboard Analítico',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/dashboard/dashboardanalitico',
            title: 'Dashboard',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          }
        ]
      },
      {
        path: '/listagem/listagemcontapagar',
        title: 'Conta a Pagar',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/listagem/listagemcontareceber',
        title: 'Conta a Receber',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/listagem/listagemcaixa',
        title: 'Caixas',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Importador',
    icon: 'icon-Double-Circle',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/importador/importarconferencia',
        title: 'Arquivo Conferência',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
];
