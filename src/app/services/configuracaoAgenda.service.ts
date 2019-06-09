import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracaoAgenda } from '../modelos/configuracaoAgenda';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfiguracaoAgendaService {

  listaConfiguracaoAgenda : Array<ConfiguracaoAgenda>;
  configuracaoAgenda:ConfiguracaoAgenda;

  public buscarMedicosPorConfiguracaoAgenda(configuracaoAgendaId: string): any {
    return this.http.get<ConfiguracaoAgenda>(this.accessPointUrl + "buscarMedicosPorConfiguracaoAgenda/" + configuracaoAgendaId);
  }

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'configuracaoAgenda/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public salvar(configuracaoAgenda: ConfiguracaoAgenda) {
    return this.http.post<ConfiguracaoAgenda>(this.accessPointUrl, configuracaoAgenda, { headers: this.headers }); 
  }

  public buscarPorId(configuracaoAgendaId: string) {
    return this.http.get<ConfiguracaoAgenda>(this.accessPointUrl + "buscarPorId/" + configuracaoAgendaId);
  }

  public Todos() {    
    return this.http.get<ConfiguracaoAgenda[]>(this.accessPointUrl);
  }

  public TodosFiltrandoMedico(medicoId: string) {
    return this.http.get<ConfiguracaoAgenda[]>(this.accessPointUrl + "TodosFiltrandoMedico/" + medicoId);
  }

  public Excluir(configuracaoAgendaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + configuracaoAgendaId);
  }

}
