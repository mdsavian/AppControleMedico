import { Entidade } from "./entidade";

export class Procedimento extends Entidade {

    constructor(descricao:string, cor:string, id:string) {
        super();
        this.descricao = descricao;
        this.cor = cor;        
    }
    
    descricao:string;
    cor:string;
}