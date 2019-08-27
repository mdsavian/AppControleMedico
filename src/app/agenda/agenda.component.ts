import { ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DayViewHourSegment } from 'calendar-utils';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, isSameDay, isSameMonth } from 'date-fns';
import { addMinutes, endOfWeek } from 'date-fns';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppService } from '../services/app.service';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../modelos/medico';
import { Router } from '@angular/router';
import { ModalAdicionaAgendamentoComponent } from './modal-adiciona-agendamento.component';
import { ModalAberturaCaixaComponent } from '../cadastros/caixa/modal-abertura-caixa.component';
import { ModalFechamentoCaixaComponent } from '../cadastros/caixa/modal-fechamento-caixa.component';
import { ModalSucessoComponent } from '../shared/modal/modal-sucesso.component';
import { Agendamento } from '../modelos/agendamento';
import { Util } from '../uteis/Util';
import { AgendamentoService } from '../services/agendamento.service';
import { ValidadorAgendamento } from './validadorAgendamento';
import { ESituacaoAgendamento } from '../enums/ESituacaoAgendamento';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { EConfiguracaoMinutosAgenda } from '../enums/EConfiguracaoMinutosAgenda';
import { Funcionario } from '../modelos/funcionario';
import { FuncionarioService } from '../services/funcionario.service';
import { CaixaService } from '../services/caixa.service';
import { ModalErrorComponent } from '../shared/modal/modal-error.component';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'agenda.component.html'
})
export class AgendaComponent implements OnInit {

  @ViewChild('modalConsultaEmHorarioIntervalo', { read: TemplateRef, static: false }) modalConsultaEmHorarioIntervalo: TemplateRef<any>;
  @ViewChild('modalAberturaCaixa', { read: TemplateRef, static: false }) modalAberturaCaixa: TemplateRef<any>;
  @ViewChild('modalAcaoAgendamento', { read: TemplateRef, static: false }) modalAcaoAgendamento: TemplateRef<any>;
  @ViewChild('modalAcoes', { read: TemplateRef, static: false }) modalAcoes: TemplateRef<any>;

  acaoAgendamento = "";
  eventosBanco: Agendamento[];
  validadorAgendamento = new ValidadorAgendamento();
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Day;
  dragToCreateActive = false;
  activeDayIsOpen = true;
  mensagemCaixaAberto = "";
  viewDate: Date = new Date();
  util = new Util();
  medico: Medico;
  funcionario: Funcionario;
  medicos: Medico[] = [];
  visualizaBotoesAberturaFechamentoCaixa = false;
  configuracaoMinutos: number = 3;
  diasExcluidos: number[] = [];
  horaInicialCalendario = "07";
  horaFinalCalendario = "18";
  msgteste: string;

  constructor(private agendamentoService: AgendamentoService, private caixaService: CaixaService, private modalService: NgbModal, private cdr: ChangeDetectorRef,
    private appService: AppService, private funcionarioService: FuncionarioService, private medicoService: MedicoService, private router: Router) {
  }

  ngOnInit() {

    var usuario = this.appService.retornarUsuarioCorrente();

    if (!this.util.isNullOrWhitespace(usuario.funcionarioId)) {
      this.funcionarioService.buscarComMedicos(usuario.funcionarioId).subscribe(func => {
        this.funcionario = func;
        this.medicos = func.medicos;
        this.medico = func.medicos.find(c => true);
        this.visualizaBotoesAberturaFechamentoCaixa = true;
        this.caixaService.retornarCaixaAbertoFuncionario(func.id).subscribe(caixa => {
          if (caixa != null) {
            this.mensagemCaixaAberto = "Caixa aberto por " + func.nomeCompleto + " em " + this.util.formatarData(caixa.dataAbertura)
              + " " + this.util.formatarHora(caixa.horaAbertura);
          }

        });
        this.carregarConfiguracaoMedico();

      });
    }
    else if (!this.util.isNullOrWhitespace(usuario.medicoId)) {
      this.medicoService.buscarPorId(usuario.medicoId).subscribe(medic => {

        this.visualizaBotoesAberturaFechamentoCaixa = false;
        this.medicos.push(medic);
        this.medico = this.medicos.find(c => true);
        this.carregarConfiguracaoMedico();
      });
    }
  }

  carregarConfiguracaoMedico() {
    if (!this.util.isNullOrWhitespace(this.medico.configuracaoAgendaId) && this.medico.configuracaoAgenda == null) {
      this.medicoService.buscarConfiguracaoAgendaMedico(this.medico.configuracaoAgendaId).subscribe(config => {
        this.medico.configuracaoAgenda = config;
        this.ajustarParametrosCalendario();
      });
    }
  }
  converteCalendarEventParaAgendamento(evento: CalendarEvent): Agendamento {
    var novoAgendamento = new Agendamento();

    novoAgendamento.dataAgendamento = this.util.dataParaString(evento.start);
    if (evento.start != null)
      novoAgendamento.horaInicial = evento.start.toTimeString().substr(0, 5).replace(":", "");

    if (evento.end != null)
      novoAgendamento.horaFinal = evento.end.toTimeString().substr(0, 5).replace(":", "");
    else {

      var minutosFinal = 0;

      var horaFinal = new Date();
      horaFinal.setDate(evento.start.getDate());

      switch (this.medico.configuracaoAgenda.configuracaoMinutosAgenda) {
        case (EConfiguracaoMinutosAgenda["1 Hora"]):
          minutosFinal = 60;
          break;
        case (EConfiguracaoMinutosAgenda["5 Minutos"]):
          minutosFinal = 5;
          break;
        case (EConfiguracaoMinutosAgenda["10 Minutos"]):
          minutosFinal = 10;
          break;
        case (EConfiguracaoMinutosAgenda["15 Minutos"]):
          minutosFinal = 15;
          break;
        case (EConfiguracaoMinutosAgenda["20 Minutos"]):
          minutosFinal = 20;
          break;
        case (EConfiguracaoMinutosAgenda["30 Minutos"]):
          minutosFinal = 30;
          break;
      }

      if (minutosFinal == 60) {
        horaFinal.setHours(evento.start.getHours() + 1);
        horaFinal.setMinutes(evento.start.getMinutes(), 0);
      }
      else {
        horaFinal.setHours(evento.start.getHours());
        horaFinal.setMinutes(evento.start.getMinutes() + minutosFinal, 0);
      }
      novoAgendamento.horaFinal = horaFinal.toTimeString().substr(0, 5).replace(":", "");
    }
    return novoAgendamento;

  }

  carregarAgendamentosMedico() {
    this.agendamentoService.buscarAgendamentosMedico(this.medico.id, this.util.dataParaString(this.viewDate), this.view.valueOf())
      .subscribe(dados => {
        this.eventos = [];
        this.eventosBanco = dados;
        this.converteEAdicionaAgendamentoEvento(dados);
      });
  }

  ajustarParametrosCalendario() {

    if (this.medico != null) {
      this.carregarAgendamentosMedico();

      if (this.medico.configuracaoAgenda != null && this.medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {
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

    if (this.medico != null && this.medico.configuracaoAgenda != null) {
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
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
      // draggable: true
    };

    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate);
    let criadoEvento = false;
    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {

          delete eventoClicado.meta.tmpEvent;
          this.dragToCreateActive = false;

          if (eventoClicado.end != null) {
            let retornoValidacao = this.validadorAgendamento.validaHorasAgendamento(this.medico.configuracaoAgenda,
              this.util.dataParaString(eventoClicado.start), eventoClicado.start.toTimeString().substr(0, 5), eventoClicado.end.toTimeString().substr(0, 5), ETipoAgendamento.Consulta);

            if (retornoValidacao != "") {
              if (retornoValidacao.indexOf("intervalo") > 0) {
                this.modalService.open(this.modalConsultaEmHorarioIntervalo).result.then(
                  result => {
                    if (result == 'Ok') {
                      // this.eventos = [...this.eventos, eventoClicado];
                      var novoAgendamento = this.converteCalendarEventParaAgendamento(eventoClicado);
                      this.chamarModalAdicionaAgendamento(novoAgendamento);
                    }
                  }, (erro) => {
                  });
              }
            }
            else {
              // this.eventos = [...this.eventos, eventoClicado];
              criadoEvento = true;
            }
          }
          else { //só tem data inicial - utiliza o validador do component, mesmo utilizado em tela para os horários

            if (this.validaHoraIntervaloComponente(segment.date)) {
              this.modalService.open(this.modalConsultaEmHorarioIntervalo).result.then(
                result => {
                  if (result == 'Ok') {
                    // this.eventos = [...this.eventos, eventoClicado];
                    var novoAgendamento = this.converteCalendarEventParaAgendamento(eventoClicado);
                    this.chamarModalAdicionaAgendamento(novoAgendamento);
                  }
                }, () => { });
            }
            else {
              // this.eventos = [...this.eventos, eventoClicado];
              criadoEvento = true;
            }
          }

          this.refreshPage();

          if (criadoEvento) {
            var novoAgendamento = this.converteCalendarEventParaAgendamento(eventoClicado);
            this.chamarModalAdicionaAgendamento(novoAgendamento);
          }
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
          eventoClicado.end = newEnd;
        }
        this.refreshPage();
      });

    return eventoClicado;
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    this.criarEventoNoCalendarioClicado(segment, segmentElement);
  }

  acoesEventosCalendario: CalendarEventAction[] = [
    // {
    //   label: '<i class="fa fa-fw fa-calendar-check-o" title="Confirmar"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.actionAgendamento(event, "Confirmar");
    //   }
    // },
    // {
    //   label: '<i class="fa fa-fw fa-money" title="Pagar e Finalizar"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.actionAgendamento(event, "PagarFinalizar");
    //   }
    // },
    // {
    //   label: '<i class="fa fa-fw fa-pencil" title="Editar"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.actionAgendamento(event, "Editar");

    //   }
    // },
    // {
    //   label: '<i class="fa fa-fw fa-times" title="Cancelar"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.actionAgendamento(event, "Cancelar");

    //   }
    // },
    // {
    //   label: '<i class="fa fa-fw fa-trash" title="Excluir"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.actionAgendamento(event, "Excluir");

    //   }
    // }
  ];

  actionAgendamento(evento: CalendarEvent, acao: string) {
    this.modalService.open(this.modalAcoes).result.then(result => {
      switch (result) {
        case ("Editar"):
          this.agendamentoService.buscarPorId(evento.id.toString()).subscribe(agendamento => {
            this.chamarModalAdicionaAgendamento(agendamento, "editar");
          });
          break;
        case ("Confirmar"):
          this.agendamentoService.buscarPorId(evento.id.toString()).subscribe(agendamento => {
            this.acaoAgendamento = "Confirmar";
            this.modalService.open(this.modalAcaoAgendamento).result.then(
              result => {
                if (result == 'Sim') {
                  agendamento = this.validadorAgendamento.tratarCorAgendamento(agendamento);
                  agendamento.situacaoAgendamento = ESituacaoAgendamento["Confirmado"];
                  this.agendamentoService.salvar(agendamento).subscribe(retorno => {
                    if (retorno) {
                      this.carregarAgendamentosMedico();
                    }
                  });
                }
              },
              (() => { })
            );

          });
          break;
        case ("PagarFinalizar"):

          // this.agendamentoService.buscarPorId(evento.id.toString()).subscribe(agendamento => {
          //   this.chamarModalAdicionaAgendamento(agendamento);
          // });        
          break;
        case ("Cancelar"):
          this.agendamentoService.buscarPorId(evento.id.toString()).subscribe(agendamento => {
            this.acaoAgendamento = "Cancelar";
            this.modalService.open(this.modalAcaoAgendamento).result.then(
              result => {
                if (result == 'Sim') {
                  agendamento.situacaoAgendamento = ESituacaoAgendamento["Cancelado"];
                  agendamento.corFundo = "#000000";
                  this.agendamentoService.salvar(agendamento).subscribe(retorno => {
                    if (retorno) {
                      this.carregarAgendamentosMedico();
                    }
                  });
                }
              },
              (() => { })
            );
          });

          break;
        case ("Excluir"):
          this.agendamentoService.buscarPorId(evento.id.toString()).subscribe(agendamento => {
            this.acaoAgendamento = "Excluir";
            this.modalService.open(this.modalAcaoAgendamento).result.then(
              result => {
                if (result == 'Sim') {
                  this.agendamentoService.Excluir(agendamento.id).subscribe(retorno => {
                    if (retorno) {
                      this.carregarAgendamentosMedico();
                    }
                  });
                }
              },
              (() => { })
            );
          });
          break;
      }
    },
      (() => { }));
  }

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
    this.DroppedResizedEvent(event);
  }


  DroppedResizedEvent(event: CalendarEvent): void {


    let agendamentoAntigo = this.eventosBanco.find(c => c.id == event.id);
    let retornoValidacao = this.validadorAgendamento.validaHorasAgendamento(this.medico.configuracaoAgenda,
      this.util.dataParaString(event.start), event.start.toTimeString().substr(0, 5), event.end.toTimeString().substr(0, 5), ETipoAgendamento.Consulta);

    if (retornoValidacao != "") {
      if (retornoValidacao.indexOf("intervalo") > 0) {
        this.modalService.open(this.modalConsultaEmHorarioIntervalo).result.then(
          result => {
            if (result == 'Ok') {
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

  setView(view: CalendarView) {
    this.view = view;
    this.ajustarParametrosCalendario();
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  configurarAgendaMedico() {
    this.medicoService.medico = this.medico;
    this.router.navigate(['/cadastros/configuracaoagenda']);
  }

  converteEAdicionaAgendamentoEvento(lista: Array<Agendamento>) {
    lista.forEach(agendamento => {
      var dataHoraInicial = this.util.concatenaDataHora(agendamento.dataAgendamento, agendamento.horaInicial);

      var eventoVelho = this.eventos.find(c => c.id == agendamento.id);
      if (eventoVelho != null) {
        var index = this.eventos.indexOf(eventoVelho);
        this.eventos.splice(index, 1);
      }

      this.eventos = [...this.eventos,
      {
        id: agendamento.id,
        start: dataHoraInicial,
        end: this.util.concatenaDataHora(agendamento.dataAgendamento, agendamento.horaFinal),
        title: this.montaTituloAgendamento(agendamento),
        color: { primary: agendamento.corFundo, secondary: agendamento.corFundo },
        actions: this.acoesEventosCalendario,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
        // draggable: true
      }];
    });

    this.refreshPage();
  }

  chamarModalAdicionaAgendamento(agendamento: Agendamento, acao: string = "") {

    var modalAdicionaAgendamento = this.modalService.open(ModalAdicionaAgendamentoComponent, { size: "lg" });
    modalAdicionaAgendamento.componentInstance.medico = this.medico;

    if (agendamento != null)
      modalAdicionaAgendamento.componentInstance.agendamento = agendamento;

    if (acao == "editar") {
      modalAdicionaAgendamento.componentInstance.editando = true;
    }

    modalAdicionaAgendamento.result.then((agendamento: Agendamento) => {
      if (agendamento != null) {
        this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(agendamento));
      }
    }).catch((error) => { })
  }

  abrirFecharCaixa(acao: string) {
    if (acao == "abrir") {
      this.modalService.open(ModalAberturaCaixaComponent, { size: "lg" }).result.then(
        caixa => {
          if (caixa != null && !this.util.isNullOrWhitespace(caixa.dataAbertura)) {
            var modal = this.modalService.open(ModalSucessoComponent, { windowClass: "modal-holder modal-error" });
            modal.componentInstance.mensagem = "Caixa aberto com sucesso.";
          }

        }
        , (erro) => {
        });
    }
    else if (acao == "fechar") {
      this.modalService.open(ModalFechamentoCaixaComponent, { size: "lg" }).result.then(
        caixa => {
          if (caixa != null && !this.util.isNullOrWhitespace(caixa.dataFechamento)) {
            var modal = this.modalService.open(ModalSucessoComponent, { windowClass: "modal-holder modal-error" });
            modal.componentInstance.mensagem = "Caixa fechado com sucesso.";
          }
        }
        , (erro) => {
        });
    }
  }

  montaTituloAgendamento(agendamento: Agendamento): string {
    if (agendamento.paciente != null) {
      return agendamento.paciente.nomeCompleto.split(' ')[0] + " - " +
        agendamento.convenio.descricao.toUpperCase() + " - " +
        agendamento.horaInicial.substring(0, 2) + ":" + agendamento.horaInicial.substring(2, 4) + " até " +
        agendamento.horaFinal.substring(0, 2) + ":" + agendamento.horaFinal.substring(2, 4) + " - " +
        ESituacaoAgendamento[agendamento.situacaoAgendamento].toUpperCase();
    }
    else if (agendamento.tipoAgendamento == ETipoAgendamento.Bloqueio)
      return "AGENDA BLOQUEADA";
    return "";

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