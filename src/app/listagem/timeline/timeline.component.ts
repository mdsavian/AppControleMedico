import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Paciente } from '../../modelos/paciente';
import { Util } from '../../uteis/Util';
import { Router } from '@angular/router';
import { TimelineService } from '../../services/timeline.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { Timeline } from '../../modelos/timeline';
import { CirurgiaService } from '../../services/cirurgia.service';
import { ProcedimentoService } from '../../services/procedimento.service';
import { LocalService } from '../../services/local.service';
import { ExameService } from '../../services/exame.service';
import { Procedimento } from '../../modelos/procedimento';
import { Local } from '../../modelos/local';
import { Cirurgia } from '../../modelos/cirurgia';
import { Exame } from '../../modelos/exame';
import { forkJoin } from 'rxjs';
import { ETipoAgendamento } from '../../enums/ETipoAgendamento';
import { ContaReceberService } from '../../services/contaReceber.service';
import { ESituacaoAgendamento } from '../../enums/ESituacaoAgendamento';
import { Agendamento } from '../../modelos/agendamento';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalhesAgendamentoComponent } from '../../agenda/modal-detalhes-agendamento.component';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalDetalheContaReceberComponent } from '../../cadastros/conta-receber/modal-detalhe-conta-receber.component';
import { AppService } from '../../services/app.service';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
@Component({
  templateUrl: 'timeline.component.html'
})
export class TimelineComponent implements OnInit {

  listaPacientes: Array<Paciente>;
  source: LocalDataSource;
  util = new Util();
  listaTimeline = new Array<Timeline>();
  exames: Array<Exame> = [];
  cirurgias: Array<Cirurgia> = [];
  pacientes: Array<Paciente> = [];
  locais: Array<Local> = [];
  procedimentos: Array<Procedimento> = [];
  acoesPermitidas: Array<string> = [];
  agendamentos: Array<Agendamento> = [];
  medicos: Array<Medico> = [];

  public isSpinnerVisible = false;
  ngOnInit() {
    if (this.util.isNullOrWhitespace(this.timelineService.pacienteId))
      this.router.navigate(["listagem/listagemtimeline"]);
    else {

      this.isSpinnerVisible = true;
      this.buscarDadosTimeline();
    }

  }

  constructor(private timelineService: TimelineService, private appService:AppService, private medicoService:MedicoService,private modalService: NgbModal, private agendamentoService: AgendamentoService, private router: Router,
    private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService, private localService: LocalService, private exameService: ExameService
  ) {

  }

  buscarDadosTimeline() {
    this.buscarModelosNovoAgendamento().subscribe(c => {
      
      this.agendamentoService.buscarAgendamentosPaciente(this.timelineService.pacienteId, this.appService.retornarUsuarioCorrente().id,
      this.appService.retornarClinicaCorrente().id).subscribe(agendamentos => {

        this.agendamentos = agendamentos;
      
        this.listaTimeline = this.timelineService.montarDadosTimeline(agendamentos, this.exames, this.cirurgias, this.procedimentos, this.locais, this.medicos);

        this.isSpinnerVisible = false;
      });
    });

  }

  buscarModelosNovoAgendamento() {

    let reqExames = this.exameService.Todos().map(dados => { this.exames = dados; });
    let reqLocais = this.localService.Todos().map(dados => { this.locais = dados; });
    let reqCirurgias = this.cirurgiaService.Todos().map(dados => { this.cirurgias = dados; });
    let reqProcedimento = this.procedimentoService.Todos().map(dados => { this.procedimentos = dados; });
    let reqMedico = this.medicoService.buscarMedicosPorUsuario()
    .map(dados => { this.medicos = dados; });

    return forkJoin([reqExames,reqMedico, reqLocais, reqCirurgias, reqProcedimento]);
  }

  chamaContaReceber(timeline: Timeline) {
    var modalDetalheContaReceber = this.modalService.open(ModalDetalheContaReceberComponent, { size: "lg" });
    modalDetalheContaReceber.componentInstance.contaReceber = timeline.contaReceber;
  }

  chamaAgendamento(agendamentoId: string) {
    var agendamento = this.agendamentos.find(c => c.id == agendamentoId);
    if (agendamento != null) {
      var modalDetalhesAgendamento = this.modalService.open(ModalDetalhesAgendamentoComponent, { size: "lg" });
      modalDetalhesAgendamento.componentInstance.agendamento = agendamento;
    }
    else {
      var modalErro = this.modalService.open(ModalErrorComponent);
      modalErro.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde."
    }
  }

}

