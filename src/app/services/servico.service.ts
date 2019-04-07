import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servico } from '../modelos/servico'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'servico/';

  public servico:Servico;
  public listaServico :Array<Servico>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Servico>>(this.accessPointUrl);
  }
  
  public salvar(servico: Servico) {
    return this.http.post<Servico>(this.accessPointUrl, servico);
  }

  public buscarPorId(servicoId: string) {
    return this.http.get<Servico>(this.accessPointUrl + "buscarPorId/" + servicoId);
  }

  public Excluir(servicoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + servicoId);
  }

}
