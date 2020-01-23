import { Entidade } from "./entidade";
import { ETipoExtraCaixa } from "../enums/ETipoExtraCaixa";
import { EVistaPrazo } from "../enums/EVistaPrazo";

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
  vistaPrazo:EVistaPrazo;
  parcela:number;
  tipoExtraCaixa: ETipoExtraCaixa;
}


