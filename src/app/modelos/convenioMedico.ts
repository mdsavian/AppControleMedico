import { Entidade } from "./entidade";

export class ConvenioMedico extends Entidade {

    constructor() {
        super();
    }
    
    convenioId:string;
    medicoId:string;
}