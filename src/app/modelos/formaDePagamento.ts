import { Entidade } from "./entidade";
import { EVistaPrazo } from "../enums/EVistaPrazo";

export class FormaDePagamento extends Entidade {

  constructor() {

    super();
    this.id = "";
    this.descricao = "";
    this.diasRecebimento = 1;    
  }

  descricao: string;
  tipoPagamento:EVistaPrazo;
  diasRecebimento: number;
}
