import { Component, Input, OnInit } from '@angular/core';
import { PrescricaoPacienteService } from '../../services/prescricaoPaciente.service';
import { Util } from '../../uteis/Util';

@Component({
    template: `<button class="btn btn-rounded btn-imprimir" (click)="imprimirArquivo()"><i class="fa fa-print"></i> Imprimir</button>`,
    styleUrls: ['./botao-imprimir-component.css'],

})
export class BotaoImprimirComponent implements OnInit {

    public idArquivo: string;
    util = new Util();

    @Input() value: string;
    @Input() rowData: any;

    constructor(private prescricaoPacienteService: PrescricaoPacienteService) { }

    ngOnInit() {
        this.idArquivo = this.value;
    }

    imprimirArquivo() {

        var prescricao = this.prescricaoPacienteService.listaPrescricaoPaciente.find(c => c.id == this.idArquivo);

        if (prescricao != null) {
            let popupWinindow;
            popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWinindow.document.open();
            popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + prescricao.descricao + '</html>');
            popupWinindow.document.close();
        }
    }


}