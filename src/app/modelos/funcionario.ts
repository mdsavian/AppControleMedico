import { Pessoa } from "./pessoa";
import { Oficio } from "./oficio";
import { Usuario } from "./usuario";

export class Funcionario extends Pessoa {

  constructor() {
    super();
  }

  oficio:Oficio;
  usuario:Usuario;
  dataAdmissao:Date;  
  dataDemissao:Date;  

}
