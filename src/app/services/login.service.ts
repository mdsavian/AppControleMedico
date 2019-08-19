import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Usuario } from '../modelos/usuario';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private usuarioCorrenteSubject: BehaviorSubject<Usuario>;
  public usuarioCorrenteObservable: Observable<Usuario>;
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'login/';

  constructor(private http: HttpClient,private router: Router) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    this.usuarioCorrenteSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuarioCorrente')));
    this.usuarioCorrenteObservable = this.usuarioCorrenteSubject.asObservable();
  }

  public login(usuario: Usuario) {
    return this.http.post<Usuario>(this.accessPointUrl, usuario, {headers: this.headers}).pipe(map(usuario => {
      if (usuario != null && usuario.ativo) {
        localStorage.setItem("usuarioCorrente", JSON.stringify(usuario))
        this.usuarioCorrenteSubject.next(usuario);        
      }
      return usuario;
    }));

  }

  public validaSenha(login:string, senha:string)
  {
    var usuario = new Usuario();
    usuario.senha = senha;
    usuario.login = login;
        
    return this.http.post(this.accessPointUrl + "validaSenha/", usuario, { headers: this.headers });
  }

  public logout() {

    localStorage.removeItem("usuarioCorrente");    
    this.usuarioCorrenteSubject.next(null);
    this.router.navigate(["authentication/login"]);
  }

  public get usuarioCorrenteValor(): Usuario {    
    var usuario = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuarioCorrente'))).value;
    return usuario;
  }

  public validaUsuario(usuario: Usuario) {
    return this.http.post(this.accessPointUrl + "validaUsuario/", usuario, { headers: this.headers }).pipe(map(retorno => {
      return retorno;
    }));
  }
}
