import { Entidade } from "./entidade";
import { Exame } from "./exame";
import { Local } from "./local";
import { Cirurgia } from "./cirurgia";
import { Paciente } from "./paciente";
import { Medico } from "./medico";
import { ETipoAgendamento } from "../enums/ETipoAgendamento";
import { ESituacaoAgendamento } from "../enums/ESituacaoAgendamento";
import { Procedimento } from "./procedimento";
import { Convenio } from "./convenio";
import { AgendamentoPagamento } from "./agendamentoPagamento";

export class Agendamento extends Entidade {

    constructor() {
        super();
        this.corFundo = "#5F9EA0";
        this.corLetra = "#EFF5F5"
        this.tipoAgendamento = ETipoAgendamento.Consulta;
    }

    dataAgendamento: Date;
    horaInicial: string;
    horaFinal: string;
    observacao: string;
    corFundo: string;
    corLetra: string;
    clinicaId:string;
    exameId: string;
    localId: string;
    cirurgiaId: string;
    convenioId: string;
    procedimentoId: string;
    pacienteId: string;
    medicoId: string;
    funcionarioId:string;
    contemPagamentos:boolean;
    encaixado:boolean;
    tipoAgendamento: ETipoAgendamento;
    situacaoAgendamento: ESituacaoAgendamento;
    pagamentos:Array<AgendamentoPagamento>;
    paciente: Paciente;
    medico: Medico;
    exame: Exame;
    local: Local;
    cirurgia: Cirurgia;
    convenio: Convenio;
    procedimento: Procedimento;
    dataInicioAtendimento:Date;
    tipoAgendamentoDescricao:string;
    horaInicialAtendimento: string;
    horaFinalAtendimento: string;
}