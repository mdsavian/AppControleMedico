import { Entidade } from "./entidade";
import { Exame } from "./exame";
import { Local } from "./local";
import { Cirurgia} from "./cirurgia";
import { Paciente} from "./paciente";
import { Medico} from "./medico";
import { ETipoAgendamento } from "../enums/ETipoAgendamento";
import { Procedimento } from "./procedimento";
import { Convenio } from "./convenio";

export class Agendamento extends Entidade {

    constructor() {
        super();
        this.cor = "#5F9EA0";
    }
       
    dataAgendamentoInicial:Date;
    dataAgendamentoFinal:Date;    
    observacao:string;
    paciente:Paciente;
    medico:Medico;
    tipoAgendamento:ETipoAgendamento;
    exame:Exame;
    local:Local;
    cirurgia:Cirurgia;
    convenio:Convenio;
    procedimento:Procedimento;
    cor:string;
}