import { Entidade } from "./entidade";

export class ConfiguracaoAgendaDias extends Entidade {

    constructor(dia:number) {
        super();

        this.dia = dia;
        this.configurado = false;
        this.primeiroHorarioInicial = "08:00";
        this.primeiroHorarioFinal = "12:00";
        this.segundoHorarioInicial = "13:30";
        this.segundoHorarioFinal = "18:00";

    }
    
    dia: number;
    configurado: boolean;
    primeiroHorarioInicial: string;
    primeiroHorarioFinal: string;
    segundoHorarioInicial: string;
    segundoHorarioFinal: string;
    horarioInicioIntervalo: string;
    horarioFimIntervalo: string;
}