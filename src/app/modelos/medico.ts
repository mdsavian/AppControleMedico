import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";
import { Usuario } from "./usuario";

export class Medico extends Pessoa {

  constructor() {
    super();
  }

  crm : string;  
  convenios :Convenio[];
  usuario:Usuario;
}
