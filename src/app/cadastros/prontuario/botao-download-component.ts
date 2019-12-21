import { Component, Input, OnInit } from '@angular/core';
import { ProntuarioService } from '../../services/prontuario.service';
import { saveAs } from "file-saver";
import { Util } from '../../uteis/Util';

@Component({
    template: `<button class="btn btn-rounded btn-download" (click)="downloadArquivo()"><i class="fa fa-download"></i> Download</button>`,
    styleUrls: ['./botao-download-component.css'],

})
export class BotaoDownloadComponent implements OnInit {

    public idArquivo: string;
    util = new Util();

    @Input() value: string;
    @Input() rowData: any;

    constructor(private prontuarioService: ProntuarioService) { }

    ngOnInit() {
        this.idArquivo = this.value;
    }

    downloadArquivo() {

        this.prontuarioService.downloadArquivo(this.idArquivo).subscribe(byte => {
            var arquivo = this.prontuarioService.prontuario.anexos.find(c => c.id == this.idArquivo);

            if (byte != null) {
                var blob = this.util.base64ParaBlob(byte, arquivo.contentType);
                saveAs(blob, arquivo.nomeArquivo + "." + arquivo.extensaoArquivo);
            }
        });

    }


}