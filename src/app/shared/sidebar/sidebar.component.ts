import { Component, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { AppService } from '../../services/app.service';
import { Util } from '../../uteis/Util';
import { FuncionarioService } from '../../services/funcionario.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  showSubThirdMenu = '';
  util = new Util();
  isSpinnerVisible = false;

  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  addActiveThirdClass(element: any) {
    if (element === this.showSubThirdMenu) {
      this.showSubThirdMenu = '0';
    } else {
      this.showSubThirdMenu = element;
    }
  }

  constructor(
    private funcionarioService: FuncionarioService,
    private appService: AppService,
  ) { }
  // End open close

  ngOnInit() {

    this.montarSideBar();

    $(function () {
      $('.sidebartoggler').on('click', function () {
        if ($('#main-wrapper').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('#main-wrapper').removeClass('mini-sidebar');
        } else {
          $('body').trigger('resize');
          $('#main-wrapper').addClass('mini-sidebar');
        }
      });
    });
  }

  montarSideBar() {
    var usuario = this.appService.retornarUsuarioCorrente();
    var itensSideBar = this.ROUTES.filter(sidebarnavItem => sidebarnavItem);
    
    this.isSpinnerVisible = true;
    if (usuario != null && this.util.hasItems(itensSideBar)) {

      if (usuario.funcionario != null && usuario.funcionario.ativo) {
        var funcionario = usuario.funcionario;

        if (!funcionario.permissaoAdministrador) {
          itensSideBar = this.removeMenu(itensSideBar, "Financeiro/Transações Financeiras");
          itensSideBar = this.removeMenu(itensSideBar, "Financeiro/Caixas");
          itensSideBar = this.removeMenu(itensSideBar, "Médico");
          itensSideBar = this.removeMenu(itensSideBar, "Financeiro/Forma de Pagamento");
          itensSideBar = this.removeMenu(itensSideBar, "Cadastros/Pessoas/Funcionário/Ofício");
          // itensSideBar = this.removeMenu(itensSideBar, "Paciente/Prontuário");
          itensSideBar = this.removeMenu(itensSideBar, "Paciente/Histórico");
        }

        if (!this.funcionarioService.PermitirVisualizarAgenda(funcionario)) {
          itensSideBar = this.removeMenu(itensSideBar, "Agenda");
        }
        this.sidebarnavItems = itensSideBar;
        this.isSpinnerVisible = false;
      }
      else if ((usuario.medico != null && usuario.medico.ativo) || usuario.login == "admin") {
        this.sidebarnavItems = this.ROUTES;
        this.isSpinnerVisible = false;
      }
    }
  }

  removeMenu(itens: RouteInfo[], caminho: string) {
    var menusSplit = caminho.split("/");
    var menuRemover: RouteInfo;
    var subMenus: RouteInfo[];
    var menuAnterior: RouteInfo;

    for (var i = 0; i < menusSplit.length; i++) {

      var titulo = menusSplit[i];
      var menu = subMenus == null ? itens.find(c => c.title == titulo) : subMenus.find(c => c.title == titulo);

      if (menu != null) {
        menuAnterior = menuRemover;
        menuRemover = menu;
        subMenus = menu.submenu;
      }
    }

    //primeiro menu
    if (menuAnterior == null) {
      var index = itens.indexOf(menuRemover);
      itens.splice(index, 1);
    }
    else {
      var index = menuAnterior.submenu.indexOf(menuRemover);
      menuAnterior.submenu.splice(index, 1);

      //quando remove-se todos submenus do menu, remove o menu tbm
      if (menuAnterior.submenu.length == 0) {
        caminho = "";
        menusSplit.forEach(menu => {
          caminho = caminho + menu + "/";
          if (menu == menuAnterior.title)
            stop;
        });

        itens = this.removeMenu(itens, caminho);
      }
    }
    return itens;
  }

  ROUTES: RouteInfo[] = [
    {
      path: '',
      title: 'Cadastros',
      icon: 'fa fa-pencil-square-o',
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
      ]
    },
    {
      path: '',
      title: 'Procedimentos',            
      icon: 'fa fa-medkit',
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
      ]
    },
    {
      path: '',
      title: 'Paciente',
      icon: 'fa fa-users',
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
        // {
        //   path: '/listagem/listagemprontuario',
        //   title: 'Prontuário',
        //   icon: '',
        //   class: '',
        //   label: '',
        //   labelClass: '',
        //   extralink: false,
        //   submenu: []
        // },
        {
          path: '/listagem/listagemtimeline',
          title: 'Histórico',
          icon: '',
          class: '',
          label: '',
          labelClass: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/listagem/listagemmodeloprescricao',
          title: 'Modelo de Prescrição',
          icon: 'fa fa-prescription-bottle',
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
      title: 'Médico',
      icon: 'fa fa-user-md',
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
      path: '/agenda/agenda',
      title: 'Agenda',
      icon: 'icon-Calendar-4',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: []
    },
    {
      path: '',
      title: 'Financeiro',
      icon: 'fa fa-money',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: [
        {
          path: '/dashboard/transacoesfinanceiras',
          title: 'Transações Financeiras',
          icon: '',
          class: '',
          label: '',
          labelClass: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/listagem/procedimentosrealizados',
          title: 'Procedimentos Realizados',
          icon: '',
          class: '',
          label: '',
          labelClass: '',
          extralink: false,
          submenu: []
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
        },
        {
          path: '/listagem/listagemformadepagamento',
          title: 'Forma de Pagamento',
          icon: '',
          class: '',
          label: '',
          labelClass: '',
          extralink: false,
          submenu: []
        }
      ]
    },
    // {
    //   path: '',
    //   title: 'Importador',
    //   icon: 'icon-Double-Circle',
    //   class: '',
    //   label: '',
    //   labelClass: '',
    //   extralink: false,
    //   submenu: [
    //     {
    //       path: '/importador/importarconferencia',
    //       title: 'Arquivo Conferência',
    //       icon: '',
    //       class: '',
    //       label: '',
    //       labelClass: '',
    //       extralink: false,
    //       submenu: []
    //     }
    //   ]
    // },
  ];
}
