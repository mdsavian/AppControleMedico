import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModeloPrescricao } from '../modelos/modeloPrescricao'
import { environment } from '../../environments/environment';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class ModeloPrescricaoService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'modeloPrescricao/';

  public modeloPrescricao:ModeloPrescricao;
  public listaModeloPrescricao :Array<ModeloPrescricao>;

  constructor(private http: HttpClient, private appService:AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<ModeloPrescricao>>(this.accessPointUrl);
  }
    
  public salvar(modeloPrescricao: ModeloPrescricao) {
    return this.http.post<ModeloPrescricao>(this.accessPointUrl, modeloPrescricao);
  }

  public buscarPorId(modeloPrescricaoId: string) {
    return this.http.get<ModeloPrescricao>(this.accessPointUrl + "buscarPorId/" + modeloPrescricaoId);
  }

  public Excluir(modeloPrescricaoId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + modeloPrescricaoId);
  }

}
