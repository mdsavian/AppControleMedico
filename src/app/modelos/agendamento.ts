import { Entidade } from "./entidade";
import { Exame } from "./exame";
import { Local } from "./local";
import { Cirurgia} from "./cirurgia";
import { Paciente} from "./paciente";
import { Medico} from "./medico";
import { ETipoAgendamento } from "../enums/ETipoAgendamento";
import { ESituacaoAgendamento } from "../enums/ESituacaoAgendamento";
import { Procedimento } from "./procedimento";
import { Convenio } from "./convenio";

export class Agendamento extends Entidade {

    constructor() {
        super();
        this.corFundo = "#5F9EA0";
        this.corLetra = "#EFF5F5";
        this.tipoAgendamento = ETipoAgendamento.Consulta;
    }
       
    dataAgendamento:string;
    horaInicial:string;
    horaFinal:string;
    observacao:string;
    paciente:Paciente;
    medico:Medico;
    tipoAgendamento:ETipoAgendamento;
    situacaoAgendamento:ESituacaoAgendamento;
    exame:Exame;
    local:Local;
    cirurgia:Cirurgia;
    convenio:Convenio;
    procedimento:Procedimento;
    corFundo:string;
    corLetra:string;    
}