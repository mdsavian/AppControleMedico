import { Entidade } from "./entidade";
import { ConfiguracaoAgendaDias } from "./configuracaoAgendaDias";
import { EConfiguracaoMinutosAgenda } from "../enums/EConfiguracaoMinutosAgenda";

export class ConfiguracaoAgenda extends Entidade {

    constructor() {
        super();
        this.configuracaoAgendaDias = new Array<ConfiguracaoAgendaDias>();
        this.diasNaoConfigurados = [];
        this.primeiroHorario = "";
        this.ultimoHorario = "";
        this.configuracaoMinutosAgenda = EConfiguracaoMinutosAgenda["20 Minutos"];
    }
    
    configuracaoMinutosAgenda:EConfiguracaoMinutosAgenda;
    diasNaoConfigurados: number[];
    primeiroHorario: string;
    ultimoHorario: string;
    configuracaoAgendaDiasId:string[];
    configuracaoAgendaDias: Array<ConfiguracaoAgendaDias>;
}