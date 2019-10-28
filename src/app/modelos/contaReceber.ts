import { Entidade } from "./entidade";
import { ETipoContaReceber } from "../enums/ETipoContaReceber";
import { ContaReceberPagamento } from "./contaReceberPagamento";

export class ContaReceber extends Entidade {

  constructor() {
    super();
  }

  clinicaId: string;
  pacienteId: string;
  usuarioId: string;
  dataEmissao: Date;
  dataVencimento: Date;
  numeroDocumento: string;
  numeroFatura: number;  
  jurosMulta:number;
  desconto:number;
  valor: number;
  valorTotal:number;
  saldo:number;
  tipoContaReceber: ETipoContaReceber;
  pagamentos: Array<ContaReceberPagamento>;
  observacao:string;  
  agendamentoId:string;
  tipoContaDescricao:string;

}


