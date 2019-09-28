import { EVistaPrazo } from "../../enums/EVistaPrazo";
import { Entidade } from "../entidade";

export class Pagamento extends Entidade {

  constructor() {
    super();

  }

  dataPagamento:string;
  jurosMulta:number;
  desconto:number;
  valor:number;
  formaPagamentoId:string;
  usuarioId:string;
  vistaPrazo:EVistaPrazo;
  parcela:number;

  descricaoPagamento:string;
}
