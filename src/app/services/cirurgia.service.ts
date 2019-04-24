import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cirurgia } from '../modelos/cirurgia'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CirurgiaService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'cirurgia/';

  public cirurgia:Cirurgia;
  public listaCirurgia :Array<Cirurgia>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Cirurgia>>(this.accessPointUrl);
  }
  
  public salvar(cirurgia: Cirurgia) {
    return this.http.post<Cirurgia>(this.accessPointUrl, cirurgia);
  }

  public buscarPorId(cirurgiaId: string) {
    return this.http.get<Cirurgia>(this.accessPointUrl + "buscarPorId/" + cirurgiaId);
  }

  public Excluir(cirurgiaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + cirurgiaId);
  }

}
