import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../modelos/usuario.';
import { LoginService } from '../../services/login.service';
import { first } from 'rxjs/operators';

@Component({    
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private loginService : LoginService) {}
  
  ngOnInit() {
    this.loginService.logout();
  }

  usuario : Usuario = {login : "", senha:"", token:"", permissaoAdministrador : false, ativo:true, visualizaValoresRelatorios : false, tipoUsuario : 0, medicoId :""};
  onLoggedin() {    
    this.loginService.login(this.usuario).pipe(first()).subscribe(
      data=> {
        this.router.navigate(["listagem/listagempaciente"]);
      },
      error=>
      {
        
      }
    );
  }
}
