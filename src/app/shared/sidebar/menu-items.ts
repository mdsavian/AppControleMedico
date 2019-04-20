import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Cadastros',
    icon: 'icon-Double-Circle',
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
        path: '',
        title: 'Funcionários',
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
        title: 'Médicos',
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
            path: '/listagem/listagemservico',
            title: 'Serviço',
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
