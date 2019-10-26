import { Entidade } from "./entidade";
import { EVistaPrazo } from "../enums/EVistaPrazo";

export class AgendamentoPagamento extends Entidade {

  constructor() {
    super();
    this.parcela = 1;
  }
  
  formaPagamentoId:string;
  caixaId:string;
  usuarioId:string;
  data:Date;
  vistaPrazo:EVistaPrazo;
  parcela:number;
  valor:number;

  descricaoPagamento:string;
}
