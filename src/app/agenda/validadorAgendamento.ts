import { ConfiguracaoAgenda } from "../modelos/configuracaoAgenda";
import { ETipoAgendamento } from '../enums/ETipoAgendamento';

export class ValidadorAgendamento {

    public validaHorasAgendamento(medicoConfiguracaoAgenda: ConfiguracaoAgenda, dataInicial: Date, dataFinal: Date,
        tipoAgendamento: ETipoAgendamento): string {

        var erro: string = "";

        var horasMinutosInicialAgendamento = dataInicial.getHours() * 60 + dataInicial.getMinutes();
        var horasMinutosFinalAgendamento = dataFinal.getHours() * 60 + dataFinal.getMinutes();

        if (horasMinutosInicialAgendamento >= horasMinutosFinalAgendamento) {
            erro = "Hora de agendamento inválida";
            return erro;
        }

        if (medicoConfiguracaoAgenda != null) {
            var configuracaoAgendaDias = medicoConfiguracaoAgenda.configuracaoAgendaDias[dataInicial.getDay()];

            if (configuracaoAgendaDias != null) {

                if (!configuracaoAgendaDias.configurado) {
                    erro = "Não existe configuração de agenda para este dia.";
                    return erro;
                }

                var horasMinutoInicioConfiguracao = this.converteHorarioParaMinutos(configuracaoAgendaDias.primeiroHorarioInicial);
                var horasMinutoFinalConfiguracao = this.converteHorarioParaMinutos(configuracaoAgendaDias.segundoHorarioFinal);
                var horarioInicioIntervalo = this.converteHorarioParaMinutos(configuracaoAgendaDias.horarioInicioIntervalo);
                var horarioFimIntervalo = this.converteHorarioParaMinutos(configuracaoAgendaDias.horarioFimIntervalo);

                if (horasMinutosInicialAgendamento < horasMinutoInicioConfiguracao) {
                    erro = "Hora de início do agendamento menor que a hora inicial configurada neste dia.";
                    return erro;
                }

                if (horasMinutosFinalAgendamento > horasMinutoFinalConfiguracao) {
                    erro = "Hora de fim do agendamento maior que a hora final configurada neste dia.";
                    return erro;
                }

                if (tipoAgendamento != ETipoAgendamento.Bloqueio && ((horasMinutosInicialAgendamento >= horarioInicioIntervalo && horasMinutosInicialAgendamento <= horarioFimIntervalo)
                    || (horasMinutosFinalAgendamento >= horarioInicioIntervalo && horasMinutosFinalAgendamento <= horarioFimIntervalo)
                    || (horasMinutosInicialAgendamento <= horarioInicioIntervalo && horasMinutosFinalAgendamento >= horarioFimIntervalo))) {
                    erro = "Horário do agendamento sobrepõe o horário do intervalo.";
                    return erro;
                }

                return "";
            }
        }
        return erro;
    }

    converteHorarioParaMinutos(horario: string): number {
        return parseInt(horario.substr(0, 2)) * 60 + parseInt(horario.substr(2, 2));
    }

}