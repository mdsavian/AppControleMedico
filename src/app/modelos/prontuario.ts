import { Entidade } from "./entidade";
import { AnexoProntuario } from "./anexoProntuario";

export class Prontuario extends Entidade {

    constructor() {
        super();
    }

    pacienteId:string;    
    descricao:string;
    anexos:Array<AnexoProntuario>;

}