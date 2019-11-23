import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { UsuarioService } from '../../services/usuario.service';
import { Util } from '../../uteis/Util';

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

    var usuario = this.appService.retornarUsuarioCorrente();
    var itensSideBar = ROUTES.filter(sidebarnavItem => sidebarnavItem);

    if (usuario != null) {

      if (usuario.funcionario != null && usuario.funcionario.ativo) {

        var funcionario = usuario.funcionario;

        if (!funcionario.permissaoAdministrador)
          itensSideBar = this.removeMenu(itensSideBar, "Financeiro", "Dashboard Analítico");

        if (!this.util.hasItems(funcionario.medicosId) && !funcionario.visualizaAgenda) {
          itensSideBar = this.removeMenu(itensSideBar, "Agenda", "");
        }
      }
      else if (usuario.medico != null && usuario.medico.ativo) {

      }
    }

    this.sidebarnavItems = itensSideBar;

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

  removeMenu(itens: RouteInfo[], titulo: string, submenu: string) {
    var menuAgenda = itens.find(c => c.title == titulo);

    if (menuAgenda != null) {
      if (!this.util.isNullOrWhitespace(submenu) && menuAgenda.submenu != null) {
        let subMenu = menuAgenda.submenu.find(c => c.title == titulo);

        console.log("antes", menuAgenda);

        var index = menuAgenda.submenu.indexOf(subMenu);
        menuAgenda.submenu.splice(index, 1);

        console.log("depois menuAgenda", menuAgenda);
      }
      var index = itens.indexOf(menuAgenda);
      itens.splice(index, 1);
    }


    return itens;
  }


}
