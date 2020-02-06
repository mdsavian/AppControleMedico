import { ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbCalendar, NgbDate, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { DayViewHourSegment } from 'calendar-utils';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, isSameDay, isSameMonth } from 'date-fns';
import { addMinutes, endOfWeek } from 'date-fns';
import { fromEvent, forkJoin } from 'rxjs';
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
import { Funcionario } from '../modelos/funcionario';
import { CaixaService } from '../services/caixa.service';
import { ModalErrorComponent } from '../shared/modal/modal-error.component';
import { ModalAcoesAgendamentoComponent } from './modal-acoes-agendamento.component';
import { ModalDetalhesAgendamentoComponent } from './modal-detalhes-agendamento.component';
import { CirurgiaService } from '../services/cirurgia.service';
import { PacienteService } from '../services/paciente.service';
import { ProcedimentoService } from '../services/procedimento.service';
import { ConvenioService } from '../services/convenio.service'; ''
import { LocalService } from '../services/local.service';
import { ExameService } from '../services/exame.service';
import { Paciente } from '../modelos/paciente';
import { Cirurgia } from '../modelos/cirurgia';
import { Convenio } from '../modelos/convenio';
import { Exame } from '../modelos/exame';
import { Procedimento } from '../modelos/procedimento';
import { Local } from '../modelos/local';
import { ConfiguracaoAgendaService } from '../services/configuracaoAgenda.service';
import { ConfiguracaoAgenda } from '../modelos/configuracaoAgenda';
import { FormaDePagamentoService } from '../services/forma-de-pagamento.service';
import { FormaDePagamento } from '../modelos/formaDePagamento';
import { UploadService } from '../services/upload.service';
import { ModalExtraCaixaComponent } from '../cadastros/extra-caixa/modal-extra-caixa.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, //com esta propriedade ativa a cada mudança deve ser chamado o refresh page manualmente
  styleUrls: ['styles.css'],
  templateUrl: 'agenda.component.html'
})
export class AgendaComponent implements OnInit {

  @ViewChild('modalAgendamentoEmHorarioIntervalo', { read: TemplateRef, static: false }) modalAgendamentoEmHorarioIntervalo: TemplateRef<any>;
  @ViewChild('modalAcaoAgendamento', { read: TemplateRef, static: false }) modalAcaoAgendamento: TemplateRef<any>;
  @ViewChild('datePickerNgb', { read: NgbInputDatepicker, static: false }) datePickerNgb: NgbInputDatepicker;

  acaoAgendamento = "";
  agendamento: Agendamento;
  eventosBanco: Array<Agendamento>;
  validadorAgendamento = new ValidadorAgendamento();
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  dragToCreateActive = false;
  activeDayIsOpen = true;
  mensagemCaixaAberto = "";
  viewDate: Date = new Date();
  util = new Util();
  medico: Medico;
  funcionario: Funcionario;
  medicos: Medico[] = new Array<Medico>();
  configuracaoMinutos: number = 3;
  diasExcluidos: number[] = [];
  horaInicialCalendario = "07";
  horaFinalCalendario = "18";
  isSpinnerVisible = false;
  isSpinnerVisibleAgenda = false;
  exames: Array<Exame> = [];
  convenios: Array<Convenio> = [];
  cirurgias: Array<Cirurgia> = [];
  pacientes: Array<Paciente> = [];
  locais: Array<Local> = [];
  dataPicker: NgbDateStruct;
  procedimentos: Array<Procedimento> = [];
  formaDePagamentos = new Array<FormaDePagamento>();
  constructor(private agendamentoService: AgendamentoService, private calendar: NgbCalendar, private caixaService: CaixaService, private modalService: NgbModal, private cdr: ChangeDetectorRef,
    private appService: AppService, private configuracaoAgendaService: ConfiguracaoAgendaService, private medicoService: MedicoService, private router: Router,
    private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService, private localService: LocalService, private exameService: ExameService,
    private pacienteService: PacienteService, private convenioService: ConvenioService, private formaPagamentoService: FormaDePagamentoService, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.isSpinnerVisible = true;

    this.buscarModelosNovoAgendamento().subscribe(c => {
      if (this.medicos.find(c => !this.util.isNullOrWhitespace(c.fotoId)) != null) {

        this.buscarFotoMedicos().subscribe(c => {

          this.isSpinnerVisible = false;
          this.refreshPage();

        });
      }
      else {
        this.isSpinnerVisible = false;
        this.refreshPage();
      }
    });
  }

  buscarModelosNovoAgendamento() {
    let requisicoes = [];

    var usuario = this.appService.retornarUsuarioCorrente();

    let reqPaciente = this.pacienteService.Todos().map(dados => {
      this.pacientes = dados;
    });

    let reqExames = this.exameService.Todos().map(dados => { this.exames = dados; });
    let reqLocais = this.localService.Todos().map(dados => { this.locais = dados; });
    let reqCirurgias = this.cirurgiaService.Todos().map(dados => { this.cirurgias = dados; });
    let reqProcedimento = this.procedimentoService.Todos().map(dados => { this.procedimentos = dados; });

    let reqFormas = this.formaPagamentoService.Todos().map(formas => {
      this.formaDePagamentos = formas;
    });

    requisicoes = [reqPaciente, reqFormas, reqExames, reqLocais, reqCirurgias, reqProcedimento];



    let reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(dados => {

      if (dados.length > 1) {

        let medicoTodos = new Medico();
        medicoTodos.nomeCompleto = "Todos";
        medicoTodos.id = "";
        medicoTodos.foto = '../../assets/images/fotoCadastro.jpg';
        this.medicos.push(medicoTodos);

        //adiciona depois para o Todos ficar encima
        this.medicos = this.medicos.concat(dados);

        this.medico = this.medicos.find(c => c == medicoTodos);

      }
      else {
        this.medicos = dados;
        this.medico = this.medicos.find(c => true);
      }

      //quando usuário for um médico traz ele selecionado primeiro
      if (!this.util.isNullOrWhitespace(usuario.medicoId)) {
        this.medico = this.medicos.find(c => c.id == usuario.medicoId);
      }

      this.trocaMedico(this.medico.id);


    });

    requisicoes.push(reqMedicos);

    return forkJoin(requisicoes);

  }

  buscarFotoMedicos() {
    let reqFotos = [];

    this.medicos.forEach(medico => {

      if (!this.util.isNullOrWhitespace(medico.fotoId)) {
        let reqFoto = this.uploadService.downloadImagem(medico.id, "medico").map(byte => {
          medico.foto = "data:image/jpeg;base64," + byte['value'];
        });
        reqFotos.push(reqFoto);
      }
      else
        medico.foto = '../../assets/images/fotoCadastro.jpg';
    });

    return forkJoin(reqFotos);
  }

  tratarMedicosParaBuscaAgendamento() {
    var medicosABuscar = "";

    if (this.selecionadoTodosMedicos()) {
      this.medicos.filter(c => c.nomeCompleto != "Todos").forEach(medico => {
        medicosABuscar = medicosABuscar + medico.id + ",";
      });
    }
    else
      medicosABuscar = this.medico.id;

    return medicosABuscar;
  }

  buscarInformacoesMedico() {

    if (this.medico != null) {

      let observableBatch = [];

      //busca convenios do medico
      let reqConvenios = this.selecionadoTodosMedicos() ? this.convenioService.Todos().map(dados => { this.convenios = dados; })
        : this.convenioService.TodosFiltrandoMedico(this.medico.id).map(dados => { this.convenios = dados; });
      observableBatch.push(reqConvenios);

      let medicosABuscar = this.tratarMedicosParaBuscaAgendamento();

      let reqAgendamentos = this.agendamentoService.buscarAgendamentosMedico(medicosABuscar, this.util.dataParaString(this.viewDate), this.view.valueOf(), this.appService.retornarClinicaCorrente().id)
        .map(dados => {
          this.eventos = [];
          this.eventosBanco = new Array<Agendamento>();
          if (this.util.hasItems(dados))
            this.converteEAdicionaAgendamentoEvento(dados);
        });

      observableBatch.push(reqAgendamentos);

      //Busca configuração do médico
      if (!this.selecionadoTodosMedicos()) {

        let reqConfiguracao = this.configuracaoAgendaService.buscarConfiguracaoAgenda(this.medico.id, this.appService.retornarClinicaCorrente().id).map(config => {
          if (config == null) {
            var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
            modal.componentInstance.mensagemErro = "Não existe configuração de agenda para o médico selecionado";
            this.configuracaoMinutos = 3;
            this.diasExcluidos = [];
            this.horaInicialCalendario = "08";
            this.horaFinalCalendario = "18";
          }
          else {
            this.medico.configuracaoAgenda = config;
            this.ajustarParametrosCalendario();
          }
        });
        observableBatch.push(reqConfiguracao);
      }
      else {
        this.medico.configuracaoAgenda = new ConfiguracaoAgenda();
        this.ajustarParametrosCalendario();
      }

      return forkJoin(observableBatch);
    }
  }

  selecionadoTodosMedicos() {
    return this.medico.nomeCompleto == "Todos";
  }

  trocaMedico(id: string) {
    this.medico = this.medicos.find(c => c.id == id);

    this.isSpinnerVisibleAgenda = true;
    this.buscarInformacoesMedico().subscribe(c => {
      this.isSpinnerVisibleAgenda = false;
      this.refreshPage();
    });
  }

  ajustarParametrosCalendario() {
    if (this.medico != null && this.medico.configuracaoAgenda != null && this.medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {

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
  }

  validaHoraIntervaloComponente(data: Date) {
    var retorno = false;
    let dia = data.getDay();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    if (this.medico != null && this.medico.configuracaoAgenda != null) {
      var configuracaoAgendaDias = this.medico.configuracaoAgenda.configuracaoAgendaDias[dia]

      var minutosFinal = this.configuracaoAgendaService.retornarMinutosConfiguracao(this.medico.configuracaoAgenda.configuracaoMinutosAgenda);

      if (configuracaoAgendaDias != null) {
        var horaSegmentoInicial = hora * 60 + minutos;
        var horaSegmentoFinal = hora * 60 + minutos + minutosFinal;
        if (configuracaoAgendaDias.horarioInicioIntervalo != null) {

          var horarioInicioIntervalo = this.validadorAgendamento.converteHorarioParaMinutos(configuracaoAgendaDias.horarioInicioIntervalo);
          var horarioFimIntervalo = this.validadorAgendamento.converteHorarioParaMinutos(configuracaoAgendaDias.horarioFimIntervalo);

          retorno = ((horaSegmentoInicial >= horarioInicioIntervalo && horaSegmentoInicial <= horarioFimIntervalo)
            || (horaSegmentoFinal >= horarioInicioIntervalo && horaSegmentoFinal <= horarioFimIntervalo)
            || (horaSegmentoInicial <= horarioInicioIntervalo && horaSegmentoInicial >= horarioFimIntervalo));
        }

        if (retorno)
          return retorno;

        //valida maior que hora fim do dia 
        var horaFim = configuracaoAgendaDias.segundoHorarioFinal == null ? parseInt(configuracaoAgendaDias.primeiroHorarioFinal.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.primeiroHorarioFinal.substr(2, 2))
          : parseInt(configuracaoAgendaDias.segundoHorarioFinal.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.segundoHorarioFinal.substr(2, 2));
        retorno = horaSegmentoInicial > horaFim;

        if (retorno)
          return retorno;

        //valida menor que hora inicio do dia 
        var horaInicio = parseInt(configuracaoAgendaDias.primeiroHorarioInicial.substr(0, 2)) * 60 + parseInt(configuracaoAgendaDias.primeiroHorarioInicial.substr(2, 2));
        retorno = horaSegmentoInicial < horaInicio;
      }
    }
    return retorno;
  }

  criarEventoNoCalendarioClicado(segment: DayViewHourSegment, segmentElement: HTMLElement): CalendarEvent {
    const eventoClicado: CalendarEvent = {
      id: this.eventos.length,
      title: 'Novo Agendamento',
      start: segment.date,
      // actions: this.acoesEventosCalendario,
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
                this.modalService.open(this.modalAgendamentoEmHorarioIntervalo).result.then(
                  result => {
                    if (result == 'Ok') {
                      // this.eventos = [...this.eventos, eventoClicado];
                      var novoAgendamento = this.converteCalendarEventParaAgendamento(eventoClicado);

                      this.chamarModalAdicionaAgendamento(novoAgendamento, "novo");
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
              this.modalService.open(this.modalAgendamentoEmHorarioIntervalo).result.then(
                result => {
                  if (result == 'Ok') {
                    // this.eventos = [...this.eventos, eventoClicado];
                    var novoAgendamento = this.converteCalendarEventParaAgendamento(eventoClicado);

                    this.chamarModalAdicionaAgendamento(novoAgendamento, "novo");
                  }
                }, () => { });
            }
            else {
              // this.eventos = [...this.eventos, eventoClicado];
              criadoEvento = true;
            }
          }
          if (criadoEvento) {
            var novoAgendamento = this.converteCalendarEventParaAgendamento(eventoClicado);

            this.chamarModalAdicionaAgendamento(novoAgendamento, "novo");
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
      });

    return eventoClicado;
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    this.criarEventoNoCalendarioClicado(segment, segmentElement);
  }

  actionAgendamento(evento: CalendarEvent) {

    var agendamento = this.eventosBanco.find(c => c.id == evento.id.toString());

    if (agendamento != null) {

      if (agendamento.situacaoAgendamento == ESituacaoAgendamento["Em Atendimento"]
        && !this.util.isNullOrWhitespace(this.appService.retornarUsuarioCorrente().medicoId)) {

        this.agendamentoService.agendamento = agendamento;
        this.router.navigate(['/agenda/atendimento']);

        // this.chamarModalAdicionaAgendamento(agendamento, "editar");
      }
      else {

        var modalAcoes = this.modalService.open(ModalAcoesAgendamentoComponent, { windowClass: 'modal-xl' });
        modalAcoes.componentInstance.agendamento = agendamento;

        modalAcoes.result.then(result => {
          switch (result) {
            case ("Detalhes"):
              var modalDetalhesAgendamento = this.modalService.open(ModalDetalhesAgendamentoComponent, { size: "lg" });
              modalDetalhesAgendamento.componentInstance.agendamento = agendamento;
              break;

            case ("Editar"):
              this.chamarModalAdicionaAgendamento(agendamento, "editar");
              break;

            case ("Encaixar"): {

              var novoAgendamento = new Agendamento();
              novoAgendamento.dataAgendamento = agendamento.dataAgendamento;
              novoAgendamento.horaInicial = agendamento.horaInicial;
              novoAgendamento.horaFinal = agendamento.horaFinal;
              novoAgendamento.encaixado = true;
              novoAgendamento.medico = agendamento.medico;
              novoAgendamento.medicoId = agendamento.medicoId;
              novoAgendamento.clinicaId = agendamento.clinicaId;


              this.chamarModalAdicionaAgendamento(novoAgendamento);
              break;
            }

            case ("IniciarAtendimento"):
              this.acaoAgendamento = "Iniciar";
              this.modalService.open(this.modalAcaoAgendamento).result.then(
                result => {
                  if (result == 'Sim') {

                    agendamento.dataInicioAtendimento = new Date();
                    agendamento.horaInicialAtendimento = this.util.horaAgoraString();
                    agendamento.situacaoAgendamento = ESituacaoAgendamento["Em Atendimento"];

                    this.agendamentoService.agendamento = agendamento;

                    this.router.navigate(['/agenda/atendimento']);



                    //agendamento.corFundo = "#000000";
                    // this.agendamentoService.salvar(agendamento).subscribe(retorno => {
                    //   if (retorno) {
                    //     this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(retorno));
                    //   }
                    //   this.chamarModalAdicionaAgendamento(agendamento, "editar");

                    // });
                  }
                },
                (() => { })
              );

              break;

            case ("Confirmar"):
              this.acaoAgendamento = "Confirmar";
              this.modalService.open(this.modalAcaoAgendamento).result.then(
                result => {
                  if (result == 'Sim') {
                    agendamento = this.agendamentoService.tratarCorAgendamento(agendamento, this.exames, this.cirurgias, this.procedimentos);
                    agendamento.situacaoAgendamento = ESituacaoAgendamento.Confirmado;
                    this.agendamentoService.salvar(agendamento).subscribe(retorno => {
                      if (retorno) {
                        this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(retorno));
                      }
                    });
                  }
                },
                (() => { })
              );
              break;

            case ("Pagar"):
              this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
                if (!this.util.hasItems(caixas)) {
                  var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
                  modal.componentInstance.mensagemErro = "Não existe caixa aberto, abra um caixa para proceder com o pagamento.";
                }
                else {
                  this.chamarModalAdicionaAgendamento(agendamento, "pagar");
                }
              });
              break;

            case ("Cancelar"):
              this.acaoAgendamento = "Cancelar";
              this.modalService.open(this.modalAcaoAgendamento).result.then(
                result => {
                  if (result == 'Sim') {
                    agendamento.situacaoAgendamento = ESituacaoAgendamento.Cancelado;
                    agendamento.corFundo = "#000000";
                    this.agendamentoService.salvar(agendamento).subscribe(retorno => {
                      if (retorno) {
                        this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(retorno));
                      }
                    });
                  }
                },
                (() => { })
              );
              break;

            case ("Excluir"):
              this.acaoAgendamento = "Excluir";
              this.modalService.open(this.modalAcaoAgendamento).result.then(
                result => {
                  if (result == 'Sim') {
                    this.agendamentoService.Excluir(agendamento.id).subscribe(retorno => {
                      if (retorno) {
                        var eventoVelho = this.eventos.find(c => c.id == agendamento.id);
                        if (eventoVelho != null) {
                          var index = this.eventos.indexOf(eventoVelho);
                          this.eventos.splice(index, 1);
                          this.refreshPage();
                        }
                      }
                    });
                  }
                },
                (() => { })
              );
              break;
          }
        },
          (error => { }));
      }
    }
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
    var medico = this.medicos.find(c => c.id == agendamentoAntigo.medicoId);
    let retornoValidacao = this.validadorAgendamento.validaHorasAgendamento(medico.configuracaoAgenda,
      this.util.dataParaString(event.start), event.start.toTimeString().substr(0, 5), event.end.toTimeString().substr(0, 5), ETipoAgendamento.Consulta);
    if (retornoValidacao != "") {
      if (retornoValidacao.indexOf("intervalo") > 0) {
        this.modalService.open(this.modalAgendamentoEmHorarioIntervalo).result.then(
          result => {
            if (result == 'Ok') {
              agendamentoAntigo.dataAgendamento = event.start;
              agendamentoAntigo.horaFinal = event.end.toTimeString().substr(0, 5).replace(":", "");
              agendamentoAntigo.horaInicial = event.start.toTimeString().substr(0, 5).replace(":", "");
              this.agendamentoService.salvar(agendamentoAntigo).subscribe(retorno => {
                if (retorno) {
                  this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(retorno));
                }
              });
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
      agendamentoAntigo.dataAgendamento = event.start;
      agendamentoAntigo.horaFinal = event.end.toTimeString().substr(0, 5).replace(":", "");
      agendamentoAntigo.horaInicial = event.start.toTimeString().substr(0, 5).replace(":", "");
      this.agendamentoService.salvar(agendamentoAntigo).subscribe(retorno => {
        if (retorno) {
          this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(retorno));
        }
      });
    }
  }

  trocarData() {
    this.isSpinnerVisibleAgenda = true;
    if (this.view == CalendarView.Day) //quando for dia tem de ajustar os horários permitido do dia
      this.ajustarParametrosCalendario();

    let medicosABuscar = this.tratarMedicosParaBuscaAgendamento();

    this.agendamentoService.buscarAgendamentosMedico(medicosABuscar, this.util.dataParaString(this.viewDate), this.view.valueOf(), this.appService.retornarClinicaCorrente().id)
      .subscribe(dados => {
        this.eventos = [];
        this.eventosBanco = new Array<Agendamento>();
        this.converteEAdicionaAgendamentoEvento(dados);

        this.isSpinnerVisibleAgenda = false;
        this.refreshPage();
      });
  }

  setView(view: CalendarView) {
    this.view = view;
    this.trocarData();
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  configurarAgendaMedico() {
    if (!this.selecionadoTodosMedicos()) {
      this.medicoService.medico = this.medico;
      this.router.navigate(['/cadastros/configuracaoagenda']);
    }
    else {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Selecione um médico para configurar a agenda.";
    }
  }

  converteEAdicionaAgendamentoEvento(lista: Array<Agendamento>) {
    lista.forEach(agendamento => {
      var dataHoraInicial = this.util.concatenaDataHora(this.util.dataParaString(agendamento.dataAgendamento), agendamento.horaInicial);

      var eventoBancoVelho = this.eventosBanco.find(c => c.id == agendamento.id);
      if (eventoBancoVelho != null) {
        var index = this.eventosBanco.indexOf(eventoBancoVelho);
        this.eventosBanco.splice(index, 1);
      }
      this.eventosBanco.push(agendamento);

      var eventoVelho = this.eventos.find(c => c.id == agendamento.id);
      if (eventoVelho != null) {
        var index = this.eventos.indexOf(eventoVelho);
        this.eventos.splice(index, 1);
      }

      this.eventos = [...this.eventos,
      {
        id: agendamento.id,
        start: dataHoraInicial,
        end: this.util.concatenaDataHora(this.util.dataParaString(agendamento.dataAgendamento), agendamento.horaFinal),
        title: this.montaTituloAgendamento(agendamento),
        color: { primary: agendamento.corFundo, secondary: agendamento.corFundo },
        // actions: this.acoesEventosCalendario,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
        // draggable: true
      }];
    });
  }

  chamarModalAdicionaAgendamento(agendamento: Agendamento, acao: string = "") {
    if (this.selecionadoTodosMedicos() && acao == "novo") {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Não existe configuração de agenda para o médico selecionado.";
    }
    else {

      var modalAdicionaAgendamento = this.modalService.open(ModalAdicionaAgendamentoComponent, { windowClass: 'modal-xl', backdrop: 'static', keyboard: false });

      var medico;

      if (this.selecionadoTodosMedicos())
        medico = this.medicos.find(c => c.id == agendamento.medicoId);
      else medico = this.medico;

      modalAdicionaAgendamento.componentInstance.medico = medico;
      modalAdicionaAgendamento.componentInstance.pacientes = this.pacientes;
      modalAdicionaAgendamento.componentInstance.cirurgias = this.cirurgias;
      modalAdicionaAgendamento.componentInstance.locais = this.locais;
      modalAdicionaAgendamento.componentInstance.exames = this.exames;
      modalAdicionaAgendamento.componentInstance.procedimentos = this.procedimentos;
      modalAdicionaAgendamento.componentInstance.convenios = this.convenios;
      modalAdicionaAgendamento.componentInstance.formaDePagamentos = this.formaDePagamentos;
      modalAdicionaAgendamento.componentInstance.selecionarAbaPagamento = acao == "pagar";

      if (agendamento != null) {
        modalAdicionaAgendamento.componentInstance.agendamentoJson = JSON.parse(JSON.stringify(agendamento));
      }

      if (acao == "editar" || acao == "pagar") {
        modalAdicionaAgendamento.componentInstance.editando = true;
      }

      modalAdicionaAgendamento.result.then((agendamentoResult: Agendamento) => {
        if (agendamentoResult != null) {
          this.converteEAdicionaAgendamentoEvento(new Array<Agendamento>().concat(agendamentoResult));
        }
        this.refreshPage();
      }).catch((error) => { })
    }
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
    var mensagem = "";

    if (agendamento.tipoAgendamento == ETipoAgendamento.Bloqueio)
      mensagem = "AGENDA BLOQUEADA";
    else {
      var mensagem = "";

      var paciente: Paciente;
      if (!this.util.isNullOrWhitespace(agendamento.pacienteId))
        paciente = this.pacientes.find(c => c.id == agendamento.pacienteId);
      var convenio = this.convenios.find(c => c.id == agendamento.convenioId);

      var operacao = this.agendamentoService.retornarOperacaoAgendamento(agendamento, this.exames, this.cirurgias, this.procedimentos).toUpperCase();

      if (this.selecionadoTodosMedicos()) {
        var medico = this.medicos.find(c => c.id == agendamento.medicoId);
        mensagem = medico.nomeCompleto.split(' ')[0].toUpperCase() + " - ";
      }

      mensagem = mensagem + operacao + " - ";

      if (paciente != null)
        mensagem = mensagem + paciente.nomeCompleto.split(' ')[0] + " - ";

      if (convenio != null)
        mensagem = mensagem + convenio.descricao.toUpperCase() + " - ";

      mensagem = mensagem + agendamento.horaInicial.substring(0, 2) + ":" + agendamento.horaInicial.substring(2, 4) + " até " +
        agendamento.horaFinal.substring(0, 2) + ":" + agendamento.horaFinal.substring(2, 4) + " - " +
        ESituacaoAgendamento[agendamento.situacaoAgendamento].toUpperCase();
    }

    return mensagem;

  }

  converteCalendarEventParaAgendamento(evento: CalendarEvent): Agendamento {
    var novoAgendamento = new Agendamento();

    novoAgendamento.dataAgendamento = evento.start;
    if (evento.start != null)
      novoAgendamento.horaInicial = evento.start.toTimeString().substr(0, 5).replace(":", "");

    if (evento.end != null)
      novoAgendamento.horaFinal = evento.end.toTimeString().substr(0, 5).replace(":", "");
    else {

      var horaFinal = new Date();
      horaFinal.setDate(evento.start.getDate());

      var minutosFinal = this.configuracaoAgendaService.retornarMinutosConfiguracao(this.medico.configuracaoAgenda.configuracaoMinutosAgenda);

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

  selecionaDataPicker(e: any) {
    var novaData = new Date(e.year, e.month - 1, e.day);
    this.viewDate = novaData;
    this.trocarData();
  }

  irParaDatePicker(valor) {

    if (this.util.validaData(valor)) {

      var dataPartes = valor.split("/");
      var dataNova = { year: dataPartes[2], month: dataPartes[1], day: dataPartes[0] };
      this.datePickerNgb.close();
      this.trocaDataPeloDatePicker(dataNova);
    }
    else {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Data inválida";
    }

  }

  hojeDatePicker() {
    this.dataPicker = this.calendar.getToday();
    this.datePickerNgb.navigateTo(this.dataPicker);
    this.datePickerNgb.close();
    this.trocaDataPeloDatePicker(this.dataPicker);
  }

  trocaDataPeloDatePicker(data: NgbDateStruct) {
    var novaData = new Date(data.year, data.month - 1, data.day);
    this.viewDate = novaData;
    this.trocarData();
  }

  abrirExtraCaixa(acao: string) {
    var modalExtra = this.modalService.open(ModalExtraCaixaComponent, { size: 'lg' });
    modalExtra.componentInstance.operacao = acao;
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

