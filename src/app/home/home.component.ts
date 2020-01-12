import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from '../uteis/Util';
import { UsuarioService } from '../services/usuario.service';
import { AppService } from '../services/app.service';
import { ConfiguracaoAtalhoService } from '../services/configuracaoAtalho.service';
import { Usuario } from '../modelos/usuario';
import { ConfiguracaoAtalho } from '../modelos/configuracaoAtalho';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isSpinnerVisible = false;
  util = new Util();
  usuario = new Usuario();
  configuracaoAtalhos = new Array<ConfiguracaoAtalho>();

  constructor(private router: Router, private appService: AppService, private usuarioService: UsuarioService, private configuracaoAtalhoService: ConfiguracaoAtalhoService) {
  }

  ngOnInit(): void {
    this.usuario = this.appService.retornarUsuarioCorrente();

    this.isSpinnerVisible = true;
    this.configuracaoAtalhoService.buscarPorUsuario(this.usuario.id).subscribe(configuracoes => {
      this.configuracaoAtalhos = configuracoes;
      this.isSpinnerVisible = false;
    });
  }


  redirecionar(nomeMenu: string) {

    var rota = "";

    switch (nomeMenu) {
      case "Agenda":
        {
          rota = "/agenda/agenda"
          break;
        }
      case "Dashboard":
        {
          rota = "/dashboard/dashboardanalitico"

          break;
        }
      case "Pacientes":
        {
          rota = "/listagem/listagempaciente"
          break;
        }
      case "Médicos":
        {
          rota = "/listagem/listagemmedico"
          break;
        }
      case "Meu Perfil":
        {
          this.usuarioService.redirecionarParaPerfil(this.usuario);
          break;
        }
      case "Conta a Pagar":
        {
          rota = "/listagem/listagemcontapagar"
          break;
        }
      case "Conta a Receber":
        {
          rota = "/listagem/listagemcontareceber"
          break;
        }
      case "Caixas":
        {
          rota = "/listagem/listagemcaixa"
          break;
        }
      case "Configurar Atalhos":
        {          
          this.configuracaoAtalhoService.listaConfiguracaoAtalho = this.configuracaoAtalhos;          
          rota = "/cadastros/configuracaoatalho"
          break;
        }
    }

    if (!this.util.isNullOrWhitespace(rota))
      this.router.navigate([rota]);
  }






}


