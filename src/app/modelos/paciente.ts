import { Pessoa } from "./pessoa";

export class Paciente extends Pessoa {

  constructor() {
    super();
  }

  
  nomeConjugue: string;
  nomePai: string;
  nomeMae: string;    
  estadoCivil: number;
  tipoSanguineo: number;
  
  ocupacao: string;
    
  telefone: string;    
  aceitaReceberSms: boolean;
  responsavel: string;
  convenio: string;
  numeroCartao: number;
  cartaoNacionalSaude: number;
  dataValidadeCartao: Date;
}
