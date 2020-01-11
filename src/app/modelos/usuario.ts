import { Entidade } from "./entidade";
import { Medico } from "./medico";
import { Funcionario } from "./funcionario";
import { ETipoUsuario } from "../enums/EtipoUsuario";
import { ConfiguracaoAtalho } from "./configuracaoAtalho";

export class Usuario extends Entidade {

  constructor() {

    super();

    this.tipoUsuario = ETipoUsuario.Comum, this.login = "", this.senha = "", this.ultimoLogin = "", this.ativo = false, this.medicoId = "", this.funcionarioId = ""
    this.funcionario = new Funcionario(), this.medico =null, this.sessaoAtiva = true, this.senhaPadrao = false, this.configuracaoAtalhos = new Array<ConfiguracaoAtalho>();
  }


  tipoUsuario: ETipoUsuario;
  login: string;
  senha: string;
  ultimoLogin: string;
  ativo: boolean;
  medicoId: string;
  funcionarioId: string;
  sessaoAtiva:boolean;
  senhaPadrao:boolean;
  funcionario: Funcionario;
  medico: Medico;
  configuracaoAtalhos:Array<ConfiguracaoAtalho>
}
