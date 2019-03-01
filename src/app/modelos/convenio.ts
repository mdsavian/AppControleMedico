import { Entidade } from "./entidade";

export class Convenio extends Entidade {

    constructor(nomeconvenio:string, diasretorno:number, id:string) {
        super();
        this.nomeConvenio = nomeconvenio;
        this.diasRetorno = diasretorno;        
    }
    
    nomeConvenio:string;
    diasRetorno:number;
}