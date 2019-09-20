import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlteraSenha } from '../modelos/naoPersistidos/alteraSenha';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'usuario/';

  public usuarioCorrente: Usuario;
  public listaUsuario: Array<Usuario>;
  public usuarioParaValidacao: Usuario;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public todos() {
    return this.http.get<Array<Usuario>>(this.accessPointUrl, { headers: this.headers });

  }

  public add(usuario) {
    return this.http.post(this.accessPointUrl, usuario, { headers: this.headers });
  }

  public remove(usuario) {
    return this.http.delete(this.accessPointUrl + '/' + usuario.id, { headers: this.headers });
  }

  public update(usuario) {
    return this.http.put(this.accessPointUrl + '/' + usuario.id, usuario, { headers: this.headers });
  }

  public alterarSenha(alterarSenha: AlteraSenha) {
    return this.http.post(this.accessPointUrl + 'alterarSenha', alterarSenha);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }


}
