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

  public isSpinnerVisible = false;
  ngOnInit() {
    if (this.util.isNullOrWhitespace(this.timelineService.pacienteId))
      this.router.navigate(["listagem/listagemtimeline"]);
    else {

      this.isSpinnerVisible = true;
      this.buscarDadosTimeline();
    }

  }

  constructor(private timelineService: TimelineService, private modalService: NgbModal, private contaReceberService: ContaReceberService, private agendamentoService: AgendamentoService, private router: Router,
    private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService, private localService: LocalService, private exameService: ExameService
  ) {

  }

  buscarDadosTimeline() {
    this.buscarModelosNovoAgendamento().subscribe(c => {
      this.agendamentoService.buscarAgendamentosPaciente(this.timelineService.pacienteId).subscribe(agendamentos => {
        var i = 1;
        this.agendamentos = agendamentos;
        agendamentos.forEach(agenda => {
          agenda = this.agendamentoService.tratarCorAgendamento(agenda, this.exames, this.cirurgias, this.procedimentos);

          var timeline = new Timeline();
          timeline.agendamentoId = agenda.id;
          timeline.dataHora = this.util.dataParaString(agenda.dataAgendamento) + " " + this.util.formatarHora(agenda.horaInicial) + " - " + this.util.formatarHora(agenda.horaFinal);

          timeline.titulo = ETipoAgendamento[agenda.tipoAgendamento] + " - " + ESituacaoAgendamento[agenda.situacaoAgendamento];
          timeline.descricao = this.agendamentoService.retornarOperacaoAgendamento(agenda, this.exames, this.cirurgias, this.procedimentos).toUpperCase();
          timeline.cor = agenda.corFundo;

          if (!this.util.isNullOrWhitespace(agenda.localId)) {
            agenda.local = this.locais.find(c => c.id == agenda.localId);
            timeline.descricao + '<br> Local: ' + agenda.local.descricao.toUpperCase();
          }

          if (!this.util.isNullOrWhitespace(agenda.observacao)) {
            timeline.descricao + '<br> Obs.: ' + agenda.observacao;
          }

          if (this.util.hasItems(agenda.pagamentos)) {
            this.contaReceberService.buscarPorAgendamento(agenda.id).subscribe(c => {
              timeline.contaReceberId = c.id;
              timeline.valorTotal = agenda.pagamentos.reduce(function (valor, pagamento) { return pagamento.valor + valor; }, 0);
              timeline.descricao + '<br> Valor Pago: ' + this.util.formatarDecimal(timeline.valorTotal);
            });

          }
          timeline.par = i % 2 === 0;
          this.listaTimeline.push(timeline);

          i++;
        });

        this.isSpinnerVisible = false;
      });
    });

  }

  buscarModelosNovoAgendamento() {

    let reqExames = this.exameService.Todos().map(dados => { this.exames = dados; });
    let reqLocais = this.localService.Todos().map(dados => { this.locais = dados; });
    let reqCirurgias = this.cirurgiaService.Todos().map(dados => { this.cirurgias = dados; });
    let reqProcedimento = this.procedimentoService.Todos().map(dados => { this.procedimentos = dados; });

    return forkJoin([reqExames, reqLocais, reqCirurgias, reqProcedimento]);
  }

  chamaContaReceber(contaReceberId: string) {
    this.contaReceberService.buscarPorId(contaReceberId).subscribe(c => {
      var modalDetalheContaReceber = this.modalService.open(ModalDetalheContaReceberComponent, { size: "lg" });
      modalDetalheContaReceber.componentInstance.contaReceber = c;

    })

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

