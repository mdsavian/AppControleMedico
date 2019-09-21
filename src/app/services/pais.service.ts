import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../modelos/pais'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'pais/';

  public pais:Pais;
  public listaPais :Array<Pais>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Pais>>(this.accessPointUrl);
  }
  
  public salvar(pais: Pais) {
    return this.http.post<Pais>(this.accessPointUrl, pais);
  }

  public buscarPorId(paisId: string) {
    return this.http.get<Pais>(this.accessPointUrl + "buscarPorId/" + paisId);
  }

  public Excluir(paisId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + paisId);
  }

}
