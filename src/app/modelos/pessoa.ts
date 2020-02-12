import { Entidade } from "./entidade";

export class Pessoa extends Entidade {

    constructor() {
        super();
    }
    nomeCompleto: string;
    dataNascimento: Date;
    rg: string;
    cpfCnpj: string;
    genero: number;
    celular: string;
    email: string;
    ativo:boolean;
    usuarioId: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    
}