import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exame } from '../modelos/exame'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExameService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'exame/';

  public exame:Exame;
  public listaExame :Array<Exame>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Exame>>(this.accessPointUrl);
  }
  
  public salvar(exame: Exame) {
    return this.http.post<Exame>(this.accessPointUrl, exame);
  }

  public buscarPorId(exameId: string) {
    return this.http.get<Exame>(this.accessPointUrl + "buscarPorId/" + exameId);
  }

  public Excluir(exameId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + exameId);
  }

}
