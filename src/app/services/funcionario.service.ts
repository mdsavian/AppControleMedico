import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funcionario } from '../modelos/funcionario'
import { environment } from '../../environments/environment';
import{Util} from '../uteis/Util';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
   
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'funcionario/';
  public funcionario:Funcionario;
  util = new Util();
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {

    return this.http.get<Array<Funcionario>>(this.accessPointUrl);

  }

  public salvar(funcionario: Funcionario) {
    return this.http.post<Funcionario>(this.accessPointUrl, funcionario);
  }

  public buscarPorId(funcionarioId: string) {
    return this.http.get<Funcionario>(this.accessPointUrl + "buscarPorId/" + funcionarioId);
  }

  public Excluir(funcionarioId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + funcionarioId);
  }

  buscarComMedicos(funcionarioId: string) {
    return this.http.get<Funcionario>(this.accessPointUrl + "buscarComMedicos/" + funcionarioId);
  }

  buscarPorOficio(oficioId: any) {
    return this.http.get<Array<Funcionario>>(this.accessPointUrl + "buscarPorOficio/" + oficioId);
  }


  PermitirVisualizarAgenda(funcionario:Funcionario):boolean
  {
    return this.util.hasItems(funcionario.medicosId) && funcionario.visualizaAgenda;
  }
}
