import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ContaReceber } from '../modelos/contaReceber'
import { environment } from '../../environments/environment';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ContaReceberService {  
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'contaReceber/';

  public contaReceber: ContaReceber;
  public listaContaReceber: Array<ContaReceber>;

  constructor(private http: HttpClient, private appService:AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {

    let parametros = new HttpParams().set("usuarioId", this.appService.retornarUsuarioCorrente().id).set("clinicaId", this.appService.retornarClinicaCorrente().id);
    return this.http.get<ContaReceber[]>(this.accessPointUrl + "todos?" + parametros);
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

  TodosPorPeriodo(primeiroDiaMes: any, dataHoje: any, medicoId:string, funcionarioId:string, clinicaId: string) {
    let parametros = new HttpParams().set("primeiroDiaMes", primeiroDiaMes).set("dataHoje", dataHoje).set("medicoId", medicoId).set("funcionarioId", funcionarioId).set("clinicaId", clinicaId);;    
    return this.http.get<ContaReceber[]>(this.accessPointUrl + "todosPorPeriodo?" + parametros);
  }

  buscarPorAgendamento(agendamentoId:string)
  {
    return this.http.get<ContaReceber>(this.accessPointUrl + "buscarPorAgendamento/" + agendamentoId);
  }

}
 