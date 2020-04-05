import { Entidade } from "./entidade";

export class Clinica extends Entidade {

  constructor() {
    super();
    this.ativo = true;
  }

  ativo:boolean;
  nomeFantasia:string;
  ie:string;
  im:string;  
  razaoSocial:string;  
  telefone:string;
  endereco:string;
  bairro:string;
  cidade:string;
  uf:string;
  cep:string;
  numero:string;
  complemento:string;
  cnpj:string;
  logoId:string;
  
}
  