import { Entidade } from "./entidade";

export class Convenio extends Entidade {

    constructor() {
        super();      
    }
    
    nomeConvenio:string;
    diasRetorno:number;
    ativo:boolean;
}