import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Convenio } from '../modelos/convenio';

@Injectable({
  providedIn: 'root'
})

export class ConvenioService {

    private headers: HttpHeaders;
    private baseUrl:string;
    private accessPointUrl: string = this.baseUrl + 'convenio/';
  
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl:string) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
      this.baseUrl = baseUrl;
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
