import { Entidade } from "./entidade";
import { ContaReceber } from "./contaReceber";

export class Timeline extends Entidade {

  constructor() {
    super();
  }

  descricao:string;  
  titulo:string;
  dataHora:string;
  contaReceberId:string;
  agendamentoId:string;
  cor:string;
  valorTotal:number;
  par:boolean;  
  contaReceber:ContaReceber;
}
