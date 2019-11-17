import { Entidade } from "./entidade";
import { ContaPagarPagamento } from "./contaPagarPagamento";
import { ETipoContaPagar } from "../enums/ETipoContaPagar";

export class ContaPagar extends Entidade {

  constructor() {
    super();
  }

  clinicaId: string;
  fornecedorId: string;
  usuarioId: string;
  medicoId: string;
  dataEmissao: Date;
  dataVencimento: Date;
  numeroDocumento: string;
  numeroFatura: number;  
  jurosMulta:number;
  desconto:number;
  valor: number;
  valorTotal:number;
  saldo:number;
  tipoContaPagar: ETipoContaPagar;
  pagamentos: Array<ContaPagarPagamento>;
  observacao:string;  
}


