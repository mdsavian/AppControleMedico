import { Entidade } from "./entidade";
import { ETipoExtraCaixa } from "../enums/ETipoExtraCaixa";
import { EVistaPrazo } from "../enums/EVistaPrazo";
import { Caixa } from "./caixa";

export class ExtraCaixa extends Entidade {

  constructor() {
    super();
    this.parcela = 1;
  }

  clinicaId: string;  
  usuarioId: string;
  caixaId: string;
  valor:number;
  formaPagamentoId:string;
  data:Date;
  descricao:string;
  vistaPrazo:EVistaPrazo;
  parcela:number;
  tipoExtraCaixa: ETipoExtraCaixa;
  caixa:Caixa;
}


