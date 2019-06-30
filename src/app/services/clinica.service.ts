import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clinica } from '../modelos/clinica'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'clinica/';

  public clinica:Clinica;
  public listaClinica :Array<Clinica>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Clinica>>(this.accessPointUrl);
  }
  
  public salvar(clinica: Clinica) {
    return this.http.post<Clinica>(this.accessPointUrl, clinica);
  }

  public buscarPorId(clinicaId: string) {
    return this.http.get<Clinica>(this.accessPointUrl + "buscarPorId/" + clinicaId);
  }

  public Excluir(clinicaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + clinicaId);
  }

}
