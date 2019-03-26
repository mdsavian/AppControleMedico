import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Oficio } from '../modelos/oficio'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OficioService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'oficio/';

  public oficio:Oficio;
  public listaOficio :Array<Oficio>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Oficio>>(this.accessPointUrl);
  }
  
  public salvar(oficio: Oficio) {
    console.log("tosalvandooo");
    return this.http.post<Oficio>(this.accessPointUrl, oficio);
  }

  public buscarPorId(oficioId: string) {
    return this.http.get<Oficio>(this.accessPointUrl + "buscarPorId/" + oficioId);
  }

  public Excluir(oficioId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + oficioId);
  }

}
