import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ContaReceber } from '../modelos/contaReceber'
import { environment } from '../../environments/environment';
import { AgendamentoService } from '../services/agendamento.service';
import { Agendamento } from "../modelos/agendamento";

@Injectable({
  providedIn: 'root'
})
export class ContaReceberService {  
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'contaReceber/';

  public contaReceber: ContaReceber;
  public listaContaReceber: Array<ContaReceber>;

  constructor(private http: HttpClient, private agendamentoService: AgendamentoService, ) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<ContaReceber>>(this.accessPointUrl);
  }

  public salvar(contaReceber: ContaReceber) {
    return this.http.post<ContaReceber>(this.accessPointUrl, contaReceber);
  }

  public buscarPorId(contaReceberId: string) {
    return this.http.get<ContaReceber>(this.accessPointUrl + "buscarPorId/" + contaReceberId);
  }


  public Excluir(contaReceberId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + contaReceberId);
  }

  TodosPorPeriodo(primeiroDiaMes: any, dataHoje: any) {
    let parametros = new HttpParams().set("primeiroDiaMes", primeiroDiaMes).set("dataHoje", dataHoje);    
    return this.http.get<ContaReceber[]>(this.accessPointUrl + "todosPorPeriodo?" + parametros);
  }

}
