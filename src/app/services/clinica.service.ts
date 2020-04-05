import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clinica } from '../modelos/clinica'
import { environment } from '../../environments/environment';
import { Util } from '../uteis/Util';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'clinica/';

  public clinica: Clinica;
  public listaClinica: Array<Clinica>;
  util = new Util();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Clinica>>(this.accessPointUrl);
  }

  public salvar(clinica: Clinica) {
    return this.http.post<Clinica>(this.accessPointUrl, clinica);
  }

  public buscarPorId(clinicaId: string) {
    return this.http.get<Clinica>(this.accessPointUrl + "buscarPorId/" + clinicaId);
  }

  public Excluir(clinicaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + clinicaId);
  }

  public buscarPorUsuario(usuarioId: string) {
    return this.http.get<Array<Clinica>>(this.accessPointUrl + "buscarPorUsuario/" + usuarioId);
  }

  retornarEnderecoClinica(clinicaId: string) {

    this.buscarPorId(clinicaId).subscribe(clinica => {
      if (clinica != null) {

        console.log(clinica);

        if (!this.util.isNullOrWhitespace(clinica.endereco)) {
          var endereco = clinica.endereco + (!this.util.isNullOrWhitespace(clinica.numero) ? ", " + clinica.numero : "")
            + (!this.util.isNullOrWhitespace(clinica.bairro) ? " | " + clinica.bairro : "")
            + (!this.util.isNullOrWhitespace(clinica.cidade) ? " | " + clinica.cidade : "")
            + (!this.util.isNullOrWhitespace(clinica.uf) ? " | " + clinica.uf : "")
            + (!this.util.isNullOrWhitespace(clinica.telefone) ? " | Fone: " + this.util.formataTelefone(clinica.telefone) : "");
          return endereco;
        }
      }
      return "";
    });

    return "";
  }

}
  