import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Paciente } from '../modelos/paciente';

@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'timeline/';
  public pacienteId:string;
  public paciente:Paciente;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

}
