import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfiguracaoAgenda } from '../modelos/configuracaoAgenda';
import { environment } from '../../environments/environment';
import { EConfiguracaoMinutosAgenda } from '../enums/EConfiguracaoMinutosAgenda';

@Injectable({
  providedIn: 'root'
})

export class ConfiguracaoAgendaService {

  listaConfiguracaoAgenda : Array<ConfiguracaoAgenda>;
  configuracaoAgenda:ConfiguracaoAgenda;

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

  buscarConfiguracaoAgenda(medicoId: string, clinicaId:string) {
    let parametros = new HttpParams().set("medicoId", medicoId).set("clinicaId", clinicaId);
    return this.http.get<ConfiguracaoAgenda>(this.accessPointUrl + "buscarConfiguracaoAgenda?"+ parametros);
  }

  retornarMinutosConfiguracao(configuracaoMinutosAgenda:EConfiguracaoMinutosAgenda)
  {
    switch (configuracaoMinutosAgenda) {
      case (EConfiguracaoMinutosAgenda["1 Hora"]):
        return 60;
      case (EConfiguracaoMinutosAgenda["5 Minutos"]):
        return 5;
      case (EConfiguracaoMinutosAgenda["10 Minutos"]):
        return 10;
      case (EConfiguracaoMinutosAgenda["15 Minutos"]):
        return 15;
      case (EConfiguracaoMinutosAgenda["20 Minutos"]):
        return 20;
      case (EConfiguracaoMinutosAgenda["30 Minutos"]):
        return 30;
    }
  }

}
