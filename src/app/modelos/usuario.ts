import { Medico } from "./medico";
import { Funcionario } from "./funcionario";

export class Usuario{

  constructor()  { }

  tipoUsuario : number;
  login : string;
  senha : string;
  permissaoAdministrador : boolean;
  visualizaValoresRelatorios : boolean;
  token:string;
  medico:Medico;
  funcionario:Funcionario;
  ativo:boolean;
}
