import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Convenio } from '../modelos/convenio';

@Injectable({
  providedIn: 'root'
})

export class ConvenioService {

    private headers: HttpHeaders;
    private accessPointUrl: string = 'https://localhost:44307/api/convenio/';
  
    constructor(private http: HttpClient) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
     }
  
     public salvar(convenio:Convenio) {  
      return this.http.post<Convenio>(this.accessPointUrl, convenio);
    }

    public Todos()
    {
        return this.http.get<Convenio[]>(this.accessPointUrl);
    }

    public TodosFiltrandoMedico(medicoId:string)
    {
        return this.http.get<Convenio[]>(this.accessPointUrl + "TodosFiltrandoMedico/" + medicoId);
    }
  
}
