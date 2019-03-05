import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'usuario/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});

  }

  public add(usuario) {
    return this.http.post(this.accessPointUrl, usuario, {headers: this.headers});
  }

  public remove(usuario) {
    return this.http.delete(this.accessPointUrl + '/' + usuario.id, {headers: this.headers});
  }

  public update(usuario) {
    return this.http.put(this.accessPointUrl + '/' + usuario.id, usuario, {headers: this.headers});
  }


}
