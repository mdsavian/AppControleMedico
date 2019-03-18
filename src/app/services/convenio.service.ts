import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Convenio } from '../modelos/convenio';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConvenioService {
  
  public buscarMedicosPorConvenio(convenioId: string): any {
    return this.http.get<Convenio>(this.accessPointUrl + "buscarMedicosPorConvenio/" + convenioId);
  }

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'convenio/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public salvar(convenio: Convenio) {
    return this.http.post<Convenio>(this.accessPointUrl, convenio, {headers: this.headers});
  }

  public buscarPorId(convenioId: string) {
    return this.http.get<Convenio>(this.accessPointUrl + "buscarPorId/" + convenioId);
  }

  public Todos() {
    return this.http.get<Convenio[]>(this.accessPointUrl);
  }

  public TodosFiltrandoMedico(medicoId: string) {
    return this.http.get<Convenio[]>(this.accessPointUrl + "TodosFiltrandoMedico/" + medicoId);
  }

  public Excluir(convenioId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + convenioId);
  }

}
