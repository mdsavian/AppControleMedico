import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormaDePagamento } from '../modelos/formaDePagamento'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FormaDePagamentoService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'formaDePagamento/';

  public formaDePagamento:FormaDePagamento;
  public listaFormaDePagamento :Array<FormaDePagamento>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<FormaDePagamento>>(this.accessPointUrl);
  }
  
  public salvar(formaDePagamento: FormaDePagamento) {
    return this.http.post<FormaDePagamento>(this.accessPointUrl, formaDePagamento);
  }

  public buscarPorId(formaDePagamentoId: string) {
    return this.http.get<FormaDePagamento>(this.accessPointUrl + "buscarPorId/" + formaDePagamentoId);
  }

  public Excluir(formaDePagamentoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + formaDePagamentoId);
  }

}
