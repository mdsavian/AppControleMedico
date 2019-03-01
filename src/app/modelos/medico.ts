import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";

export class Medico extends Pessoa {

  constructor() {
    super();
  }

  crm : string;  
  convenios :Convenio[];
}
