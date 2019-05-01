import { Entidade } from "./entidade";
import { Exame } from "./exame";
import { Local } from "./local";
import { Cirurgia} from "./cirurgia";
import { Paciente} from "./paciente";
import { ETipoAgendamento } from "../enums/ETipoAgendamento";
import { Procedimento } from "./procedimento";

export class Agendamento extends Entidade {

    constructor() {
        super();
    }
    
    paciente:Paciente;
    servicoId:string;
    dataAgenda:string;
    horaInicial:string;
    horaFinal:string;
    observacao:string;
    tipoAgendamento:ETipoAgendamento;
    exame:Exame;
    local:Local;
    cirurgia:Cirurgia;
    procedimento:Procedimento;
}