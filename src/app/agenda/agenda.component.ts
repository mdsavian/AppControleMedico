import { ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, ViewEncapsulation, Component, OnInit, NgModuleFactoryLoader, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DayViewHourSegment } from 'calendar-utils';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
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
import { ETipoAgendamento } from '../enums/ETipoAgendamento';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'agenda-component.html'
})
export class AgendaComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('modalConsultaEmHorarioIntervalo') modalConsultaEmHorarioIntervalo: TemplateRef<any>;


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

  ajustarParametrosCalendario() {

    if (this.medico != null && this.medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {

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

      this.refreshPage();
    }
  }

  validaHoraIntervalo(segment: DayViewHourSegment) {
    var retorno = false;

    if (this.medico != null) {
      var configuracaoAgendaDias = this.medico.configuracaoAgenda.configuracaoAgendaDias[segment.date.getDay()]

      if (configuracaoAgendaDias != null) {
        var horaSegmento = segment.date.getHours() * 60 + segment.date.getMinutes();
        if (configuracaoAgendaDias.horarioInicioIntervalo != null) {

          var horarioInicioIntervalo = parseInt(configuracaoAgendaDias.horarioInicioIntervalo.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.horarioInicioIntervalo.substr(2, 2));
          var horarioFimIntervalo = parseInt(configuracaoAgendaDias.horarioFimIntervalo.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.horarioFimIntervalo.substr(2, 2));

          retorno = horaSegmento >= horarioInicioIntervalo && horaSegmento <= horarioFimIntervalo;
        }

        if (retorno)
          return retorno;

        var horaFim = configuracaoAgendaDias.segundoHorarioFinal == null ? parseInt(configuracaoAgendaDias.primeiroHorarioFinal.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.primeiroHorarioFinal.substr(2, 2))
          : parseInt(configuracaoAgendaDias.segundoHorarioFinal.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.segundoHorarioFinal.substr(2, 2));
        retorno = horaSegmento > horaFim;
        if (retorno)
          return retorno;
        var horaInicio = parseInt(configuracaoAgendaDias.primeiroHorarioInicial.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.primeiroHorarioInicial.substr(2, 2));
        retorno = horaSegmento < horaInicio;
      }

    }

    return retorno;
  }

  criarEventoNoCalendarioClicado(segment: DayViewHourSegment, segmentElement: HTMLElement): CalendarEvent {
    console.log(segment.date);
    const dragToSelectEvent: CalendarEvent = {
      id: this.eventos.length,
      title: 'Novo Agendamento',
      start: segment.date,
      actions: this.acoesEventosCalendario,
      meta: {
        tmpEvent: true
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    };

    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate);

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          delete dragToSelectEvent.meta.tmpEvent;
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
          dragToSelectEvent.end = newEnd;
          //
        }
        this.refreshPage();
      });

    console.log("drag end ", dragToSelectEvent, dragToSelectEvent.end);

    return dragToSelectEvent;
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    var evento = this.criarEventoNoCalendarioClicado(segment, segmentElement);
    console.log("evento criado", evento);

    if (this.validaHoraIntervalo(segment)) {
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
        this.eventos = this.eventos.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }

    }
  ];

  private refreshPage() {

    this.eventos = [...this.eventos];
    this.cdr.detectChanges();
  }

  refresh: Subject<any> = new Subject();

  eventos: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.acoesEventosCalendario,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

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
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log("clique evento", event);
    this.modalData = { event, action };
    this.modalService.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.eventos = [
      ...this.eventos,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.eventos = this.eventos.filter(event => event !== eventToDelete);
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

  adicionarNovoAgendamento() {
    var modalAdicionaAgendamento = this.modalService.open(ModalAdicionaAgendamentoComponent, { size: "lg" });
    modalAdicionaAgendamento.componentInstance.medico = this.medico;
    modalAdicionaAgendamento.result.then((agendamento: Agendamento) => {
      console.log(agendamento);
      if (agendamento != null) {
        
        this.eventos = [...this.eventos,
        {
          start: agendamento.dataAgendamentoInicial,
          end: agendamento.dataAgendamentoFinal,
          title: agendamento.paciente.nomeCompleto + "  " + agendamento.dataAgendamentoInicial.toTimeString(),
          color: {primary: agendamento.cor, secondary: agendamento.cor},
          actions: this.acoesEventosCalendario,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true

        }];
      }
    }).catch((error) => { })
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