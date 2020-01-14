import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { Agendamento } from '../modelos/agendamento';


@Component({
  selector: 'app-modal-acoes-agendamento.component',
  templateUrl: './modal-acoes-agendamento.component.html',
  styleUrls: ["./modal-acoes-agendamento.component.css"]
})

export class ModalAcoesAgendamentoComponent implements OnInit {

  acoesPermitidas: Array<string> = [];
  agendamento: Agendamento;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    if (this.agendamento != null)
      this.tratarAcoesPermitidas();
  }

  validarBotoesAcoes(acao: string) {
    return this.acoesPermitidas.find(c => c == acao.toUpperCase()) != null;
  }

  fechar(acao: string) {
    this.activeModal.close(acao);
  }

  tratarAcoesPermitidas() {
    this.acoesPermitidas = [];

    if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {

      this.acoesPermitidas.push("ENCAIXAR");
      this.acoesPermitidas.push("DETALHES");

      switch (this.agendamento.situacaoAgendamento) {
        case (ESituacaoAgendamento.Agendado.valueOf()):
          {
            this.acoesPermitidas.push("CONFIRMAR");
            this.acoesPermitidas.push("PAGAR");
            this.acoesPermitidas.push("EDITAR");
            this.acoesPermitidas.push("CANCELAR");
            this.acoesPermitidas.push("EXCLUIR");
            break;
          }
        case (ESituacaoAgendamento.Cancelado.valueOf()):
          {
            this.acoesPermitidas.push("EXCLUIR");
            break;
          }
        case (ESituacaoAgendamento.Confirmado.valueOf()):
          {
            this.acoesPermitidas.push("PAGAR");
            this.acoesPermitidas.push("EDITAR");
            this.acoesPermitidas.push("CANCELAR");
            this.acoesPermitidas.push("EXCLUIR");
            break;
          }
        case (ESituacaoAgendamento["Pago"].valueOf()):
          {
            this.acoesPermitidas.push("EDITAR");
            this.acoesPermitidas.push("PAGAR");
            break;
          }
      }
    }
    else {

      this.acoesPermitidas.push("EDITAR");
      this.acoesPermitidas.push("EXCLUIR");
    }

  }

}