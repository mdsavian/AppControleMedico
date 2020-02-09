import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Paciente } from '../modelos/paciente';
import { Agendamento } from '../modelos/agendamento';
import { AgendamentoService } from './agendamento.service';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import { Exame } from '../modelos/exame';
import { Timeline } from '../modelos/timeline';
import { Util } from '../uteis/Util';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { ContaReceberService } from './contaReceber.service';
import { Medico } from '../modelos/medico';
import { Local } from '../modelos/local';

@Injectable({
  providedIn: 'root'
})

export class TimelineService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'timeline/';
  public pacienteId: string;
  public paciente: Paciente;
  util = new Util();


  constructor(private http: HttpClient, private agendamentoService: AgendamentoService, private contaReceberService: ContaReceberService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }


  montarDadosTimeline(agendamentos: Agendamento[], exames: Exame[], cirurgias: Cirurgia[], procedimentos: Procedimento[], locais: Local[], medicos: Medico[]) {

    let listaTimeline = new Array<Timeline>();
    var i = 1;

    agendamentos.forEach(agenda => {
      agenda = this.agendamentoService.tratarCorAgendamento(agenda, exames, cirurgias, procedimentos);

      var timeline = new Timeline();
      timeline.agendamentoId = agenda.id;
      timeline.dataHora = this.util.dataParaString(agenda.dataAgendamento) + " " + this.util.formatarHora(agenda.horaInicial) + " - " + this.util.formatarHora(agenda.horaFinal);

      timeline.titulo = ETipoAgendamento[agenda.tipoAgendamento] + " - " + ESituacaoAgendamento[agenda.situacaoAgendamento];
      timeline.descricao = this.agendamentoService.retornarOperacaoAgendamento(agenda, exames, cirurgias, procedimentos).toUpperCase();
      timeline.cor = agenda.corFundo;

      agenda.medico = medicos.find(c => c.id == agenda.medicoId);
      if (agenda.medico != null)
        timeline.descricao = timeline.descricao + "\n Médico: " + agenda.medico.nomeCompleto;

      if (!this.util.isNullOrWhitespace(agenda.localId)) {
        agenda.local = locais.find(c => c.id == agenda.localId);
        timeline.descricao = timeline.descricao + "\n Local: " + agenda.local.descricao.toUpperCase();
      }

      if (!this.util.isNullOrWhitespace(agenda.observacao)) {
        timeline.descricao = timeline.descricao + "\n Obs.: " + agenda.observacao;
      }

      if (this.util.hasItems(agenda.pagamentos)) {

        this.contaReceberService.buscarPorAgendamento(agenda.id).subscribe(conta => {
          if (conta != null) {
            timeline.contaReceber = conta;
            timeline.valorTotal = agenda.pagamentos.reduce(function (valor, pagamento) { return pagamento.valor + valor; }, 0);
            timeline.descricao = timeline.descricao + "\n Valor Pago: " + this.util.formatarDecimal(timeline.valorTotal);
          }
        });
      }


      timeline.par = i % 2 === 0;
      listaTimeline.push(timeline);
      i++;

    });

    var timelineCadastro = new Timeline();
    timelineCadastro.dataHora = this.util.dataParaString(this.paciente.dataCadastro);

    timelineCadastro.titulo = "Cadastro";
    timelineCadastro.descricao = "Cadastro do paciente realizado em " + this.util.dataParaString(this.paciente.dataCadastro) + ".";
    timelineCadastro.cor = "#66cdaa";
    timelineCadastro.par = i % 2 === 0;
    listaTimeline.push(timelineCadastro);

    return listaTimeline;

  }



}
