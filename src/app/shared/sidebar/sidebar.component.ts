import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { UsuarioService } from '../../services/usuario.service';
import { Util } from '../../uteis/Util';
import { ROUTES } from './menu-items';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  util = new Util();

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

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
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
    var itensSideBar = ROUTES.filter(sidebarnavItem => sidebarnavItem);

    console.log(itensSideBar, ROUTES, ROUTES.filter(sidebarnavItem => sidebarnavItem));
    if (usuario != null) {

      if (usuario.funcionario != null && usuario.funcionario.ativo) {

        var funcionario = usuario.funcionario;

        if (!funcionario.permissaoAdministrador) {
          itensSideBar = this.removeMenu(itensSideBar, "/dashboard/dashboardanalitico");
          console.log(itensSideBar, "após1");
          itensSideBar = this.removeMenu(itensSideBar, "/listagem/listagemcaixa");
          console.log(itensSideBar, "após2");
          itensSideBar = this.removeMenu(itensSideBar, "listagem/listagemmedico");
          console.log(itensSideBar, "após3");
          itensSideBar = this.removeMenu(itensSideBar, "/listagem/listagemformadepagamento");
          console.log(itensSideBar, "após4");
          itensSideBar = this.removeMenu(itensSideBar, "/listagem/listagemoficio");
          console.log(itensSideBar, "após5");
        }

        if (!this.util.hasItems(funcionario.medicosId) || !funcionario.visualizaAgenda) {
          itensSideBar = this.removeMenu(itensSideBar, "/agenda/agenda");
        }

        console.log(itensSideBar, "após");

        this.sidebarnavItems = itensSideBar;
      }
      else if (usuario.medico != null && usuario.medico.ativo) {
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
      }
    }
  }

  removeMenu(itens: RouteInfo[], caminho: string) {

    var menusSplit = caminho.split("/");
    var menuRemover: RouteInfo;
    var subMenus: RouteInfo[];
    var menuAnterior: RouteInfo;

    for (var i = 0; i < menusSplit.length; i++) {
      var path = menusSplit[i];

      var menu = subMenus == null ? itens.find(c => c.path == path) : subMenus.find(c => c.path == path);

      console.log(menu);
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
          if (menu == menuAnterior.path)
            stop;
        });

        itens = this.removeMenu(itens, caminho);
      }
    }

    return itens;
  }

}
