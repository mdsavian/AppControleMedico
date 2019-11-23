import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ContaPagar } from '../modelos/contaPagar'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContaPagarService {
    private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'contaPagar/';

  public contaPagar:ContaPagar;
  public listaContaPagar :Array<ContaPagar>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<ContaPagar>>(this.accessPointUrl);
  }
  
  public salvar(contaPagar: ContaPagar) {
    return this.http.post<ContaPagar>(this.accessPointUrl, contaPagar);
  }

  public buscarPorId(contaPagarId: string) {
    return this.http.get<ContaPagar>(this.accessPointUrl + "buscarPorId/" + contaPagarId);
  }

  public buscarContaPagarPorFornecedor(fornecedorId: string) {
    return this.http.get<ContaPagar>(this.accessPointUrl + "buscarContaPagarPorFornecedor/" + fornecedorId);
  }

  public Excluir(contaPagarId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + contaPagarId);
  }

  TodosPorPeriodo(primeiroDiaMes: string, dataHoje: string, medicoId:string) {

    let parametros = new HttpParams().set("primeiroDiaMes", primeiroDiaMes).set("dataHoje", dataHoje).set("medicoId", medicoId);
    
    return this.http.get<Array<ContaPagar>>(this.accessPointUrl + "todosPorPeriodo?" + parametros);
  }

}
