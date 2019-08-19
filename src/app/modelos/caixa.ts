import { Entidade } from "./entidade";

export class Caixa extends Entidade {

  constructor() {
    super();
  }

  clinicaId:string;
  funcionarioId:string;
  dataAbertura:string;
  horaAbertura:string;  
  dataFechamento:string;
  horaFechamento:string;

  trocoAbertura:number;
  trocoFechamento:number;
  
}
