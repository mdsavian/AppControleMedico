import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prontuario } from '../modelos/prontuario'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'prontuario/';

  public prontuario:Prontuario;
  public pacienteId:string;
  public listaProntuario :Array<Prontuario>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Prontuario>>(this.accessPointUrl);
  }
  
  public salvar(prontuario: Prontuario) {
    return this.http.post<Prontuario>(this.accessPointUrl, prontuario);
  }

  public buscarPorId(prontuarioId: string) {
    return this.http.get<Prontuario>(this.accessPointUrl + "buscarPorId/" + prontuarioId);
  }

  public buscarPorPaciente(pacienteId: string) {
    return this.http.get<Prontuario>(this.accessPointUrl + "buscarPorPaciente/" + pacienteId);
  }

  public Excluir(prontuarioId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + prontuarioId);
  }

}
