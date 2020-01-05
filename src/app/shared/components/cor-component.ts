import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    template: `
    <input type="text" [ngStyle]="{'background-color': cor}" readonly size="10">
  `,
})
export class CorComponent implements ViewCell, OnInit {

    cor: string;

    @Input() value: string;
    @Input() rowData: any;

    ngOnInit() {
        this.cor = this.value;
    }

}