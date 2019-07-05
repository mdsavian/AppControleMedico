import { Pessoa } from "./pessoa";
import { Oficio } from "./oficio";
import { Usuario } from "./usuario";

export class Funcionario extends Pessoa {

  constructor() {
    super();
  }

  oficioId:string;
  usuarioId:string;
  
  oficio:Oficio;
  usuario:Usuario;
  dataAdmissao:Date;  
  dataDemissao:Date;
  permissaoAdministrador : boolean;
  visualizaAgenda : boolean;

}
