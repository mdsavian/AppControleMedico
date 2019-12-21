import { Entidade } from "./entidade";

export class AnexoProntuario extends Entidade {

    constructor() {
        super();
    }

    extensaoArquivo:string;    
    nomeArquivo:string;
    contentType:string;
}