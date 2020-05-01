import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ContaPagar } from '../modelos/contaPagar'
import { environment } from '../../environments/environment';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class ContaPagarService {
    private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'contaPagar/';

  public contaPagar:ContaPagar;
  public listaContaPagar :Array<ContaPagar>;

  constructor(private http: HttpClient, private appService:AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    let parametros = new HttpParams().set("usuarioId", this.appService.retornarUsuarioCorrente().id).set("clinicaId", this.appService.retornarClinicaCorrente().id);
    return this.http.get<ContaPagar[]>(this.accessPointUrl + "todos?" + parametros);        
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

  TodosPorPeriodo(primeiroDiaMes: string, dataHoje: string, medicoId:string, funcionarioId:string, clinicaId: string) {

    let parametros = new HttpParams().set("primeiroDiaMes", primeiroDiaMes).set("dataHoje", dataHoje).set("medicoId", medicoId).set("funcionarioId", funcionarioId).set("clinicaId", clinicaId);;
    
    return this.http.get<Array<ContaPagar>>(this.accessPointUrl + "todosPorPeriodo?" + parametros);
  }

}
