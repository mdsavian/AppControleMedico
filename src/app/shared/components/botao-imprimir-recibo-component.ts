import { Component, Input, OnInit } from '@angular/core';
import { Util } from '../../uteis/Util';
import { AgendamentoPagamentoService } from '../../services/agendamentoPagamento.service';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
    template: `<button class="btn btn-rounded btn-secondary" (click)="imprimirRecibo()"><i class="fa fa-print"></i> Imprimir Recibo</button>`,
    styleUrls: ['./botao-imprimir-component.css'],

})
export class BotaoImprimirReciboComponent implements OnInit {

    public agendamentoId: string;
    util = new Util();

    @Input() value: string;
    @Input() rowData: any;

    constructor(private agendamentoPagamentoService: AgendamentoPagamentoService, private agendamentoService:AgendamentoService) { }

    ngOnInit() {
        this.agendamentoId = this.value;
    }

    imprimirRecibo() {
        
        this.agendamentoService.buscarPorId(this.agendamentoId).subscribe(agendamento=>
            {
                console.log(agendamento);
                var descricao = this.agendamentoPagamentoService.imprimirRecibo(agendamento);

                let popupWinindow;
                popupWinindow = window.open('', '_blank', 'width=800,height=500,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
                popupWinindow.document.open();
                popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /><title>Recibo</title></head><body onload="window.print()">' + descricao + '</html>');
                popupWinindow.document.close();
            });
        
    }
}