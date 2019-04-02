import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";
import { Usuario } from "./usuario";
import { Especialidade } from "./especialidade";

export class Medico extends Pessoa {

  constructor() {
    super();
  }

  crm : string;  
  convenios :Convenio[];
  usuario:Usuario;
  especialidade:Especialidade;
}
