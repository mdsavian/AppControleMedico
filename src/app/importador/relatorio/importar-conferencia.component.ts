import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'

const URL = 'https://localhost:44307/api/upload/';
@Component({
  templateUrl: './importar-conferencia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./importar-conferencia.scss']
})
export class ImportarConferenciaComponent {

  public progress: number;
  public message: string;
  constructor(private http: HttpClient) { }

  uploader: FileUploader = new FileUploader({
    url: URL,
    allowedFileType: ["pdf"]
  });
  hasBaseDropZoneOver = false;

  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
