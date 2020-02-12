import { Component, OnInit } from '@angular/core';
import { Caixa } from '../../modelos/caixa';
import { CaixaService } from '../../services/caixa.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { ExtraCaixaService } from '../../services/extraCaixa.service';
import { LocalDataSource } from 'ng2-smart-table';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Agendamento } from '../../modelos/agendamento';
import { ModalDetalhesAgendamentoComponent } from '../../agenda/modal-detalhes-agendamento.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from '../../modelos/pessoa';
import { forkJoin } from 'rxjs';
import { ExtraCaixa } from '../../modelos/extraCaixa';
import { AgendamentoPagamento } from '../../modelos/agendamentoPagamento';
import { ETipoExtraCaixa } from '../../enums/ETipoExtraCaixa';
import { ModalExtraCaixaComponent } from '../extra-caixa/modal-extra-caixa.component';


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
  recebimentosAgenda = new Array<Agendamento>();
  totalRecebimentos = "";
  pessoas = new Array<Pessoa>();
  isSpinnerVisible = false;
  extrasCaixa = new Array<ExtraCaixa>();
  todosRecebimentos = new Array<Agendamento>();

  constructor(private caixaService: CaixaService, private agendamentoService: AgendamentoService, private modalService: NgbModal, private extraCaixaService: ExtraCaixaService) { }

  ngOnInit() {

    if (this.caixaService.caixa) {
      this.caixa = this.caixaService.caixa;

      this.isSpinnerVisible = true;
      this.buscarModelos().subscribe(c => {


        let soma = 0;
        this.recebimentosAgenda.forEach(receb => receb.pagamentos.forEach(pag => soma = +soma + +pag.valor));
        this.todosRecebimentos = this.recebimentosAgenda;

        this.extrasCaixa.forEach(extra => {
          console.log("adicionando", extra);
          var agenda = new Agendamento();

          agenda.tipoAgendamentoDescricao = ETipoExtraCaixa[extra.tipoExtraCaixa];
          agenda.pacienteId = agenda.medicoId = "";
          agenda.pagamentos = new Array<AgendamentoPagamento>();
          agenda.dataAgendamento = extra.data;
          agenda.observacao = extra.descricao;
          agenda.id = extra.id;

          let agendaPagamento = new AgendamentoPagamento();
          agendaPagamento.formaPagamentoId = extra.formaPagamentoId;
          agendaPagamento.parcela = extra.parcela;
          agendaPagamento.valor = extra.valor;
          agendaPagamento.vistaPrazo = extra.vistaPrazo;
          agendaPagamento.descricaoPagamento = extra.descricao;
          agendaPagamento.usuarioId = extra.usuarioId;
          agendaPagamento.vistaPrazo = extra.vistaPrazo;
          agenda.pagamentos.push(agendaPagamento);

          this.todosRecebimentos.push(agenda);
          
          soma = +soma + +extra.valor
        });


        console.log(this.todosRecebimentos);

        this.sourceRecebimentos = new LocalDataSource(this.todosRecebimentos);
        this.totalRecebimentos = this.util.formatarDecimalBlur(soma);

        this.pessoas = this.caixaService.listaFuncionarios;
        this.pessoas = this.pessoas.concat(this.caixaService.listaMedicos);

        this.dataAber = this.util.dataParaString(this.caixa.dataAbertura);
        this.dataFech = this.util.dataParaString(this.caixa.dataFechamento);

        this.trocoAberturaFormatado = this.util.formatarDecimalBlur(this.caixa.trocoAbertura);
        this.trocoFechamentoFormatado = this.util.formatarDecimalBlur(this.caixa.trocoFechamento);

        if (!this.util.isNullOrWhitespace(this.caixa.usuarioAberturaId))
          this.nomeUsuarioAbertura = this.pessoas.find(c => c.usuarioId == this.caixa.usuarioAberturaId).nomeCompleto;

        if (!this.util.isNullOrWhitespace(this.caixa.usuarioFechamentoId))
          this.nomeUsuarioFechamento = this.pessoas.find(c => c.usuarioId == this.caixa.usuarioFechamentoId).nomeCompleto;

        this.isSpinnerVisible = false;
      });
    }
  }

  buscarModelos() {
    let requisicoes = [];

    let reqAgendamento = this.agendamentoService.buscarAgendamentosCaixa(this.caixa).map(agendamentos => {
      this.recebimentosAgenda = agendamentos;
    });
    requisicoes.push(reqAgendamento);

    let reqExtraCaixa = this.extraCaixaService.BuscarPorCaixa(this.caixa.id).map(extraCaixa => {
      this.extrasCaixa = extraCaixa;
    });
    requisicoes.push(reqExtraCaixa);

    return forkJoin(requisicoes);
  }

  visualizarRecebimento(recebimento: Agendamento) {

    if (this.util.isNullOrWhitespace(recebimento.medicoId) && this.util.isNullOrWhitespace(recebimento.pacienteId)) {

      var extraCaixa = this.extrasCaixa.find(c=> c.id = recebimento.id);

      var modalExtraCaixa = this.modalService.open(ModalExtraCaixaComponent, { size: "lg" });
      modalExtraCaixa.componentInstance.extraCaixa = extraCaixa;
      modalExtraCaixa.componentInstance.adicionarEditar = "Detalhes";
    }
    else {
      var modalDetalhesAgendamento = this.modalService.open(ModalDetalhesAgendamentoComponent, { size: "lg" });
      modalDetalhesAgendamento.componentInstance.agendamento = recebimento;
    }


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


