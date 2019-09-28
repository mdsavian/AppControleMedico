import { Pessoa } from "./pessoa";

export class Fornecedor extends Pessoa {

    constructor() {        
        super();
        this.ativo = true;
    }

    inscricaoMunicipal:string;
    inscricaoEstadual:string;
    razaoSocial:string;
    nomeFantasia:string;
    telefone:string;
    pais:string;    
}