import { Component, Input, OnInit } from '@angular/core';
import { Util } from '../../uteis/Util';
import { AgendamentoPagamentoService } from '../../services/agendamentoPagamento.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { Agendamento } from '../../modelos/agendamento';

@Component({
    template: `<button class="btn btn-rounded btn-secondary" (click)="imprimirResumo()"><i class="fa fa-print"></i> Imprimir Resumo</button>`,
    styleUrls: ['./botao-imprimir-component.css'],

})
export class BotaoImprimirAgendamentoMedicosComponent implements OnInit {

    public agendamentos: Agendamento[];
    util = new Util();

    @Input() value: Agendamento[];
    @Input() rowData: any;

    constructor(private agendamentoPagamentoService: AgendamentoPagamentoService, private agendamentoService: AgendamentoService) { }

    ngOnInit() {
        this.agendamentos = this.value;
    }

    imprimirResumo() {

        console.log(this.agendamentos);

        var descricao = this.agendamentoService.imprimirResumoAgendamentos(this.agendamentos);

        let popupWinindow;
        popupWinindow = window.open('', '_blank', 'width=800,height=500,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /><title>Recibo</title></head><body onload="window.print()">' + descricao + '</html>');
        popupWinindow.document.close();


    }
}