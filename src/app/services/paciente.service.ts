import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../modelos/paciente'
import { environment } from '../../environments/environment';
import { Util } from '../uteis/Util';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'paciente/';
  public paciente: Paciente;
  util = new Util();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Paciente>>(this.accessPointUrl);
  }

  TodosGestantesFiltrandoMedico(medicoId: string): any {
    return this.http.get<Array<Paciente>>(this.accessPointUrl + "todosGestantesFiltrandoMedico/" + medicoId)
  }

  public salvar(paciente: Paciente) {
    return this.http.post<Paciente>(this.accessPointUrl, paciente);
  }

  public buscarPorId(pacienteId: string) {
    return this.http.get<Paciente>(this.accessPointUrl + "buscarPorId/" + pacienteId);
  }

  public Excluir(pacienteId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + pacienteId);
  }

  public RetornarIdadePaciente(paciente: Paciente) {
    var dataHoje = new Date();
    var dataNasci = new Date(paciente.dataNascimento);
    var idade = dataHoje.getFullYear() - dataNasci.getFullYear();

    return idade;

  }

  public retornarTelefonePaciene(paciente: Paciente) {

    var telefone = "";
    telefone = !this.util.isNullOrWhitespace(paciente.telefone) ? this.util.formataTelefone(paciente.telefone) : " - ";
    telefone = telefone + " / ";
    telefone = telefone + (this.util.isNullOrWhitespace(paciente.celular) == false ? this.util.formataTelefone(paciente.celular) : "-");


    return telefone;
  }

}
