import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Paciente} from '../modelos/paciente'
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

   public Todos(){
    return this.http.get<Array<Paciente>>(this.accessPointUrl);
  }

  public salvar(paciente: Paciente) {
    console.log("entrei salvar ", paciente);
    return this.http.post<Paciente>(this.accessPointUrl, paciente);
  }

  public buscarPorId(pacienteId: string) {
    return this.http.get<Paciente>(this.accessPointUrl + "buscarPorId/" + pacienteId);
  }

  public Excluir(pacienteId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + pacienteId);
  }

}
