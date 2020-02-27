import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Util } from '../../uteis/Util';
import { AgendamentoPagamentoService } from '../../services/agendamentoPagamento.service';

@Component({
    template: `<button class="btn btn-rounded btn-adicionarPagamento" (click)="adicionarPagamento()"><i class="fa fa-money"></i> Adicionar Pagamento</button>`,
    styleUrls: ['./botao-adicionar-pagamento-component.css'],

})
export class BotaoAdicionarPagamentoComponent implements OnInit {

    public agendamentoId: string;
    util = new Util();

    @Input() value: string;
    @Input() rowData: any;

    @Output() save: EventEmitter<any> = new EventEmitter();

    constructor(private agendamentoPagamentoService: AgendamentoPagamentoService) { }

    ngOnInit() {
        this.agendamentoId = this.value;
    }

    adicionarPagamento() {
        this.save.emit(this.agendamentoId);
    }


}