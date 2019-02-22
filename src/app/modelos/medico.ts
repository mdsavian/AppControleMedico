import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";
import { ConvenioMedico } from "./convenioMedico";

export class Medico extends Pessoa {

  constructor() {
    super();
  }

  crm : string;  
  convenios :ConvenioMedico[];
}
