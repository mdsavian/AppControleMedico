import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfiguracaoAtalho } from '../../modelos/configuracaoAtalho';
import { Util } from '../../uteis/Util';
import { AppService } from '../../services/app.service';
import { ConfiguracaoAtalhoService } from '../../services/configuracaoAtalho.service';
import { UsuarioService } from '../../services/usuario.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Usuario } from '../../modelos/usuario';


@Component({
  templateUrl: './configuracao-atalho.component.html',
  styleUrls: ['../../home/home.component.css'],
})

export class ConfiguracaoAtalhoComponent implements OnInit {

  util = new Util();
  isSpinnerVisible = false;
  configuracaoAtalhos = new Array<ConfiguracaoAtalho>();
  usuario: Usuario;
  configuracaoAtalho :ConfiguracaoAtalho;
  constructor(private router: Router, private modalService: NgbModal, private configuracaoAtalhoService: ConfiguracaoAtalhoService, private usuarioService: UsuarioService,
    private appService: AppService) {
  }

  public ngOnInit(): void {

    this.usuario = this.appService.retornarUsuarioCorrente();
    this.isSpinnerVisible = true;

    this.configuracaoAtalhoService.buscarParaConfiguracao(this.usuario.id).subscribe(lista => {
      this.configuracaoAtalho = lista.find(c => c.descricao == 'Configurar Atalhos');
      var index = lista.indexOf(this.configuracaoAtalho);
      lista.splice(index, 1);

      this.configuracaoAtalhos = lista;
      this.isSpinnerVisible = false;
    });

  }

  public salvar(): void {

    this.configuracaoAtalhos.push(this.configuracaoAtalho);
    this.usuario.configuracaoAtalhos = this.configuracaoAtalhos;

    this.usuarioService.salvar(this.usuario).subscribe(c => {
      this.router.navigate(["home/home"]);
    },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      });
    }
  }