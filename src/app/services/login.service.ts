import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Usuario } from '../modelos/usuario.';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private usuarioCorrenteSubject: BehaviorSubject<Usuario>;
  public usuarioCorrente: Observable<Usuario>;
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'login/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    this.usuarioCorrenteSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuarioCorrente')));
    this.usuarioCorrente = this.usuarioCorrenteSubject.asObservable();

  }

  public login(usuario: Usuario) {
    console.log(this.accessPointUrl);
    console.log(environment.apiUrl);

    return this.http.post<Usuario>(this.accessPointUrl, usuario).pipe(map(usuario => {
      if (usuario && usuario.token) {
        localStorage.setItem("usuarioCorrente", JSON.stringify(usuario))
        this.usuarioCorrenteSubject.next(usuario);
      }

      return usuario;
    }));

  }

  public logout() {
    
    localStorage.removeItem("usuarioCorrente");
    this.usuarioCorrenteSubject.next(null);
  }

  public get usuarioCorrenteValor(): Usuario {
    var usuario = this.usuarioCorrenteSubject.value;
    return usuario;
  }

  public validaUsuario(usuario: Usuario) {
    console.log(this.accessPointUrl);
    return this.http.post(this.accessPointUrl + "validaUsuario/", usuario, { headers: this.headers }).pipe(map(retorno => {
      return retorno;
    }));
  }
}
