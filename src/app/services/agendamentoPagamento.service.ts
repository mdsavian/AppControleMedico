import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AgendamentoPagamento } from '../modelos/agendamentoPagamento';
import { Agendamento } from '../modelos/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoPagamentoService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'agendamentoPagamento/';
  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

}
