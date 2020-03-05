import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ExtraCaixa } from '../modelos/extraCaixa'
import { environment } from '../../environments/environment';
import { ContaReceber } from '../modelos/contaReceber';
import { ContaPagar } from '../modelos/contaPagar';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class ExtraCaixaService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'extraCaixa/';

  public extraCaixa:ExtraCaixa;
  public listaExtraCaixa :Array<ExtraCaixa>;

  constructor(private http: HttpClient, private appService:AppService) {
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
    let parametros = new HttpParams().set("dataInicio", dataInicio).set("dataFim", dataFim).set("medicoId", medicoId).set("caixaId",caixaId).set("funcionarioId", funcionarioId)
    .set("clinicaId", this.appService.retornarClinicaCorrente().id);    
    return this.http.get<ExtraCaixa[]>(this.accessPointUrl + "todosPorPeriodo?" + parametros);
  }

  converterExtraCaixaContaReceber(extraCaixas:Array<ExtraCaixa>)
  {
    let contas = new Array<ContaReceber>();

    extraCaixas.forEach(extra => {
      let conta = new ContaReceber();
      conta.usuarioId = extra.usuarioId;
      conta.dataEmissao = extra.data;
      conta.valor = extra.parcela * extra.valor;  
      conta.caixa = extra.caixa;
      conta.tipoContaDescricao = "Extra Débito";

      contas.push(conta);
    });

    return contas;
    
  }

  converterExtraCaixaContaPagar(extraCaixas:Array<ExtraCaixa>)
  {
    let contas = new Array<ContaPagar>();

    extraCaixas.forEach(extra => {
      let conta = new ContaPagar();
      conta.usuarioId = extra.usuarioId;
      conta.dataEmissao = extra.data;
      conta.valor = extra.parcela * extra.valor;  
      conta.caixa = extra.caixa;
      conta.tipoContaDescricao = "Extra Crédito";

      contas.push(conta);
    });

    return contas;
    
  }

}
