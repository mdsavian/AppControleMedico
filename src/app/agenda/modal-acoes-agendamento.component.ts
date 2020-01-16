import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { AppService } from '../services/app.service'
import { Util } from '../uteis/Util';


@Component({
  selector: 'app-modal-acoes-agendamento.component',
  templateUrl: './modal-acoes-agendamento.component.html',
  styleUrls: ["./modal-acoes-agendamento.component.css"]
})

export class ModalAcoesAgendamentoComponent implements OnInit {

  acoesPermitidas: Array<string> = [];
  agendamento: Agendamento;
  util = new Util();
  constructor(public activeModal: NgbActiveModal, private appService: AppService) {
  }

  ngOnInit(): void {
    if (this.agendamento != null)
      this.tratarAcoesPermitidas();
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