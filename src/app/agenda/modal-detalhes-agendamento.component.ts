import { Component, ViewChild, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../uteis/Util';
import { ValidadorAgendamento } from './validadorAgendamento';
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
  nomeMedico: string;
  dataAgenda: string;
  util = new Util();
  tipoAgenda: string;
  formaDePagamentos = new Array<FormaDePagamento>();
  sourcePagamentos:LocalDataSource;
  totalPagamentos:string;

  constructor(public activeModal: NgbActiveModal, private pacienteService: PacienteService,private formaPagamentoService: FormaDePagamentoService, private medicoService: MedicoService, private convenioService: ConvenioService, private localService: LocalService) {
  }
  ngOnInit() {

    if (this.agendamento != null) {

      if (this.util.hasItems(this.agendamento.pagamentos)){

      this.formaPagamentoService.Todos().subscribe(formas => {
        this.formaDePagamentos = formas;
        if (this.util.hasItems(this.agendamento.pagamentos)) {
          this.sourcePagamentos = new LocalDataSource(this.agendamento.pagamentos);
        }        
      });

      let soma = 0;
      this.agendamento.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
      this.totalPagamentos = this.util.formatarDecimalBlur(soma);
    }

      if (!this.util.isNullOrWhitespace(this.agendamento.localId))
        this.localService.buscarPorId(this.agendamento.localId).subscribe(c => this.localCirurgiaDescricao = c.descricao);

      if (this.agendamento.paciente == null) {
        this.pacienteService.buscarPorId(this.agendamento.pacienteId).subscribe(c => {
          this.nomePaciente = c.nomeCompleto
          this.numeroCartao = c.numeroCartao.toString();
        });
      }
      else {
        this.nomePaciente = this.agendamento.paciente.nomeCompleto
        this.numeroCartao = this.agendamento.paciente.numeroCartao.toString();
      }
      if (this.agendamento.medico == null) {
        this.medicoService.buscarPorId(this.agendamento.medicoId).subscribe(c => this.nomeMedico = c.nomeCompleto);
      }
      else
        this.nomeMedico = this.agendamento.medico.nomeCompleto;
      if (this.agendamento.convenio == null) {
        this.convenioService.buscarPorId(this.agendamento.convenioId).subscribe(c => this.convenioDescricao = c.descricao);
      }
      else {
        this.convenioDescricao = this.agendamento.convenio.descricao;
      }

      this.dataAgenda = this.util.dataParaString(this.agendamento.dataAgendamento);
      this.tipoAgenda = ETipoAgendamento[this.agendamento.tipoAgendamento];
    }
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
      add:false,
      delete:false,
      columnTitle: '  '
    },
  };
}