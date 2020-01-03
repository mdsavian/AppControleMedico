import { Entidade } from "./entidade";

export class ModeloPrescricao extends Entidade {

    constructor() {
        super();
        this.descricao = this.titulo = "";
    }
    
    descricao:string;
    titulo:string;
}