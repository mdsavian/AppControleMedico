import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Agendamento } from '../modelos/agendamento'
import { environment } from '../../environments/environment';
import { Util } from '../uteis/Util';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Exame } from '../modelos/exame';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { CirurgiaService } from '../services/cirurgia.service';
import { ExameService } from '../services/exame.service';
import { ProcedimentoService } from '../services/procedimento.service';
import { Caixa } from '../modelos/caixa';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'agendamento/';
  private util = new Util();

  public agendamento: Agendamento;

  constructor(private http: HttpClient,
    private exameService: ExameService, private procedimentoService: ProcedimentoService, private appService: AppService, private cirurgiaService: CirurgiaService) {
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

  public buscarAgendamentosMedico(medicoId: string, data: string, tipoCalendario: string, clinicaId: string) {

    let parametros = new HttpParams().set("medicoId", medicoId).set("data", data).set("tipoCalendario", tipoCalendario).set("clinicaId", clinicaId);
    return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosMedico?" + parametros);
  }

  buscarAgendamentoMedicoExcluir(medicoId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentoMedicoExcluir/" + medicoId); }

  buscarAgendamentosPaciente(pacienteId: string, usuarioId: string, clinicaId: string) {
    let parametros = new HttpParams().set("pacienteId", pacienteId).set("usuarioId", usuarioId).set("clinicaId", clinicaId);
    return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosPaciente?" + parametros);
  }
  buscarAgendamentosLocal(localId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosLocal/" + localId); }
  buscarPagamentoAgendamentoForma(formaPagamentoId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "BuscarPagamentoAgendamentoForma/" + formaPagamentoId); }
  buscarAgendamentosConvenio(convenioId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosConvenio/" + convenioId); }
  buscarAgendamentosProcedimento(procedimentoId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosProcedimento/" + procedimentoId); }

  buscarAgendamentosCaixa(caixa: Caixa) {

    let parametros = new HttpParams().set("caixaId", caixa.id).set("clinicaId", caixa.clinicaId);
    return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosCaixa?" + parametros);
  }

  buscarAgendamentosExame(exameId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosExame/" + exameId); }
  buscarAgendamentosCirurgia(cirurgiaId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosCirurgia/" + cirurgiaId); }
  buscarAgendamentosFuncionario(funcionarioId: any) { return this.http.get<Agendamento[]>(this.accessPointUrl + "buscarAgendamentosFuncionario/" + funcionarioId); }

  TodosPorPeriodo(primeiroDiaMes: any, dataHoje: any, medicoId: string, caixaId: string, funcionarioId: string, clinicaId: string) {
    let parametros = new HttpParams().set("primeiroDiaMes", primeiroDiaMes).set("dataHoje", dataHoje).set("medicoId", medicoId).set("caixaId", caixaId).set("funcionarioId", funcionarioId).set("clinicaId", clinicaId);
    console.log(parametros);
    return this.http.get<Array<Agendamento>>(this.accessPointUrl + "todosPorPeriodo?" + parametros);

  }

  procedimentosRealizados(dataInicio: any, dataFim: any, medicoId: string) {
    let parametros = new HttpParams().set("dataInicio", dataInicio).set("dataFim", dataFim).set("medicoId", medicoId);
    return this.http.get<Agendamento[]>(this.accessPointUrl + "procedimentosRealizados?" + parametros);
  }

  public Excluir(agendamentoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + agendamentoId);
  }

  buscarUltimoAgendamentoPaciente(pacienteId: string, agendamentoId: string) {
    let parametros = new HttpParams().set("pacienteId", pacienteId).set("agendamentoId", agendamentoId);

    return this.http.get<Agendamento>(this.accessPointUrl + "buscarUltimoAgendamentoPaciente?" + parametros);
  }

  public retornarOperacaoAgendamento(agendamento: Agendamento, exames: Array<Exame>,
    cirurgias: Array<Cirurgia>, procedimentos: Array<Procedimento>): string {

    if (!this.util.isNullOrWhitespace(agendamento.exameId)) {
      if (!this.util.hasItems(exames)) {
        this.exameService.buscarPorId(agendamento.exameId).subscribe(exame => {
          return exame.descricao;
        });
      }
      else {
        var exame = exames.find(c => c.id == agendamento.exameId);
        if (exame != null)
          return exame.descricao;
      }
    }
    else if (!this.util.isNullOrWhitespace(agendamento.cirurgiaId)) {
      if (!this.util.hasItems(cirurgias)) {
        this.cirurgiaService.buscarPorId(agendamento.cirurgiaId).subscribe(cirurgia => {
          return cirurgia.descricao;
        });
      }
      else {
        var cirurgia = cirurgias.find(c => c.id == agendamento.cirurgiaId);
        if (cirurgia != null)
          return cirurgia.descricao;
      }
    }
    else if (!this.util.isNullOrWhitespace(agendamento.procedimentoId)) {
      if (!this.util.hasItems(procedimentos)) {
        this.procedimentoService.buscarPorId(agendamento.procedimentoId).subscribe(procedimento => {
          return procedimento.descricao;
        });
      }
      else {
        var procedimento = procedimentos.find(c => c.id == agendamento.procedimentoId);
        if (procedimento != null)
          return procedimento.descricao;
      }
    }
    else {
      return ETipoAgendamento[agendamento.tipoAgendamento];
    }
  }

  public tratarCorAgendamento(agendamento: Agendamento, exames: Array<Exame>,
    cirurgias: Array<Cirurgia>, procedimentos: Array<Procedimento>) {

    if (agendamento.situacaoAgendamento == ESituacaoAgendamento["Em Atendimento"]) {
      agendamento.corFundo = "#006600";
      agendamento.corLetra = "#006600";
    }
    else if (agendamento.situacaoAgendamento == ESituacaoAgendamento["Finalizado"]) {
      agendamento.corFundo = "#003200";
      agendamento.corLetra = "#003200";
    }
    else {
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
    }
    return agendamento;
  }

  calcularTempoMedio(agendamentos: Array<Agendamento>) {

    let somaMinutos = 0;
    agendamentos.forEach(agenda => {

      var horasMinutosInicialAgendamento = this.util.converteHorarioParaMinutos(agenda.horaInicial);
      var horasMinutosFinalAgendamento = this.util.converteHorarioParaMinutos(agenda.horaFinal);
      somaMinutos = somaMinutos + horasMinutosFinalAgendamento - horasMinutosInicialAgendamento;
    })
    var media = parseFloat((somaMinutos / agendamentos.length).toFixed(2));
    var minutos = Math.floor(media);
    var segundos = 60 * (media - minutos);
    return minutos + ":" + ("0" + segundos.toFixed(0)).slice(-2);
  }


  imprimirResumoAgendamentos(agendamentos: Agendamento[]) {

    if (agendamentos != null && this.util.hasItems(agendamentos)) {

      let descricao =
        '<!DOCTYPE html>                                                                                                      ' +
        '<html>                                                                                                               ' +
        '<head>                                                                                                               ' +
        '    <title>Recibo</title>                                                                                            ' +
        '    <meta charset="utf-8">                                                                                           ' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1">                                             ' +
        '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">             ' +
        '    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>                         ' +
        '    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>                ' +
        '    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>                      ' +

        '<style>                           ' +
        'table {                           ' +
        '  font-family: arial, sans-serif; ' +
        '  border-collapse: collapse;      ' +
        '  width: 100%;                    ' +
        '}                                 ' +
        '                                  ' +
        'td, th {                          ' +
        '  border: 1px solid #dddddd;      ' +
        '  text-align: left;               ' +
        '  padding: 8px;                   ' +
        '}                                 ' +
        '                                  ' +
        'tr:nth-child(even) {              ' +
        '  background-color: #dddddd;      ' +
        '}                                 ' +
        '</style>                          ' +

        '</head>                                                                                                              ' +
        '<body>                                                                                                               ' +
        '<table>                 ' +
        '  <tr>                  ' +
        '    <th>Data</th>       ' +
        '    <th>Médico</th>     ' +
        '    <th>Paciente</th>   ' +
        '    <th>Descrição</th>  ' +
        '    <th>Valor</th>      ' +
        '  </tr>                 ' ;
        

        let somaTodos= 0;
        agendamentos.forEach(agendamento => {

          let soma = 0;
          if (agendamento.pagamentos != null && this.util.hasItems(agendamento.pagamentos)) {
            agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));            
          }
          somaTodos = somaTodos + soma;
          

          descricao = descricao +
          '  <tr>                  ' +
          '    <td>' + this.util.dataParaString(agendamento.dataAgendamento) + '</td> ' +
          '    <td>' + agendamento.medico.nomeCompleto.toUpperCase() + '</td> ' +
          '    <td>' + agendamento.paciente.nomeCompleto.toUpperCase() + '</td> ' +
          '    <td>' + agendamento.tipoAgendamentoDescricao.toUpperCase() + '</td> ' +
          '    <td>' + this.util.formatarDecimal(soma) + '</td>     ' +
          '  </tr>                 ' ;

        });

        descricao = descricao + 
        '  <tr>                  ' +
        '    <td></td>       ' +                
        '    <td></td>       ' +                
        '    <td></td>  ' +
        '    <td>VALOR TOTAL: </td>  ' +
        '    <td>' + this.util.formatarDecimalBlur(somaTodos) + '</td>' +
        '  </tr>                 ' ;        
        '</table>                ' +
        '</body>' +
        '</html>';
        
      return descricao;

    }
  }
} 
