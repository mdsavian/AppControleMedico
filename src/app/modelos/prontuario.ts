import { Entidade } from "./entidade";

export class Prontuario extends Entidade {

    constructor() {
        super();
    }

    pacienteId:string;    
    descricao:string;
    anexos:Array<Prontuario>;

}