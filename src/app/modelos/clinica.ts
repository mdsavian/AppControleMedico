import { Entidade } from "./entidade";

export class Clinica extends Entidade {

  constructor() {
    super();
  }

  ativo:boolean;
  nomeFantasia:string;
  //imagem
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
