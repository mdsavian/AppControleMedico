import { EVistaPrazo } from "../../enums/EVistaPrazo";

export class Pagamento {

  constructor() {
  }

  dataPagamento:string;
  valor:number;
  formaPagamentoId:string;
  usuarioId:string;
  vistaPrazo:EVistaPrazo;
  parcela:number;

  descricaoPagamento:string;
}
