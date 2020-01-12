import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracaoAtalho } from '../modelos/configuracaoAtalho'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoAtalhoService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'configuracaoAtalho/';

  public configuracaoAtalho:ConfiguracaoAtalho;
  public listaConfiguracaoAtalho :Array<ConfiguracaoAtalho>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<ConfiguracaoAtalho>>(this.accessPointUrl);
  }
  
  public salvar(configuracaoAtalho: ConfiguracaoAtalho) {
    return this.http.post<ConfiguracaoAtalho>(this.accessPointUrl, configuracaoAtalho);
  }

  public buscarPorId(configuracaoAtalhoId: string) {
    return this.http.get<ConfiguracaoAtalho>(this.accessPointUrl + "buscarPorId/" + configuracaoAtalhoId);
  }

  public Excluir(configuracaoAtalhoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + configuracaoAtalhoId);
  }

  public buscarPorUsuario(usuarioId:string)
  {
    return this.http.get<Array<ConfiguracaoAtalho>>(this.accessPointUrl + "buscarPorUsuario/" + usuarioId);
  }

  public buscarParaConfiguracao(usuarioId:string)
  {
    return this.http.get<Array<ConfiguracaoAtalho>>(this.accessPointUrl + "buscarParaConfiguracao/" + usuarioId);
  }

}
