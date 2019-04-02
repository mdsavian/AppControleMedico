import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Especialidade } from '../modelos/especialidade'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'especialidade/';

  public especialidade:Especialidade;
  public listaEspecialidade :Array<Especialidade>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Especialidade>>(this.accessPointUrl);
  }
  
  public salvar(especialidade: Especialidade) {
    return this.http.post<Especialidade>(this.accessPointUrl, especialidade);
  }

  public buscarPorId(especialidadeId: string) {
    return this.http.get<Especialidade>(this.accessPointUrl + "buscarPorId/" + especialidadeId);
  }

  public Excluir(especialidadeId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + especialidadeId);
  }

}
