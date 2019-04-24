import { Entidade } from "./entidade";
import { ETipoAgendamento } from "../enums/ETipoAgendamento";

export class Agendamento extends Entidade {

    constructor() {
        super();
    }
    
    pacienteId:string;
    servicoId:string;
    dataAgenda:string;
    horaInicial:string;
    horaFinal:string;
    observacao:string;
    tipoAgendamento:ETipoAgendamento;
}