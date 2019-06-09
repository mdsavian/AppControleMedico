import { ConfiguracaoAgenda } from "../modelos/configuracaoAgenda";
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Agendamento } from "../modelos/agendamento";

export class ValidadorAgendamento {

    public tratarCorAgendamento(agendamento:Agendamento)
    {
        switch (agendamento.tipoAgendamento) {
            case ETipoAgendamento.Bloqueio.valueOf(): {
              agendamento.corFundo = "#000000";
              agendamento.corLetra = "#EE0000";
              break;
            }
            case ETipoAgendamento.Cirurgia.valueOf(): {
              agendamento.corFundo = agendamento.cirurgia.corFundo;
              agendamento.corLetra = agendamento.cirurgia.corLetra;
              break;
            }
            case ETipoAgendamento.Consulta.valueOf(): {
              agendamento.corFundo = "#5F9EA0";
              agendamento.corLetra = "#EFF5F5";
              break;
            }
            case ETipoAgendamento.Exame.valueOf(): {
              agendamento.corFundo = agendamento.exame.corFundo;
              agendamento.corLetra = agendamento.exame.corLetra;
              break;
            }
            case ETipoAgendamento.Procedimento.valueOf(): {
              agendamento.corFundo = agendamento.procedimento.corFundo;
              agendamento.corLetra = agendamento.procedimento.corLetra;
              break;
            }
            case ETipoAgendamento.Retorno.valueOf(): {
              agendamento.corFundo = "#CAE1FF";
              agendamento.corLetra = "#F4F9FF";
              break;
            }
          }
          return agendamento;
    }
    public validaHorasAgendamento(medicoConfiguracaoAgenda: ConfiguracaoAgenda, data: Date, horaInicial: string, horaFinal: string,
        tipoAgendamento: ETipoAgendamento): string {

        var erro: string = "";

        var horasMinutosInicialAgendamento = this.converteHorarioParaMinutos(horaInicial);
        var horasMinutosFinalAgendamento = this.converteHorarioParaMinutos(horaFinal);

        if (horasMinutosInicialAgendamento >= horasMinutosFinalAgendamento) {
            erro = "Hora de agendamento inválida";
            return erro;
        }

        if (medicoConfiguracaoAgenda != null) {
            var configuracaoAgendaDias = medicoConfiguracaoAgenda.configuracaoAgendaDias[data.getDay()];

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
        horario = horario.replace(':',"");
        return parseInt(horario.substr(0, 2)) * 60 + parseInt(horario.substr(2, 2));
    }

}