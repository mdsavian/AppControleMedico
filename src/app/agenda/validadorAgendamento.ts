import { ConfiguracaoAgenda } from "../modelos/configuracaoAgenda";
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Agendamento } from "../modelos/agendamento";
import{Util} from "../uteis/Util";

export class ValidadorAgendamento {

  util = new Util();

  public validaHorasAgendamento(medicoConfiguracaoAgenda: ConfiguracaoAgenda, dataString: string, horaInicial: string, horaFinal: string,
    tipoAgendamento: ETipoAgendamento): string {
    var erro: string = "";

    if (this.util.stringParaData(dataString) == null) {
      erro = "Data inválida.";      
      return erro;
    }
    
    var data = this.util.stringParaData(dataString);

    var horasMinutosInicialAgendamento = this.util.converteHorarioParaMinutos(horaInicial);
    var horasMinutosFinalAgendamento = this.util.converteHorarioParaMinutos(horaFinal);

    if (horasMinutosInicialAgendamento >= horasMinutosFinalAgendamento) {
      erro = "Hora de agendamento inválida.";
      return erro;
    }

    if (medicoConfiguracaoAgenda != null) {
      var configuracaoAgendaDias = medicoConfiguracaoAgenda.configuracaoAgendaDias[data.getDay()];

      if (configuracaoAgendaDias != null) {

        if (!configuracaoAgendaDias.configurado) {
          erro = "Não existe configuração de agenda para este dia.";
          return erro;
        }

        
        var horasMinutoInicioConfiguracao = this.util.converteHorarioParaMinutos(configuracaoAgendaDias.primeiroHorarioInicial);
        var horasMinutoFinalConfiguracao = this.util.converteHorarioParaMinutos(configuracaoAgendaDias.segundoHorarioFinal);
        var horarioInicioIntervalo = this.util.converteHorarioParaMinutos(configuracaoAgendaDias.horarioInicioIntervalo);
        var horarioFimIntervalo = this.util.converteHorarioParaMinutos(configuracaoAgendaDias.horarioFimIntervalo);

        if (horasMinutosInicialAgendamento < horasMinutoInicioConfiguracao) {
          erro = "Hora de início do agendamento menor que a hora inicial configurada neste dia.";
          return erro;
        }

        if (horasMinutosFinalAgendamento > horasMinutoFinalConfiguracao) {
          erro = "Hora de fim do agendamento maior que a hora final configurada neste dia.";
          return erro;
        }
        
        // if (tipoAgendamento != ETipoAgendamento.Bloqueio && ((horasMinutosInicialAgendamento >= horarioInicioIntervalo && horasMinutosInicialAgendamento <= horarioFimIntervalo)
        //   || (horasMinutosFinalAgendamento >= horarioInicioIntervalo && horasMinutosFinalAgendamento <= horarioFimIntervalo)
        //   || (horasMinutosInicialAgendamento <= horarioInicioIntervalo && horasMinutosFinalAgendamento >= horarioFimIntervalo))) {
        //   erro = "Horário do agendamento sobrepõe o horário do intervalo.";
        //   return erro;
        // }

        return "";
      }
    }
    return erro;
  }

  
}