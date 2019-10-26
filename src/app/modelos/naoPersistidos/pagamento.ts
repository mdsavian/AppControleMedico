import { EVistaPrazo } from "../../enums/EVistaPrazo";

export class Pagamento {

  constructor() {
  }

  dataPagamento:Date;
  valor:number;
  formaPagamentoId:string;
  usuarioId:string;
  vistaPrazo:EVistaPrazo;
  parcela:number;

  descricaoPagamento:string;
}
