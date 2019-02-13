import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http'
import { DadosRelatorioUnimed } from '../../modelos/dados_relatorio_unimed';

const URL = 'https://localhost:44307/api/upload/';
@Component({
  templateUrl: './importar-conferencia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./importar-conferencia.scss']
})
export class ImportarConferenciaComponent {

  public progress: number;
  public message: string;
  public uploader: FileUploader;
  public dadosRelatorio : DadosRelatorioUnimed[];

  constructor(private http: HttpClient) {

    this.uploader = new FileUploader({
      url: URL,
      allowedFileType: ["pdf"],
      method: 'post',
      itemAlias: 'attachment'
      
    });

    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      
           
      console.log(JSON.parse(response));
      this.dadosRelatorio = JSON.parse(response);
    };
    this.uploader.onCompleteAll = () =>
    {
      console.log("eitchaaa");
      console.log(this.dadosRelatorio);
    }
  }


  hasBaseDropZoneOver = false;

  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}

