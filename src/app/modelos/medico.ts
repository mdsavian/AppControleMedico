import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";
import { Usuario } from "./usuario";
import { Especialidade } from "./especialidade";
import { ConfiguracaoAgenda } from "./configuracaoAgenda";

export class Medico extends Pessoa {

  constructor() {
    super();
  }

  crm : string;  
  convenios :Convenio[];
  usuario:Usuario;
  especialidade:Especialidade;
  configuracaoAgenda:ConfiguracaoAgenda;
  administrador:boolean;
}
