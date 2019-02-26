import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../modelos/medico';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44307/api/medico';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public salvar(medico:Medico) {

    return this.http.post<Medico>(this.accessPointUrl, medico);
  }

  public buscarPorId(medicoId:string) {

    return this.http.get<Medico>(this.accessPointUrl + "/buscarPorId/" + medicoId);
  }

  public Todos() 
  {
    return this.http.get<Array<Medico>>(this.accessPointUrl);
  }

  //  public salvar(medico) {
  //   return this.http.post(this.accessPointUrl + '/' + medico, {headers: this.headers});

  // }


}
