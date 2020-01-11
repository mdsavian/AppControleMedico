import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';
import { Util } from '../../uteis/Util';
import { Usuario } from '../../modelos/usuario';
import { UploadService } from '../../services/upload.service';
import { UsuarioService } from '../../services/usuario.service';
import { ModalTrocaClinicaComponent } from '../modal/modal-troca-clinica.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit, OnInit {

  tituloDescricao = "Controle Médico";
  nomeUsuario = "";
  usuario = new Usuario();
  emailUsuario = "";
  util = new Util();
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';
  public config: PerfectScrollbarConfigInterface = {};
  constructor(private modalService: NgbModal, private uploadService: UploadService,
    private router: Router, private loginService: LoginService, private appService: AppService, private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    var clinica = this.appService.retornarClinicaCorrente();
    this.usuario = this.appService.retornarUsuarioCorrente();

    if (!this.util.isNullOrWhitespace(this.usuario.funcionarioId)) {
      var funcionario = this.usuario.funcionario;
      this.nomeUsuario = funcionario.nomeCompleto.toUpperCase();
      this.emailUsuario = funcionario.email;

      if (!this.util.isNullOrWhitespace(funcionario.fotoId)) {
        this.uploadService.downloadImagem(funcionario.id, "funcionario").subscribe(byte => {
          this.imageUrl = "data:image/jpeg;base64," + byte['value'];
        });
      }

    }
    else if (!this.util.isNullOrWhitespace(this.usuario.medicoId)) {
      var medico = this.usuario.medico;

      this.nomeUsuario = medico.nomeCompleto.toUpperCase();
      this.emailUsuario = medico.email;

      if (!this.util.isNullOrWhitespace(medico.fotoId)) {
        this.uploadService.downloadImagem(medico.id, "medico").subscribe(byte => {
          this.imageUrl = "data:image/jpeg;base64," + byte['value'];
        });
      }
    }
    else {
      this.emailUsuario = this.nomeUsuario = "ADMIN";
    }

    this.tituloDescricao = this.tituloDescricao + " - Bem vindo " + this.nomeUsuario + " - Clínica " + clinica.razaoSocial.toUpperCase();

  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(["authentication/login"]);
  }

  trocarClinica() {
    this.modalService.open(ModalTrocaClinicaComponent, {size:'lg'});
  }

  perfilUsuario() {
    this.usuarioService.redirecionarParaPerfil(this.usuario);
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
