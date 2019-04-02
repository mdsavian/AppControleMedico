import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Importador',
    icon: 'icon-Double-Circle',
    class: 'has-arrow',
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
        path: '/listagem/listagemconvenio',
        title: 'Convênio',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  }
];
