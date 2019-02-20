import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44307/api/medico';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public salvar(medico) {
    return this.http.post(this.accessPointUrl + '/' + medico, {headers: this.headers});

  }


}
