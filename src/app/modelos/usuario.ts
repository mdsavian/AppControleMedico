import { Entidade } from "./entidade";

export class Usuario extends Entidade{

  constructor()  {super(); }

  tipoUsuario : number;
  login : string;
  senha : string;
  ultimoLogin:string;
  ativo:boolean;
  medicoId:string;
  funcionarioId:string;
}
