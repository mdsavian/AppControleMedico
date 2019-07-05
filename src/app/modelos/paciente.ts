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
  tipoPlano:string;
  semanaGestacao:string;
  diaGestacao:string;

  convenioId:string;
  convenio :Convenio;
  
}
