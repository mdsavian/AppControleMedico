import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fornecedor } from '../modelos/fornecedor'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'fornecedor/';

  public fornecedor:Fornecedor;
  public listaFornecedor :Array<Fornecedor>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Fornecedor>>(this.accessPointUrl);
  }
  
  public salvar(fornecedor: Fornecedor) {
    return this.http.post<Fornecedor>(this.accessPointUrl, fornecedor);
  }

  public buscarPorId(fornecedorId: string) {
    return this.http.get<Fornecedor>(this.accessPointUrl + "buscarPorId/" + fornecedorId);
  }

  public Excluir(fornecedorId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + fornecedorId);
  }

}
