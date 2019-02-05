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

  usuario : Usuario = {login : "", senha:"", nomeCompleto: "",ativo:true, id : "",
  cpf: "", dataNascimento: new Date('01/01/0001'), token:"", rg: "", genero: 1,celular: "", email: "",  cep: "", endereco: "", numero: "",
    complemento: "", bairro: "", cidade: "", uf: "", permissaoAdministrador : false, visualizaValoresRelatorios : false, tipoUsuario : 0};

  onLoggedin() {    
    this.loginService.login(this.usuario).pipe(first()).subscribe(
      data=> {
        this.router.navigate(["cadastros/cadastropaciente"]);
      },
      error=>
      {
        
      }
    );
  }
}
