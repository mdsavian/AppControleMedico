import { Entidade } from "./entidade";

export class ContaPagarPagamento extends Entidade {

  constructor() {
    super();
  }

  dataPagamento:string;
  jurosMulta:number;
  desconto:number;
  valor:number;
  formaPagamentoId:string;
  usuarioId:string;
}
