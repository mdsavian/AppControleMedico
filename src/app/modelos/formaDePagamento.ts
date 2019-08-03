import { Entidade } from "./entidade";

export class FormaDePagamento extends Entidade {

  constructor() {
    super();
  }

  descricao:string;  
  diasRecebimento:number;  
}
