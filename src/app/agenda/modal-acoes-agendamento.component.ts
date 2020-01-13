import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { Agendamento } from '../modelos/agendamento';


@Component({
  selector: 'app-modal-acoes-agendamento.component',
  templateUrl: './modal-acoes-agendamento.component.html',
  styleUrls: ["./styles.css"]
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

  fechar(acao:string)
  {
    this.activeModal.close(acao);
  }

  tratarAcoesPermitidas() {
    this.acoesPermitidas = [];
    if (this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {
      switch (this.agendamento.situacaoAgendamento) {
        case (ESituacaoAgendamento.Agendado.valueOf()):
          {
            this.acoesPermitidas.push("CONFIRMAR");
            this.acoesPermitidas.push("PAGAR/FINALIZAR");
            this.acoesPermitidas.push("EDITAR");
            this.acoesPermitidas.push("CANCELAR");
            this.acoesPermitidas.push("EXCLUIR");
            this.acoesPermitidas.push("DETALHES");
            break;
          }
        case (ESituacaoAgendamento.Cancelado.valueOf()):
          {            
            this.acoesPermitidas.push("DETALHES");
            this.acoesPermitidas.push("EXCLUIR");
            break;
          }
        case (ESituacaoAgendamento.Confirmado.valueOf()):
          {
            this.acoesPermitidas.push("PAGAR/FINALIZAR");
            this.acoesPermitidas.push("DETALHES");
            this.acoesPermitidas.push("EDITAR");
            this.acoesPermitidas.push("CANCELAR");
            this.acoesPermitidas.push("EXCLUIR");
            break;
          }
        case (ESituacaoAgendamento["Pago/Finalizado"].valueOf()):
          {
            this.acoesPermitidas.push("DETALHES");
            break;
          }
      }
    }
    else {
      this.acoesPermitidas.push("DETALHES");
      this.acoesPermitidas.push("EDITAR");
      this.acoesPermitidas.push("EXCLUIR");
    }

  }

}