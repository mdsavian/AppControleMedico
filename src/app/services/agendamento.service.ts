import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Agendamento } from '../modelos/agendamento'
import { environment } from '../../environments/environment';
import { Util } from '../uteis/Util';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Exame } from '../modelos/exame';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';


@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {
  
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'agendamento/';
  private util = new Util();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Agendamento>>(this.accessPointUrl);
  }

  public salvar(agendamento: Agendamento) {
    
    console.log("agendamento :", agendamento);

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

  public retornarOperacaoAgendamento(agendamento: Agendamento, exames: Array<Exame>,
    cirurgias: Array<Cirurgia>, procedimentos: Array<Procedimento>): string {

    if (!this.util.isNullOrWhitespace(agendamento.exameId) && this.util.hasItems(exames)) {
      var exame = exames.find(c => c.id == agendamento.exameId);
      if (exame != null)
        return exame.descricao;
    }
    else if (!this.util.isNullOrWhitespace(agendamento.cirurgiaId) && this.util.hasItems(cirurgias)) {
      var cirurgia = cirurgias.find(c => c.id == agendamento.cirurgiaId);
      if (cirurgia != null)
        return cirurgia.descricao;
    }
    else if (!this.util.isNullOrWhitespace(agendamento.procedimentoId) && this.util.hasItems(procedimentos)) {
      var procedimento = procedimentos.find(c => c.id == agendamento.procedimentoId);
      if (procedimento != null)
        return procedimento.descricao;
    }
    else return "Consulta";

  }

  public tratarCorAgendamento(agendamento: Agendamento, exames: Array<Exame>,
    cirurgias: Array<Cirurgia>, procedimentos: Array<Procedimento>) {
    switch (agendamento.tipoAgendamento) {
      case ETipoAgendamento.Bloqueio.valueOf(): {
        agendamento.corFundo = "#EE0000";
        agendamento.corLetra = "#EE0000";
        break;
      }
      case ETipoAgendamento.Cirurgia.valueOf(): {
        var cirurgia = cirurgias.find(c => c.id == agendamento.cirurgiaId);
        if (cirurgia != null) {
          agendamento.corFundo = cirurgia.corFundo;
          agendamento.corLetra = cirurgia.corLetra;
        }
        break;
      }
      case ETipoAgendamento.Consulta.valueOf(): {
        agendamento.corFundo = "#EFF5F5";
        agendamento.corLetra = "#EFF5F5";
        break;
      }
      case ETipoAgendamento.Exame.valueOf(): {
        var exame = exames.find(c => c.id == agendamento.exameId);
        if (exame != null) {
          agendamento.corFundo = exame.corFundo;
          agendamento.corLetra = exame.corLetra;
        }
        break;
      }
      case ETipoAgendamento.Procedimento.valueOf(): {
        var procedimento = procedimentos.find(c => c.id == agendamento.procedimentoId);
        if (procedimento != null) {
          agendamento.corFundo = procedimento.corFundo;
          agendamento.corLetra = procedimento.corLetra;
        }
        break;
      }
      case ETipoAgendamento.Retorno.valueOf(): {
        agendamento.corFundo = "#CAE1FF";
        agendamento.corLetra = "#CAE1FF";
        break;
      }
    }
    return agendamento;
  }
}
