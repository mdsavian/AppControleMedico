import { Entidade } from "./entidade";

export class Consulta extends Entidade {

    constructor() {
        super();
    }
    
    pacienteId:string;
    servicoId:string;
    dataAgenda:string;
    horaInicial:string;
    horaFinal:string;
    observacao:string;
}