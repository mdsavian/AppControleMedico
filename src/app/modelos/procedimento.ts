import { Entidade } from "./entidade";

export class Procedimento extends Entidade {

    constructor() {
        super();
    }
    
    descricao:string;
    corFundo:string;
    corLetra:string;
}