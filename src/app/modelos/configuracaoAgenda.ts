import { Entidade } from "./entidade";
import { ConfiguracaoAgendaDias } from "./configuracaoAgendaDias";
import { EConfiguracaoMinutosAgenda } from "../enums/EConfiguracaoMinutosAgenda";

export class ConfiguracaoAgenda extends Entidade {

    constructor() {
        super();
        this.configuracaoAgendaDias = new Array<ConfiguracaoAgendaDias>();

        for (var i = 0; i < 7; i++) {
            this.configuracaoAgendaDias.push(new ConfiguracaoAgendaDias(i));
        }

        this.diasNaoConfigurados = [];
        this.primeiroHorario = "08";
        this.ultimoHorario = "18";
        this.clinicaId = "";
        this.medicoId = "";
        this.configuracaoMinutosAgenda = EConfiguracaoMinutosAgenda["20 Minutos"];
    }

    configuracaoMinutosAgenda: EConfiguracaoMinutosAgenda;
    diasNaoConfigurados: number[];
    clinicaId: string;
    medicoId: string;
    primeiroHorario: string;
    ultimoHorario: string;
    configuracaoAgendaDiasId: string[];
    configuracaoAgendaDias: Array<ConfiguracaoAgendaDias>;
}