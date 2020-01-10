import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../uteis/Util';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public isSpinnerVisible = false;
  util = new Util();

  constructor(private router: Router, private modalService: NgbModal) {

    this.isSpinnerVisible = true;
  }


  redirecionar(nomeMenu: string) {
    console.log(nomeMenu);
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
      case "Medicos":
        {
          rota = "/listagem/listagemmedico"
          break;
        }
      case "Meu Perfil":
        {
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
          break;
        }
    }

    this.router.navigate([rota]);
  }






}


