import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})

export class AppService {


  constructor(private loginservice: LoginService) {
  }

  public retornarUsuarioAdministrador(): boolean {
    var usuario = this.loginservice.usuarioCorrenteValor;
    return ((usuario.medicoId == "" || usuario.medicoId == null) && (usuario.funcionarioId == null || usuario.funcionarioId == ""));
  }

  public retornarUsuarioCorrente(): Usuario {
    var usuario = this.loginservice.usuarioCorrenteValor;
    return usuario;
  }f

}
