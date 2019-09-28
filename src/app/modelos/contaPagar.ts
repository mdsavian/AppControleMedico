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
  dataEmissao: string;
  dataVencimento: string;
  numeroDocumento: string;
  numeroFatura: number;
  valor: number;
  tipoContaPagar: ETipoContaPagar;
  pagamentos: Array<ContaPagarPagamento>;
  observacao:string;
}
