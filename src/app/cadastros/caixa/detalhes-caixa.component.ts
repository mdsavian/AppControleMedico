import { Component, OnInit } from '@angular/core';
import { Caixa } from '../../modelos/caixa';
import { CaixaService } from '../../services/caixa.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { LocalDataSource } from 'ng2-smart-table';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Agendamento } from '../../modelos/agendamento';
import { ModalDetalhesAgendamentoComponent } from '../../agenda/modal-detalhes-agendamento.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: './detalhes-caixa.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class DetalhesCaixaComponent implements OnInit {

  mensagemErro: string;
  util = new Util();
  nomeUsuarioAbertura: string;
  nomeUsuarioFechamento: string;
  nomeFuncionarioCaixa: string;
  trocoAberturaFormatado: string;
  trocoFechamentoFormatado: string;
  dataAber = this.util.dataParaString(new Date());
  dataFech = this.util.dataParaString(new Date());
  formaDePagamentos = new Array<FormaDePagamento>();
  caixa = new Caixa();
  sourceRecebimentos: LocalDataSource;
  recebimentos: Array<Agendamento>;
  totalRecebimentos = "";


  constructor(private caixaService: CaixaService, private agendamentoService: AgendamentoService, private modalService: NgbModal) {
  }

  ngOnInit() {
    if (this.caixaService.caixa) {
      this.caixa = this.caixaService.caixa;

      this.dataAber = this.util.dataParaString(this.caixa.dataAbertura);
      this.dataFech = this.util.dataParaString(this.caixa.dataFechamento);

      this.trocoAberturaFormatado = this.util.formatarDecimalBlur(this.caixa.trocoAbertura);
      this.trocoFechamentoFormatado = this.util.formatarDecimalBlur(this.caixa.trocoFechamento);

      if (this.util.hasItems(this.caixaService.listaFuncionarios)) {
        this.nomeUsuarioAbertura = this.caixaService.listaFuncionarios.find(c => c.usuarioId == this.caixa.usuarioAberturaId).nomeCompleto;

        if (this.caixa.usuarioAberturaId != this.caixa.usuarioFechamentoId)
          this.nomeUsuarioFechamento = this.caixaService.listaFuncionarios.find(c => c.usuarioId == this.caixa.usuarioFechamentoId).nomeCompleto;          
        else this.nomeUsuarioFechamento = this.nomeUsuarioAbertura;

      }

      this.agendamentoService.buscarAgendamentosCaixa(this.caixa).subscribe(agendamentos => {
        this.recebimentos = agendamentos;
        this.sourceRecebimentos = new LocalDataSource(agendamentos);

        let soma = 0;
        this.recebimentos.forEach(receb => receb.pagamentos.forEach(pag => soma = +soma + +pag.valor));
        
        this.totalRecebimentos = this.util.formatarDecimalBlur(soma);
      });
    }
  }

  visualizarRecebimento(agendamento:Agendamento)
  {
    var modalDetalhesAgendamento = this.modalService.open(ModalDetalhesAgendamentoComponent, { size: "lg" });
    modalDetalhesAgendamento.componentInstance.agendamento = agendamento;
  }
  settingsRecebimentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum recebimento",
    columns: {
      dataAgendamento: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (dataAgendamento) => {
          return this.util.dataParaString(dataAgendamento);
        }
      },
      medico:
      {
        title: 'Médico',
        filter: true,
        valuePrepareFunction: (medico) => { return medico != null ? medico.nomeCompleto : ""; }
      },
      paciente:
      {
        title: 'Paciente',
        filter: true,
        valuePrepareFunction: (paciente) => { return paciente != null ? paciente.nomeCompleto : ""; }
      },
      tipoAgendamentoDescricao:
      {
        title: 'Descrição',
        filter: true
      },
      pagamentos: {
        title: 'Total',
        filter: false,
        valuePrepareFunction: (pagamentos) => {
          if (this.util.hasItems(pagamentos)) {
            let soma = 0; pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
            return this.util.formatarDecimal(soma);
          }
          return this.util.formatarDecimal(0);
        }
      }
    },
    actions:
    {
      edit: true,
      add: false,
      delete: false,
      columnTitle: '  '
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    }
  };
}


