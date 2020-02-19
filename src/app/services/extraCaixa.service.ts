import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ExtraCaixa } from '../modelos/extraCaixa'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExtraCaixaService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'extraCaixa/';

  public extraCaixa:ExtraCaixa;
  public listaExtraCaixa :Array<ExtraCaixa>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<ExtraCaixa>>(this.accessPointUrl);
  }
  
  public salvar(extraCaixa: ExtraCaixa) {
    return this.http.post<ExtraCaixa>(this.accessPointUrl, extraCaixa);
  }

  public buscarPorId(extraCaixaId: string) {
    return this.http.get<ExtraCaixa>(this.accessPointUrl + "buscarPorId/" + extraCaixaId);
  }

  public Excluir(extraCaixaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + extraCaixaId);
  }

  public BuscarPorCaixa(caixaId:string)
  {
    return this.http.get<ExtraCaixa[]>(this.accessPointUrl + "buscarPorCaixa/" + caixaId);
  }
  
  TodosPorPeriodo(dataInicio: any, dataFim: any, medicoId:string,caixaId:string, funcionarioId:string) {
    let parametros = new HttpParams().set("dataInicio", dataInicio).set("dataFim", dataFim).set("medicoId", medicoId).set("caixaId",caixaId).set("funcionarioId", funcionarioId);    
    return this.http.get<ExtraCaixa[]>(this.accessPointUrl + "todosPorPeriodo?" + parametros);
  }

}
