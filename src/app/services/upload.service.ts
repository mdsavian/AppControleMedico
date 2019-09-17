import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})


export class UploadService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'upload/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  dadosRelatorio: string;

  public ArmazenaDados(objeto: string) {
    this.dadosRelatorio = objeto;
  }

  public RetornaDados(): string {
    return this.dadosRelatorio;
  }

  salvarImagem(imagem: any, entidade: string, id: string) {

    let formData = new FormData();
    var nomeImagem = entidade + "-" + id + ".jpeg";
    formData.append("image", imagem, nomeImagem);

    return this.http.post(this.accessPointUrl + "salvarImagem", formData);
  }

  public downloadImagem(id: string, entidade: string) {
    let parametros = new HttpParams().set("id", id).set("entidade", entidade);

    return this.http.get(this.accessPointUrl + "downloadImagem?" + parametros);
  }
}