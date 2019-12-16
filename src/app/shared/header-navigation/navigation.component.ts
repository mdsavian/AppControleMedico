import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';
import {Util} from '../../uteis/Util';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit, OnInit {

  tituloDescricao = "Controle Médico";
  util = new Util();
  public config: PerfectScrollbarConfigInterface = {};
  constructor(private modalService: NgbModal, private router: Router, private loginService: LoginService, private appService: AppService) { }


  ngOnInit(): void {
    var clinica = this.appService.retornarClinicaCorrente();
    var usuario = this.appService.retornarUsuarioCorrente();

    var nomeUsuario = !this.util.isNullOrWhitespace(usuario.funcionarioId) ? usuario.funcionario.nomeCompleto : !this.util.isNullOrWhitespace(usuario.medicoId) ? usuario.medico.nomeCompleto : "Admin";

    this.tituloDescricao = this.tituloDescricao + " - Bem vindo " + nomeUsuario.toUpperCase() + " - Clínica " + clinica.razaoSocial.toUpperCase();
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  public logout() {
    this.loginService.logout();
    this.router.navigate(["authentication/login"]);
  }

  ngAfterViewInit() {
    const set = function () {
      const width =
        window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      const topOffset = 0;
      if (width < 1170) {
        $('#main-wrapper').addClass('mini-sidebar');
      } else {
        $('#main-wrapper').removeClass('mini-sidebar');
      }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $('.search-box a, .search-box .app-search .srh-btn').on(
      'click',
      function () {
        $('.app-search').toggle(200);
      }
    );

    $('body').trigger('resize');
  }
}
