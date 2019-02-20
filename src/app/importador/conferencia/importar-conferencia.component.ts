import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http'
import { DadosRelatorioUnimed } from '../../modelos/dados_relatorio_unimed';
import { ImportadorService } from '../../services/importador.service';
import { Router } from '@angular/router';
import { classToPlain, plainToClass } from "class-transformer";

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
  public dadosRelatorio: string;

  constructor(private http: HttpClient, private importadorService: ImportadorService, public router: Router) {
    this.uploader = new FileUploader({
      url: URL,
      allowedFileType: ["pdf"],
      method: 'post',
      itemAlias: 'attachment'

    });
    
    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      
      this.dadosRelatorio = response;
    };
    this.uploader.onCompleteAll = () => {
      console.log("eitchaaa");
      console.log(this.dadosRelatorio);
      this.importadorService.ArmazenaDados(this.dadosRelatorio);
      this.router.navigate(["relatorio/relatoriounimed"]);
      console.log("armazenado dados");
    }
  }
  
  hasBaseDropZoneOver = false;

  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}

