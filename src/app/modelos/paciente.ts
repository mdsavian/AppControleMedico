import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";

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
  numeroCartao: number;
  cartaoNacionalSaude: number;
  dataValidadeCartao: Date;
  convenio :Convenio;
  tipoPlano:string;
  semanaGestacao:string;
  diaGestacao:string;
  
}
