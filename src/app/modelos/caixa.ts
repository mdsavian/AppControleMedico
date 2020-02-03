import { Entidade } from "./entidade";
import { Funcionario } from "./funcionario";

export class Caixa extends Entidade {

  constructor() {
    super();
  }

  clinicaId:string;
  funcionarioId:string;
  medicoId:string;
  dataAbertura:Date;
  horaAbertura:string; 
  dataFechamento:Date;
  horaFechamento:string;
  trocoAbertura:number;
  trocoFechamento:number;
  descricao:string;
  funcionario:Funcionario;  
  usuarioFechamentoId:string;
  usuarioAberturaId:string;
  pessoaId:string;
}
