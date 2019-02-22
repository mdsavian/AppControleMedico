import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConvenioMedico } from '../modelos/convenioMedico';

@Injectable({
  providedIn: 'root'
})

export class ConvenioMedicoService {

    private headers: HttpHeaders;
    private accessPointUrl: string = 'https://localhost:44307/api/convenio';
  
    constructor(private http: HttpClient) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
     }
  
     public salvar(convenio:ConvenioMedico) {  
      return this.http.post<ConvenioMedico>(this.accessPointUrl, convenio);
    }

    public Todos()
    {
        return this.http.get<ConvenioMedico[]>(this.accessPointUrl);
    }

    public ConvenioMedico(medicoId:string)
    {
        return this.http.get<ConvenioMedico[]>(this.accessPointUrl + "/medicoId=" + medicoId);
    }
  
}
