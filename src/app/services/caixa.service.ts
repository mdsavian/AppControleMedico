import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Caixa } from '../modelos/Caixa'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'Caixa/';

  public caixa: Caixa;
  public listaCaixa: Array<Caixa>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Caixa>>(this.accessPointUrl);
  }

  public salvar(caixa: Caixa) {
    //caixa.clinicaId = this.appService.retornarClinica().id);
    return this.http.post<Caixa>(this.accessPointUrl, caixa);
  }
  
  retornarTodosCaixasAbertos()
  {
    return this.http.get<Array<Caixa>>(this.accessPointUrl + "retornarTodosCaixasAbertos/");
  }
  retornarCaixaAbertoFuncionario(funcionarioId: string) {
    return this.http.get<Caixa>(this.accessPointUrl + "retornarCaixaAbertoFuncionario/" + funcionarioId);
  }

  public buscarPorId(caixaId: string) {
    return this.http.get<Caixa>(this.accessPointUrl + "buscarPorId/" + caixaId);
  }

  public Excluir(caixaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + caixaId);
  }

}
