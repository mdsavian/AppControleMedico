import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../modelos/usuario';
import { LoginService } from '../../services/login.service';
import { first } from 'rxjs/operators';
import { Funcionario } from '../../modelos/funcionario';
import { Medico } from '../../modelos/medico';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

@Component({    
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('modalErro') private modalErro: TemplateRef<any>;

  constructor(public router: Router, private loginService : LoginService, private modalService: NgbModal) {}
  mensagemErro = "";
  ngOnInit() {
    this.loginService.logout();
  }

  usuario : Usuario = {login : "", funcionario:new Funcionario(), senha:"", token:"", permissaoAdministrador : false, ativo:true, visualizaValoresRelatorios : false, tipoUsuario : 0, medico :new Medico()};
  onLoggedin() {    
    this.loginService.login(this.usuario).pipe(first()).subscribe(
      data=> {
        
        if (data == null)
        {
          // console.log("easase", ModalErrorComponent);
          var modal = this.modalService.open(ModalErrorComponent);
          modal.componentInstance.mensagemErro = "Usuário/Senha inválidos. Verifique!";
        }
        this.router.navigate(["listagem/listagempaciente"]);
      },
      error=>
      {
        console.log("erro:", error);
      }
    );
  }
}
