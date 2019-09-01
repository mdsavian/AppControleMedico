import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Agendamento } from '../modelos/agendamento'
import { environment } from '../../environments/environment';
import { AppService } from './app.service';
import { Util } from '../uteis/Util';


@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {


  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'agendamento/';
  private util = new Util();

  public agendamento: Agendamento;
  public listaAgendamento: Array<Agendamento>;

  constructor(private http: HttpClient, private appService: AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Agendamento>>(this.accessPointUrl);
  }

  public salvar(agendamento: Agendamento) {
    return this.http.post<Agendamento>(this.accessPointUrl, agendamento);
  }

  public buscarPorId(agendamentoId: string) {
    return this.http.get<Agendamento>(this.accessPointUrl + "buscarPorId/" + agendamentoId);
  }

  public buscarAgendamentosMedico(medicoId: string, data: string, tipoCalendario: string) {

    let parametros = new HttpParams().set("medicoId", medicoId).set("data", data).set("tipoCalendario", tipoCalendario);
    return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosMedico?" + parametros);
  }

  public Excluir(agendamentoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + agendamentoId);
  }

  public retornarOperacaoAgendamento(agendamento: Agendamento):string {
    console.log(agendamento);
    if (!this.util.isNullOrWhitespace(agendamento.exameId))
      return agendamento.exame.descricao;

    if (!this.util.isNullOrWhitespace(agendamento.cirurgiaId))
      return agendamento.cirurgia.descricao;

    if (!this.util.isNullOrWhitespace(agendamento.procedimentoId))
      return agendamento.procedimento.descricao;

    if (!this.util.isNullOrWhitespace(agendamento.exameId))
      return agendamento.exame.descricao;
      
      return "Consulta";
  }
}
