import { Entidade } from "./entidade";

export class Convenio extends Entidade {

    constructor() {
        super();      
    }
    
    descricao:string;
    diasRetorno:number;
    ativo:boolean;
}