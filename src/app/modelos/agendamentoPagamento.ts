import { Entidade } from "./entidade";
import { EVistaPrazo } from "../enums/EVistaPrazo";

export class AgendamentoPagamento extends Entidade {

  constructor() {
    super();
    this.parcela = 1;
  }
  
  formaPagamentoId:string;
  agendamentoId:string;
  caixaId:string;
  usuarioId:string;
  dataPagamento:string;
  vistaPrazo:EVistaPrazo;
  parcela:number;

  descricaoPagamento:string;
}
