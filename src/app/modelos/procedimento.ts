import { Entidade } from "./entidade";

export class Procedimento extends Entidade {

    constructor() {
        super();
        this.id= "", this.descricao= "", this.corFundo= "#000000", this.corLetra= "#ffffff", this.obrigaPaciente = true;
    }
    
    descricao:string;
    corFundo:string;
    corLetra:string;
    obrigaPaciente:boolean;
}