import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlteraSenha } from '../modelos/naoPersistidos/alteraSenha';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { Util } from '../uteis/Util';
import { FuncionarioService } from './funcionario.service';
import { MedicoService } from './medico.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'usuario/';

  private util = new Util();

  public usuarioCorrente: Usuario;
  public listaUsuario: Array<Usuario>;
  public usuarioParaValidacao: Usuario;

  constructor(private http: HttpClient, private medicoService: MedicoService, private funcionarioService: FuncionarioService, private router: Router) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public todos() {
    return this.http.get<Array<Usuario>>(this.accessPointUrl, { headers: this.headers });
  }

  public add(usuario) {
    return this.http.post(this.accessPointUrl, usuario, { headers: this.headers });
  }

  public remove(usuario) {
    return this.http.delete(this.accessPointUrl + usuario.id, { headers: this.headers });
  }

  public update(usuario) {
    return this.http.put(this.accessPointUrl + usuario.id, usuario, { headers: this.headers });
  }

  public alterarSenha(alterarSenha: AlteraSenha) {
    return this.http.post(this.accessPointUrl + 'alterarSenha', alterarSenha);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }

  redirecionarParaPerfil(usuario: Usuario) {
    this.usuarioParaValidacao = usuario;

    if (!this.util.isNullOrWhitespace(usuario.funcionarioId)) {
      this.funcionarioService.funcionario = usuario.funcionario;
        this.router.navigate(['/cadastros/cadastrofuncionario']);
    }
    else if (!this.util.isNullOrWhitespace(usuario.medicoId)) {
      this.medicoService.medico = usuario.medico;
      this.router.navigate(['/cadastros/cadastromedico']);
    }
  }

}
