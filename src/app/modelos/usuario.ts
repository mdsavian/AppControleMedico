import { Entidade } from "./entidade";

export class Usuario extends Entidade{

  constructor()  {super(); }

  tipoUsuario : number;
  login : string;
  senha : string;
  permissaoAdministrador : boolean;
  visualizaValoresRelatorios : boolean;
  ultimoLogin:string;
  ativo:boolean;
  medicoId:string;
  funcionarioId:string;
}
