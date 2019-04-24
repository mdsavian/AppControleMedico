import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Procedimento } from '../modelos/procedimento'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'procedimento/';

  public procedimento:Procedimento;
  public listaProcedimento :Array<Procedimento>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Procedimento>>(this.accessPointUrl);
  }
  
  public salvar(procedimento: Procedimento) {
    return this.http.post<Procedimento>(this.accessPointUrl, procedimento);
  }

  public buscarPorId(procedimentoId: string) {
    return this.http.get<Procedimento>(this.accessPointUrl + "buscarPorId/" + procedimentoId);
  }

  public Excluir(procedimentoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + procedimentoId);
  }

}
