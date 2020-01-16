import { Component, ViewChild, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../uteis/Util';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Agendamento } from '../modelos/agendamento';
import { PacienteService } from '../services/paciente.service';
import { ConvenioService } from '../services/convenio.service';
import { LocalService } from '../services/local.service';
import { MedicoService } from '../services/medico.service';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { FormaDePagamentoService } from '../services/forma-de-pagamento.service';
import { FormaDePagamento } from '../modelos/formaDePagamento';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, forkJoin } from 'rxjs';
import { Paciente } from '../modelos/paciente';
import { TimelineService } from '../services/timeline.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-detalhes-agendamento.component',
  templateUrl: './modal-detalhes-agendamento.component.html',
  styleUrls: ["./styles.css"]
})

export class ModalDetalhesAgendamentoComponent implements OnInit {
  agendamento = new Agendamento();
  localCirurgiaDescricao: string = ""
  convenioDescricao: string;
  numeroCartao: string;
  nomePaciente: string;
  paciente: Paciente;
  nomeMedico: string;
  dataAgenda: string;
  util = new Util();
  tipoAgenda: string;
  formaDePagamentos = new Array<FormaDePagamento>();
  sourcePagamentos: LocalDataSource;
  totalPagamentos: string;
  isSpinnerVisible: boolean;


  constructor(public activeModal: NgbActiveModal, private pacienteService: PacienteService, private timelineService: TimelineService, private router: Router,
    private formaPagamentoService: FormaDePagamentoService, private medicoService: MedicoService, private convenioService: ConvenioService, private localService: LocalService) {
  }

  carregarModelos() {

    var requisicoes = [];

    if (this.util.hasItems(this.agendamento.pagamentos)) {
      var reqFormas = this.formaPagamentoService.Todos().map(formas => {
        this.formaDePagamentos = formas;
        this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos);

        let soma = 0;
        this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
        this.totalPagamentos = this.util.formatarDecimalBlur(soma);

      });

      requisicoes.push(reqFormas);
    }

    if (!this.util.isNullOrWhitespace(this.agendamento.localId)) {
      var reqLocal = this.localService.buscarPorId(this.agendamento.localId).map(c => this.localCirurgiaDescricao = c.descricao);
      requisicoes.push(reqLocal);
    }

    if (!this.util.isNullOrWhitespace(this.agendamento.pacienteId)) {
      if (this.agendamento.paciente == null) {
        var reqPaciente = this.pacienteService.buscarPorId(this.agendamento.pacienteId).map(paciente => {
          if (paciente != null) {
            this.paciente = paciente;
            this.nomePaciente = paciente.nomeCompleto
            this.numeroCartao = paciente.numeroCartao.toString();
          }
        });

        requisicoes.push(reqPaciente);
      }
      else {
        this.paciente = this.agendamento.paciente;
        this.nomePaciente = this.agendamento.paciente.nomeCompleto
        this.numeroCartao = this.agendamento.paciente.numeroCartao.toString();
      }
    }
    if (this.agendamento.medico == null) {

      var reqMedico = this.medicoService.buscarPorId(this.agendamento.medicoId).map(c => this.nomeMedico = c.nomeCompleto);

      requisicoes.push(reqMedico);

    }
    else
      this.nomeMedico = this.agendamento.medico.nomeCompleto;
    if (this.agendamento.convenio == null) {
      var reqConvenio = this.convenioService.buscarPorId(this.agendamento.convenioId).map(c => this.convenioDescricao = c.descricao);
      requisicoes.push(reqConvenio);
    }
    else {
      this.convenioDescricao = this.agendamento.convenio.descricao;
    }

    this.dataAgenda = this.util.dataParaString(this.agendamento.dataAgendamento);
    this.tipoAgenda = ETipoAgendamento[this.agendamento.tipoAgendamento];

    return forkJoin(requisicoes);
  }


  ngOnInit() {

    if (this.agendamento != null && this.agendamento.tipoAgendamento != ETipoAgendamento.Bloqueio) {
      this.isSpinnerVisible = true;
      this.carregarModelos().subscribe(c => {
        this.isSpinnerVisible = false;
      });
    }
  }

  historicoPaciente() {
    this.timelineService.pacienteId = this.paciente.id;
    this.timelineService.paciente = this.paciente;
    this.activeModal.close();
    this.router.navigate(['/listagem/timeline']);
  }

  fechar() {
    this.activeModal.close();
  }

  settingsPagamentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum pagamento",
    columns: {
      formaPagamentoId: {
        title: 'Forma Pagamento',
        filter: true,
        valuePrepareFunction: (formaPagamentoId) => {
          return formaPagamentoId == null || !this.util.hasItems(this.formaDePagamentos) ? "" : this.formaDePagamentos.find(c => c.id == formaPagamentoId).descricao;
        }
      },
      parcela: {
        title: 'Parcela',
        filter: false
      },
      valor: {
        title: 'Valor',
        filter: false,
        valuePrepareFunction: (valor) => {
          return this.util.formatarDecimal(valor);
        }
      }
    },
    actions:
    {
      edit: false,
      add: false,
      delete: false,
      columnTitle: '  '
    },
  };
}