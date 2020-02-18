import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Caixa } from '../modelos/Caixa'
import { environment } from '../../environments/environment';
import { AppService } from './app.service';
import { Funcionario } from '../modelos/funcionario';
import { Util } from '../uteis/Util';
import { Medico } from '../modelos/medico';
import { Pessoa } from '../modelos/pessoa';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'caixa/';

  public listaFuncionarios: Array<Funcionario>;
  public listaMedicos: Array<Medico>;
  public caixa: Caixa;
  public listaCaixa: Array<Caixa>;
  util = new Util();

  constructor(private http: HttpClient, private appService: AppService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public Todos() {
    return this.http.get<Array<Caixa>>(this.accessPointUrl);
  }

  public salvar(caixa: Caixa) {
    return this.http.post<Caixa>(this.accessPointUrl, caixa);
  }

  retornarTodosCaixasAbertos() {
    return this.http.get<Array<Caixa>>(this.accessPointUrl + "retornarTodosCaixasAbertos/");
  }
  retornarCaixaAbertoPessoa(funcionarioId: string) {
    return this.http.get<Caixa>(this.accessPointUrl + "retornarCaixaAbertoPessoa/" + funcionarioId);
  }

  public buscarPorId(caixaId: string) {
    return this.http.get<Caixa>(this.accessPointUrl + "buscarPorId/" + caixaId);
  }

  public Excluir(caixaId) {
    return this.http.delete(this.accessPointUrl + "excluirPorId/" + caixaId);
  }

  caixasUltimos7dias() {
    return this.http.get<Array<Caixa>>(this.accessPointUrl + "caixasUltimos7dias/");

  }
  retornarPessoaCaixa(caixa: Caixa, funcionarios: Array<Funcionario>, medicos: Array<Medico>) {
    var pessoa = new Pessoa();
    if (!this.util.isNullOrWhitespace(caixa.funcionarioId))
      pessoa = funcionarios.find(c => c.id == caixa.funcionarioId);
    else pessoa = medicos.find(c => c.id == caixa.medicoId);

    return pessoa;
  }

  retornarDescricaoCaixa(caixa: Caixa, funcionarios: Array<Funcionario>, medicos: Array<Medico>) {
    let pessoa = this.retornarPessoaCaixa(caixa, funcionarios, medicos);
    if (pessoa != null) {
      caixa.descricao = pessoa.nomeCompleto;

      if (!this.util.isNullOrWhitespace(caixa.dataAbertura))
        caixa.descricao = caixa.descricao + " - " + this.util.dataParaString(caixa.dataAbertura);

      if (!this.util.isNullOrWhitespace(caixa.horaAbertura))
        caixa.descricao = caixa.descricao + " " + this.util.formatarHora(caixa.horaAbertura);

        if (!this.util.isNullOrWhitespace(caixa.dataFechamento))
        caixa.descricao = caixa.descricao + " até " + this.util.dataParaString(caixa.dataFechamento);

      if (!this.util.isNullOrWhitespace(caixa.horaFechamento))
        caixa.descricao = caixa.descricao + " " + this.util.formatarHora(caixa.horaFechamento);
    }    
    return caixa;
  }

}
