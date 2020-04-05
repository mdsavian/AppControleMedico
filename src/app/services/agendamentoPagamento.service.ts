import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AgendamentoPagamento } from '../modelos/agendamentoPagamento';
import { Agendamento } from '../modelos/agendamento';
import { Util } from '../uteis/Util';
import { ClinicaService } from './clinica.service';
import { AppService } from './app.service';
import { MedicoService } from './medico.service';
import { AgendamentoService } from './agendamento.service';
import { Paciente } from '../modelos/paciente';
import { PacienteService } from './paciente.service';
import { forkJoin } from 'rxjs';
import { Medico } from '../modelos/medico';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoPagamentoService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'agendamentoPagamento/';
  util = new Util();
  constructor(private http: HttpClient, private clinicaService: ClinicaService, private agendamentoService: AgendamentoService, private pacienteService: PacienteService, private medicoService: MedicoService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  imprimirRecibo(agendamento: Agendamento) {

    if (agendamento != null && agendamento.contemPagamentos && agendamento.medico != null && agendamento.paciente != null) {

      var paciente = agendamento.paciente;
      var medico = agendamento.medico;
      var clinica = agendamento.clinica;

      var nomeMedico = "";
      var descricaoMedico = ""

      nomeMedico = medico.nomeCompleto;
      descricaoMedico = "CRM " + (!this.util.isNullOrWhitespace(medico.crm) ? medico.crm : "-") + " | CPF " + (!this.util.isNullOrWhitespace(medico.cpfCnpj) ? medico.cpfCnpj : "-");

      var enderecoClinica = "";

      if (!this.util.isNullOrWhitespace(clinica.endereco)) {
        enderecoClinica = clinica.endereco + (!this.util.isNullOrWhitespace(clinica.numero) ? ", " + clinica.numero : "")
          + (!this.util.isNullOrWhitespace(clinica.cep) ? " | " + this.util.formatarCep(clinica.cep) : "")
          + (!this.util.isNullOrWhitespace(clinica.bairro) ? " | " + clinica.bairro : "")
          + (!this.util.isNullOrWhitespace(clinica.cidade) ? " | " + clinica.cidade : "")
          + (!this.util.isNullOrWhitespace(clinica.uf) ? " | " + clinica.uf : "")
      }

      if (!this.util.isNullOrWhitespace(clinica.telefone))
        enderecoClinica = enderecoClinica + " | Fone: " + this.util.formataTelefone(clinica.telefone);

      console.log(enderecoClinica);

      var total = 0;

      agendamento.pagamentos.forEach(c => {
        total = total + (parseFloat(c.valor.toString()) * c.parcela);
      });

      var valorTotal = this.util.formatarDecimalBlur(total);
      var descricaoAgendamento = agendamento.tipoAgendamentoDescricao;
      var dataHoje = new Date();
      var descricaoData = this.util.retornaDiaSemana(dataHoje) + ", " + dataHoje.getDate() + " de " + this.util.retornarMes(dataHoje) + " de " + dataHoje.getFullYear();

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
        '</head>                                                                                                              ' +
        '<body>                                                                                                               ' +
        '    <div style="border-style: solid; padding:5px">                                                                   ' +
        '        <h1 style="margin:0px">' + nomeMedico.toUpperCase() + '</h1>                                                 ' +
        '        <p style="margin:5px 0px 5px 0px">                                                                           ' +
        descricaoMedico +
        '            <br>                                                                                                     ' +
        '        </p>                                                                                                         ' +
        '        <div style="border-bottom-style:double; padding:0px"></div>                                                  ' +
        '        <p style="margin:5px 0px 5px 0px">                                                                           ' +
        enderecoClinica +
        '        </p>                                                                                                         ' +
        '        <h2 style="margin:15px 0px 15px 0px; text-align:right;">VALOR: R$ ' + valorTotal + ' </h2>                   ' +
        '        <p>                                                                                                          ' +
        ' Recebi(emos) de ' + paciente.nomeCompleto.toUpperCase() + ', inscrito no CPF ' + this.util.formataCpf(paciente.cpfCnpj) +
        ', a quantia de R$ ' + valorTotal + '. <br> Referente a ' + descricaoAgendamento.toUpperCase() + '.' +
        '            <br>                                                                                                     ' +
        '        </p>                                                                                                         ' +
        '        <h5 style="margin:15px 0px 15px 0px; text-align:left;">' + descricaoData + '.</h5>                             ' +
        '        <br>                                                                                                         ' +
        '        <br>                                                                                                         ' +
        '        <div style="border-bottom-style:dashed;margin:0px 15px 0px 15px;"></div>                                     ' +
        '        <h5 style="margin:15px 0px 15px 0px; text-align:center;">Assinatura </h5>                                    ' +
        '</body>                                                                                                              ' +
        '</html>                                                                                                              ';
      return descricao;

    }
  }
}

