import { Entidade } from "./entidade";

export class ConfiguracaoAgenda extends Entidade {

    constructor(segunda:boolean) {
        super();
        this.segunda = segunda;                
    }
    
    segunda:boolean;
    primeiroHorarioInicialSegunda:string;
    primeiroHorarioFinalSegunda:string;
    segndoHorarioInicialSegunda:string;
    segundoHorarioFinalSegunda:string;

    terca:boolean;
    primeiroHorarioInicialTerca:string;
    primeiroHorarioFinalTerca:string;
    segndoHorarioInicialTerca:string;
    segundoHorarioFinalTerca:string;

    quarta:boolean;
    primeiroHorarioInicialQuarta:string;
    primeiroHorarioFinalQuarta:string;
    segndoHorarioInicialQuarta:string;
    segundoHorarioFinalQuarta:string;

    quinta:boolean;
    primeiroHorarioInicialQuinta:string;
    primeiroHorarioFinalQuinta:string;
    segndoHorarioInicialQuinta:string;
    segundoHorarioFinalQuinta:string;

    sexta:boolean;
    primeiroHorarioInicialSexta:string;
    primeiroHorarioFinalSexta:string;
    segndoHorarioInicialSexta:string;
    segundoHorarioFinalSexta:string;

    sabado:boolean;
    primeiroHorarioInicialSabado:string;
    primeiroHorarioFinalSabado:string;
    segndoHorarioInicialSabado:string;
    segundoHorarioFinalSabado:string;

    domingo:boolean;
    primeiroHorarioInicialDomingo:string;
    primeiroHorarioFinalDomingo:string;
    segndoHorarioInicialDomingo:string;
    segundoHorarioFinalDomingo:string;
}