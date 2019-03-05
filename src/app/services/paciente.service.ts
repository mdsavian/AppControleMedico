import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Paciente} from '../modelos/paciente'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'paciente/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public salvar(paciente:Paciente){
     console.log("opa cheguei");
    return this.http.post<Paciente>(this.accessPointUrl, paciente).pipe(map(paciente => {
      console.log("chegoou : " + paciente);
      return paciente;
    }));    
   }

   public buscarTodos(){
    return this.http.get(this.accessPointUrl);
  }

}
