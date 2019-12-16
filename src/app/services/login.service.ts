import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Usuario } from '../modelos/usuario';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { Util } from '../uteis/Util';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private usuarioCorrenteSubject: BehaviorSubject<Usuario>;
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'login/';

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.usuarioCorrenteSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuarioCorrente')));
  }

  public login(usuario: Usuario) {
    var util = new Util();

    let parametros = new HttpParams().set("login", usuario.login).set("senha", usuario.senha);

    return this.http.get<Usuario>
      (this.accessPointUrl + "validarLogin?" + parametros).pipe(map(usuario => {
        if (usuario != null && this.validaUsuarioAtivo(usuario)) {

          if (usuario.login != "admin" && ((usuario.funcionario != null && !util.hasItems(usuario.funcionario.clinicasId)) || (usuario.medico != null && !util.hasItems(usuario.medico.clinicasId))))
            return null;

          localStorage.setItem("usuarioCorrente", JSON.stringify(usuario))
          this.usuarioCorrenteSubject.next(usuario);
          return usuario;
        }
        return null;
      }));
  }

  validaUsuarioAtivo(usuario: Usuario): boolean {
    return (usuario.funcionario != null && usuario.funcionario.ativo) || (usuario.medicoId != null && usuario.medico.ativo) || (usuario.login === "admin" && usuario.ativo);
  }

  public validaSenha(login: string, senha: string) {
    var usuario = new Usuario();
    usuario.senha = senha;
    usuario.login = login;

    return this.http.post(this.accessPointUrl + "validaSenha/", usuario, { headers: this.headers });
  }

  public logout() {
    localStorage.removeItem("usuarioCorrente");
    this.usuarioCorrenteSubject.next(null);
    this.appService.removeClinica();
    this.router.navigate(["authentication/login"]);
  }

  public validaUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.accessPointUrl + "validaUsuario/", usuario, { headers: this.headers }).pipe(map(retorno => {
      return retorno;
    }));
  }
}
