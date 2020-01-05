import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PrescricaoPaciente } from '../modelos/prescricaoPaciente'
import { environment } from '../../environments/environment';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class PrescricaoPacienteService {  

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'prescricaoPaciente/';

  public prescricaoPaciente:PrescricaoPaciente;
  public listaPrescricaoPaciente :Array<PrescricaoPaciente>;

  constructor(private http: HttpClient, private appService:AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  buscarPorPaciente(pacienteId: string) {
    let usuarioId = this.appService.retornarUsuarioCorrente().id
    let clinicaId = this.appService.retornarClinicaCorrente().id
    let parametros = new HttpParams().set("pacienteId", pacienteId).set("usuarioId", usuarioId).set("clinicaId", clinicaId);    
    return this.http.get<Array<PrescricaoPaciente>>(this.accessPointUrl + "buscarPorPaciente?" + parametros);
  }

  public Todos() {
    return this.http.get<Array<PrescricaoPaciente>>(this.accessPointUrl);
  }
  
  public salvar(prescricaoPaciente: PrescricaoPaciente) {
    return this.http.post<PrescricaoPaciente>(this.accessPointUrl, prescricaoPaciente);
  }

  public buscarPorId(prescricaoPacienteId: string) {
    return this.http.get<PrescricaoPaciente>(this.accessPointUrl + "buscarPorId/" + prescricaoPacienteId);
  }

  public Excluir(prescricaoPacienteId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + prescricaoPacienteId);
  }

}
