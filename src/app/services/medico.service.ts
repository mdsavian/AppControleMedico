import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../modelos/medico';
import { Usuario } from '../modelos/usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  public medico:Medico;
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'medico/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public salvar(medico: Medico) {
    return this.http.post<Medico>(this.accessPointUrl, medico);
  }

  public buscarPorId(medicoId: string) {
    return this.http.get<Medico>(this.accessPointUrl + "buscarPorId/" + medicoId);

  }

  public Todos() {
    return this.http.get<Array<Medico>>(this.accessPointUrl);
  }

  public Excluir(medicoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + medicoId);
  }

  buscarMedicoUsuario(usuario:Usuario): any {
    return this.http.post<Medico>(this.accessPointUrl + "buscarMedicoUsuario/", usuario);
    
  }

}
