import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from '../modelos/local'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'local/';

  public local:Local;
  public listaLocal :Array<Local>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Local>>(this.accessPointUrl);
  }
  
  public salvar(local: Local) {
    return this.http.post<Local>(this.accessPointUrl, local);
  }

  public buscarPorId(localId: string) {
    return this.http.get<Local>(this.accessPointUrl + "buscarPorId/" + localId);
  }

  public Excluir(localId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + localId);
  }

}
