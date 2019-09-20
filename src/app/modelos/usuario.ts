import { Entidade } from "./entidade";
import { ETipoUsuario } from "../enums/EtipoUsuario";

export class Usuario extends Entidade{

  constructor()  {super(); }

  tipoUsuario : ETipoUsuario;
  login : string;
  senha : string;
  ultimoLogin:string;
  ativo:boolean;
  medicoId:string;
  funcionarioId:string;  
}
