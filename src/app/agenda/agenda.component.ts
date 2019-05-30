import { ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DayViewHourSegment } from 'calendar-utils';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, isSameDay, isSameMonth } from 'date-fns';
import { addMinutes, endOfWeek } from 'date-fns';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoginService } from '../services/login.service';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../modelos/medico';
import { Router } from '@angular/router';
import { ModalAdicionaAgendamentoComponent } from './modal-adiciona-agendamento.component';
import { Agendamento } from '../modelos/agendamento';
import { Util } from '../uteis/Util';
import { AgendamentoService } from '../services/agendamento.service';
import { ValidadorAgendamento } from './validadorAgendamento';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'agenda-component.html'
})
export class AgendaComponent implements OnInit {
  @ViewChild('modalConsultaEmHorarioIntervalo') modalConsultaEmHorarioIntervalo: TemplateRef<any>;
  @ViewChild('modalExcluir') modalExcluir: TemplateRef<any>;

  eventosBanco: Agendamento[];
  validadorAgendamento = new ValidadorAgendamento();
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  dragToCreateActive = false;
  activeDayIsOpen = true;
  viewDate: Date = new Date();
  util = new Util();
  medico: Medico;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  configuracaoMinutos: number = 3;
  diasExcluidos: number[] = [];
  horaInicialCalendario = "07";
  horaFinalCalendario = "18";
  msgteste: string;

  constructor(private agendamentoService: AgendamentoService, private modalService: NgbModal, private cdr: ChangeDetectorRef, private loginService: LoginService,
    private medicoService: MedicoService, private router: Router
  ) {
  }

  ngOnInit() {
    var usuario = this.loginService.usuarioCorrenteValor;

    if (usuario.medicoId != "") {
      this.medicoService.buscarPorId(usuario.medicoId).subscribe(medico => {
        if (medico != null) {
          this.medico = medico;
          this.ajustarParametrosCalendario();

        }
      });


    }
  }

  carregarAgendamentosMedico() {
    this.agendamentoService.buscarAgendamentosMedico(this.medico.id, this.util.dataParaString(this.viewDate), this.view.valueOf())
      .subscribe(dados => {
        this.eventos = [];
        this.eventosBanco = dados;
        this.converteEAdicionaAgendamentoEvento(dados);
      })
  }

  ajustarParametrosCalendario() {

    if (this.medico != null) {

      this.carregarAgendamentosMedico();

      if (this.medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {

        var configuracaoAgenda = this.medico.configuracaoAgenda;
        this.diasExcluidos = configuracaoAgenda.diasNaoConfigurados;
        this.configuracaoMinutos = configuracaoAgenda.configuracaoMinutosAgenda;

        if (this.view == CalendarView.Week) {

          this.horaInicialCalendario = configuracaoAgenda.primeiroHorario;
          this.horaFinalCalendario = configuracaoAgenda.ultimoHorario;
        }
        else if (this.view == CalendarView.Day) {
          var configuracaoAgendaDias = configuracaoAgenda.configuracaoAgendaDias;
          var dia = this.viewDate.getDay();

          this.horaInicialCalendario = configuracaoAgendaDias[dia].segundoHorarioInicial != "" ? (parseInt(configuracaoAgendaDias[dia].primeiroHorarioInicial) < parseInt(configuracaoAgendaDias[dia].segundoHorarioInicial)
            ? configuracaoAgendaDias[dia].primeiroHorarioInicial.substring(0, 2) : configuracaoAgendaDias[dia].segundoHorarioInicial.substring(0, 2))
            : configuracaoAgendaDias[dia].primeiroHorarioInicial.substring(0, 2);

          this.horaFinalCalendario = configuracaoAgendaDias[dia].segundoHorarioFinal != "" ? (parseInt(configuracaoAgendaDias[dia].primeiroHorarioFinal) > parseInt(configuracaoAgendaDias[dia].segundoHorarioFinal)
            ? configuracaoAgendaDias[dia].primeiroHorarioFinal.substring(0, 2) : configuracaoAgendaDias[dia].segundoHorarioFinal.substring(0, 2))
            : configuracaoAgendaDias[dia].primeiroHorarioFinal.substring(0, 2);
        }
      }

      this.refreshPage();
    }
  }

  validaHoraIntervaloComponente(data: Date) {

    var retorno = false;
    let dia = data.getDay();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    if (this.medico != null) {
      var configuracaoAgendaDias = this.medico.configuracaoAgenda.configuracaoAgendaDias[dia]

      if (configuracaoAgendaDias != null) {
        var horaSegmento = hora * 60 + minutos;
        if (configuracaoAgendaDias.horarioInicioIntervalo != null) {

          var horarioInicioIntervalo = parseInt(configuracaoAgendaDias.horarioInicioIntervalo.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.horarioInicioIntervalo.substr(2, 2));
          var horarioFimIntervalo = parseInt(configuracaoAgendaDias.horarioFimIntervalo.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.horarioFimIntervalo.substr(2, 2));

          retorno = horaSegmento >= horarioInicioIntervalo && horaSegmento <= horarioFimIntervalo;
        }

        if (retorno)
          return retorno;

        //valida maior que hora fim do dia 
        var horaFim = configuracaoAgendaDias.segundoHorarioFinal == null ? parseInt(configuracaoAgendaDias.primeiroHorarioFinal.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.primeiroHorarioFinal.substr(2, 2))
          : parseInt(configuracaoAgendaDias.segundoHorarioFinal.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.segundoHorarioFinal.substr(2, 2));
        retorno = horaSegmento > horaFim;

        if (retorno)
          return retorno;

        //valida menor que hora inicio do dia 
        var horaInicio = parseInt(configuracaoAgendaDias.primeiroHorarioInicial.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.primeiroHorarioInicial.substr(2, 2));
        retorno = horaSegmento < horaInicio;
      }

    }

    return retorno;
  }

  criarEventoNoCalendarioClicado(segment: DayViewHourSegment, segmentElement: HTMLElement): CalendarEvent {
    const eventoClicado: CalendarEvent = {
      id: this.eventos.length,
      title: 'Novo Agendamento',
      start: segment.date,
      actions: this.acoesEventosCalendario,
      meta: {
        tmpEvent: true
      },
      // resizable: {
      //   beforeStart: true,
      //   afterEnd: true
      // },
      draggable: true
    };

    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate);

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          delete eventoClicado.meta.tmpEvent;
          this.dragToCreateActive = false;
          this.refreshPage();
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: MouseEvent) => {
        const minutesDiff = ceilToNearest(
          mouseMoveEvent.clientY - segmentPosition.top,
          30
        );

        const daysDiff =
          floorToNearest(
            mouseMoveEvent.clientX - segmentPosition.left,
            segmentPosition.width
          ) / segmentPosition.width;

        const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
        if (newEnd > segment.date && newEnd < endOfView) {

          console.log("new ewn", newEnd);
          //validarHoraIntervalo
          eventoClicado.end = newEnd;
          //
        }
        this.refreshPage();
      });

    return eventoClicado;
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {

    var evento = this.criarEventoNoCalendarioClicado(segment, segmentElement);
    if (this.validaHoraIntervaloComponente(segment.date)) {
      this.modalService.open(this.modalConsultaEmHorarioIntervalo).result.then(
        result => {
          if (result == 'Ok') {
            this.eventos = [...this.eventos, evento];
          }
        }, () => { });
    }
    else {
      this.eventos = [...this.eventos, evento];
    }
  }

  acoesEventosCalendario: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.deletarAgendamento(event);
      }

    }
  ];

  private refreshPage() {

    this.eventos = [...this.eventos];
    this.cdr.detectChanges();
  }

  refresh: Subject<any> = new Subject();

  eventos: CalendarEvent[] = [];

  dayClicked({ date, eventos }: { date: Date; eventos: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        eventos.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.eventos = this.eventos.map(iEvent => {
      if (iEvent === event) {
        event.start = newStart;
        event.end = newEnd;
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped', event);
  }


  handleEvent(action: string, event: CalendarEvent): void {
    console.log("ação ", action);

    let agendamentoAntigo = this.eventosBanco.find(c => c.id == event.id);

    if (action == 'Dropped') {

      let retornoValidacao = this.validadorAgendamento.validaHorasAgendamento(this.medico.configuracaoAgenda,
        event.start, event.start.toTimeString().substr(0, 5), event.end.toTimeString().substr(0, 5), ETipoAgendamento.Consulta);

      if (retornoValidacao != "") {
        if (retornoValidacao.indexOf("intervalo") > 0) {
          this.modalService.open(this.modalConsultaEmHorarioIntervalo).result.then(
            result => {
              console.log(result);
              if (result == 'Ok') {

                this.modalData = { event, action };

                agendamentoAntigo.dataAgendamento = this.util.dataParaString(event.start);
                agendamentoAntigo.horaFinal = event.end.toTimeString().substr(0, 5).replace(":", "");
                agendamentoAntigo.horaInicial = event.start.toTimeString().substr(0, 5).replace(":", "");
                this.agendamentoService.salvar(agendamentoAntigo).subscribe(c => this.carregarAgendamentosMedico());
              }
              else {
                this.eventos = this.eventos.filter(e => e.id !== event.id);
                if (agendamentoAntigo != null)
                  this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(agendamentoAntigo));
              }
            }, (erro) => {
              this.eventos = this.eventos.filter(e => e.id !== event.id);
              if (agendamentoAntigo != null)
                this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(agendamentoAntigo));
            });
        }
      }
      else {
        agendamentoAntigo.dataAgendamento = this.util.dataParaString(event.start);
        agendamentoAntigo.horaFinal = event.end.toTimeString().substr(0, 5).replace(":", "");
        agendamentoAntigo.horaInicial = event.start.toTimeString().substr(0, 5).replace(":", "");
        this.agendamentoService.salvar(agendamentoAntigo).subscribe(c => this.carregarAgendamentosMedico());
      }
    }
    else if (action == "Edited") {

      // this.modalService.open(this.modalContent, { size: 'lg' });
    }

  }

  deletarAgendamento(eventToDelete: CalendarEvent) {
    console.log("")
    this.modalService.open(this.modalExcluir).result.then(
      result => {
        if (result == 'Sim') {
          var agendamento = this.eventosBanco.find(c => c.id == eventToDelete.id);
          if (agendamento != null) {
            this.agendamentoService.Excluir(agendamento).subscribe(retorno => {
              if (retorno) {
                this.carregarAgendamentosMedico();
              }
            });
          }
        }
      }
    );

  }

  setView(view: CalendarView) {
    this.view = view;
    this.ajustarParametrosCalendario();
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  configurarAgendaMedico() {
    this.router.navigate(['/cadastros/configuracaoagenda', { id: this.medico.id }]);
  }

  converteEAdicionaAgendamentoEvento(lista: Array<Agendamento>) {
    lista.forEach(agendamento => {
      var dataHoraInicial = this.util.concatenaDataHora(agendamento.dataAgendamento, agendamento.horaInicial);

      this.eventos = [...this.eventos,
      {
        id: agendamento.id,
        start: dataHoraInicial,
        end: this.util.concatenaDataHora(agendamento.dataAgendamento, agendamento.horaFinal),
        title: this.montaTituloAgendamento(agendamento),
        color: { primary: agendamento.corFundo, secondary: agendamento.corLetra },
        actions: this.acoesEventosCalendario,
        // resizable: {
        //   beforeStart: true,
        //   afterEnd: true
        // },
        draggable: true

      }];
    });

    this.refreshPage();
  }

  adicionarNovoAgendamentoCliqueBotao() {
    var modalAdicionaAgendamento = this.modalService.open(ModalAdicionaAgendamentoComponent, { size: "lg" });
    modalAdicionaAgendamento.componentInstance.medico = this.medico;
    modalAdicionaAgendamento.result.then((agendamento: Agendamento) => {
      if (agendamento != null) {
        this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(agendamento));
      }
    }).catch((error) => { })
  }

  montaTituloAgendamento(agendamento: Agendamento): string {
    return agendamento.paciente.nomeCompleto.split(' ')[0] + "  " +
      agendamento.dataAgendamento + " " +
      agendamento.horaInicial.substring(0, 2) + ":" + agendamento.horaInicial.substring(2, 4) + " - " +
      agendamento.horaFinal.substring(0, 2) + ":" + agendamento.horaFinal.substring(2, 4);;

  }
}

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  weekTooltip(event: CalendarEvent, title: string) {
    if (!event.meta.tmpEvent) {
      return super.weekTooltip(event, title);
    }
  }

  dayTooltip(event: CalendarEvent, title: string) {
    if (!event.meta.tmpEvent) {
      return super.dayTooltip(event, title);
    }
  }
}

function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}

function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}