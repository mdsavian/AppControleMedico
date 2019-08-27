import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../modelos/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Clinica } from '../modelos/clinica';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  

  private headers: HttpHeaders;
  private clinicaCorrenteSubject: BehaviorSubject<Clinica>;

  private accessPointUrl: string = environment.apiUrl + 'app/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.clinicaCorrenteSubject = new BehaviorSubject<Clinica>(JSON.parse(localStorage.getItem('clinicaCorrente')));
  }

  public retornarUsuarioAdministrador(): boolean {
    var usuario = this.retornarUsuarioCorrente();
    return ((usuario.medicoId == "" || usuario.medicoId == null) && (usuario.funcionarioId == null || usuario.funcionarioId == ""));
  }

  public retornarUsuarioCorrente(): Usuario {      
    var usuario = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuarioCorrente'))).value;
    return usuario;
  }

  buscarClinicasUsuario(usuario: Usuario) {
    this.http.get<Array<Clinica>>(this.accessPointUrl + "buscarClinicasUsuario/" + usuario.id).subscribe(clinicas => {
      this.armazenarClinica( clinicas.find(c => true));      
    })
  }

  armazenarClinica(clinica:Clinica)
  {
    localStorage.setItem("clinicaCorrente", JSON.stringify(clinica))
    this.clinicaCorrenteSubject.next(clinica);
  }

  public retornarClinicaCorrente(): Clinica {
    var clinicaCorrente = new BehaviorSubject<Clinica>(JSON.parse(localStorage.getItem('clinicaCorrente'))).value;
    return clinicaCorrente;
  }

  removeClinica() {
    localStorage.removeItem("clinicaCorrente");
    this.clinicaCorrenteSubject.next(null);
  }

}
