import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { AppService } from '../services/app.service'
import { Util } from '../uteis/Util';
import { UploadService } from '../services/upload.service';
import { forkJoin } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../modelos/paciente';
import { AgendamentoService } from '../services/agendamento.service';


@Component({
  selector: 'app-modal-acoes-agendamento.component',
  templateUrl: './modal-acoes-agendamento.component.html',
  styleUrls: ["./modal-acoes-agendamento.component.css"]
})

export class ModalAcoesAgendamentoComponent implements OnInit {

  acoesPermitidas: Array<string> = [];
  isSpinnerVisible: boolean;
  agendamento: Agendamento;
  paciente: Paciente = new Paciente();
  util = new Util();
  horario: string;
  fotoPaciente: any = '../../../assets/images/fotoCadastro.jpg';
  telefone: string;
  descricaoData: string;
  mensagemUltimoAgendamento: string;
  ultimoAgendamentoCancelado: boolean;

  constructor(public activeModal: NgbActiveModal, private pacienteService: PacienteService, private agendamentoService: AgendamentoService, private appService: AppService, private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.agendamento != null) {
      this.isSpinnerVisible = true;

      this.buscarModelos().subscribe(c => {

        if (!this.util.isNullOrWhitespace(this.paciente.fotoId)) {
          this.uploadService.downloadImagem(this.paciente.id, "paciente").subscribe(byte => {
            this.fotoPaciente = "data:image/jpeg;base64," + byte['value'];
            this.isSpinnerVisible = false;
          });
        }
        else { this.isSpinnerVisible = false; }

      })

      this.tratarAcoesPermitidas();

      this.descricaoData = this.util.retornaDiaSemana(this.agendamento.dataAgendamento) + ", " +
        new Date(this.agendamento.dataAgendamento).getDate() + " de " + this.util.retornarMes(this.agendamento.dataAgendamento);

      this.horario = this.agendamento.horaInicial.substring(0, 2) + ":" + this.agendamento.horaInicial.substring(2, 4) + " até " +
        this.agendamento.horaFinal.substring(0, 2) + ":" + this.agendamento.horaFinal.substring(2, 4) + " - " +
        ESituacaoAgendamento[this.agendamento.situacaoAgendamento].toUpperCase();
    }


  }

  buscarModelos() {

    let requisicoes = [];

    if (!this.util.isNullOrWhitespace(this.agendamento.pacienteId)) {
      let reqPaciente = this.pacienteService.buscarPorId(this.agendamento.pacienteId).map(paciente => {
        this.paciente = paciente;
        this.agendamento.paciente = paciente;
        this.telefone = paciente.telefone || paciente.celular ? this.util.formataTelefone(paciente.telefone) + " / " + this.util.formataTelefone(paciente.celular) : "-";
      });
      requisicoes.push(reqPaciente);


      let reqUltimoAgendamento = this.agendamentoService.buscarUltimoAgendamentoPaciente(this.agendamento.pacienteId, this.agendamento.id).map(ultimoAgendamento => {
        if (ultimoAgendamento != null) {
          this.ultimoAgendamentoCancelado = ultimoAgendamento.situacaoAgendamento == ESituacaoAgendamento.Cancelado;

          this.mensagemUltimoAgendamento = "Último agendamento em " + this.util.dataParaString(ultimoAgendamento.dataAgendamento) +
            " | Situação: " + ESituacaoAgendamento[ultimoAgendamento.situacaoAgendamento];

          if (ultimoAgendamento.contemPagamentos) {
            var soma = 0;
            ultimoAgendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));

            this.mensagemUltimoAgendamento = this.mensagemUltimoAgendamento + " | Valor: " + this.util.formatarDecimalBlur(soma);
          }
        }
      });
      requisicoes.push(reqUltimoAgendamento);
    }

    return forkJoin(requisicoes);
  }

  validarBotoesAcoes(acao: string) {
    return this.acoesPermitidas.find(c => c.toUpperCase() == acao.toUpperCase()) != null;
  }

  fechar(acao: string) {
    this.activeModal.close(acao);
  }

  tratarAcoesPermitidas() {
    this.acoesPermitidas = [];

    if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {

      var usuario = this.appService.retornarUsuarioCorrente();

      this.acoesPermitidas.push("Encaixar");
      this.acoesPermitidas.push("Detalhes");

      switch (this.agendamento.situacaoAgendamento) {
        case (ESituacaoAgendamento.Agendado.valueOf()):
          {
            if (!this.util.isNullOrWhitespace(usuario.medicoId))
              this.acoesPermitidas.push("IniciarAtendimento");

            this.acoesPermitidas.push("Confirmar");
            this.acoesPermitidas.push("Pagar");
            this.acoesPermitidas.push("Editar");
            this.acoesPermitidas.push("Cancelar");
            this.acoesPermitidas.push("Excluir");

            break;
          }
        case (ESituacaoAgendamento.Cancelado.valueOf()):
          {
            this.acoesPermitidas.push("Excluir");
            break;
          }
        case (ESituacaoAgendamento.Confirmado.valueOf()):
          {

            if (!this.util.isNullOrWhitespace(usuario.medicoId))
              this.acoesPermitidas.push("IniciarAtendimento");

            this.acoesPermitidas.push("Pagar");
            this.acoesPermitidas.push("Editar");
            this.acoesPermitidas.push("Cancelar");
            this.acoesPermitidas.push("Excluir");
            break;
          }
        case (ESituacaoAgendamento["Pago"].valueOf()):
          {
            if (!this.util.isNullOrWhitespace(usuario.medicoId))
              this.acoesPermitidas.push("IniciarAtendimento");

            this.acoesPermitidas.push("Editar");
            this.acoesPermitidas.push("Pagar");
            break;
          }
      }
    }
    else {

      this.acoesPermitidas.push("Editar");
      this.acoesPermitidas.push("Excluir");
    }

  }

}