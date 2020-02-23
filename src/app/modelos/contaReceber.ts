import { Entidade } from "./entidade";
import { ETipoContaReceber } from "../enums/ETipoContaReceber";
import { ContaReceberPagamento } from "./contaReceberPagamento";
import { Caixa } from "./caixa";

export class ContaReceber extends Entidade {

  constructor() {
    super();
  }

  clinicaId: string;
  pacienteId: string;
  medicoId: string;
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
  
  
  //ignore
  caixa: Caixa;
  tipoContaDescricao:string;

}


