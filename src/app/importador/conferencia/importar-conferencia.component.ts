import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload/ng2-file-upload';

import { HttpClient } from '@angular/common/http'
import { UploadService } from '../../services/upload.service';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';

const URL = environment.apiUrl + 'upload/';

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

  constructor(private http: HttpClient, private uploadService: UploadService, public router: Router) {
    this.uploader = new FileUploader({
      url: URL,
      allowedFileType: ["pdf"],
      method: 'post',
      itemAlias: 'attachment'

    });
    
    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      environment.isLoading = false;
      this.dadosRelatorio = response;
    };

    this.uploader.onCompleteAll = () => {

      this.uploadService.ArmazenaDados(this.dadosRelatorio);
      this.router.navigate(["relatorio/relatoriounimed"]);
    }
  }
  
  hasBaseDropZoneOver = false;

  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}

