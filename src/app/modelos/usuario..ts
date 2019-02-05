import { Pessoa } from "./pessoa";

export class Usuario extends Pessoa{

  constructor() {
    super();
  }

  tipoUsuario : number;
  login : string;
  senha : string;
  permissaoAdministrador : boolean;
  visualizaValoresRelatorios : boolean;
  token:string;
}
