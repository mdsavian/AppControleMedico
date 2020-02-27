import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../services/agendamento.service';
import { Util } from '../uteis/Util';
import { ModalErrorComponent } from '../shared/modal/modal-error.component';
import { Medico } from '../modelos/medico';
import { Agendamento } from '../modelos/agendamento';
import { ModalDetalhesAgendamentoComponent } from '../agenda/modal-detalhes-agendamento.component';
import { BotaoAdicionarPagamentoComponent } from '../shared/components/botao-adicionar-pagamento-component';
import { ModalPagamentoAgendamentoComponent } from '../cadastros/agendamento-pagamento/modal-pagamento-agendamento.component';
import { CaixaService } from '../services/caixa.service';
import { FormaDePagamento } from '../modelos/formaDePagamento';

@Component({
  templateUrl: './listagem-procedimentos-realizados.component.html',
  styleUrls: ['./botao-adicionar-pagamento-component.css'],

})
export class ListagemProcedimentosRealizadosComponent implements OnInit {
  source: LocalDataSource;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  dataHoje = new Date();
  dataInicial = this.util.dataParaString(new Date());
  dataFinal = this.util.dataParaString(new Date());
  medicos: Array<Medico> = new Array<Medico>();
  medico: Medico = new Medico();
  agendamentos: Array<Agendamento>;
  formaDePagamentos = new Array<FormaDePagamento>();

  constructor(private agendamentoService: AgendamentoService,private caixaService:CaixaService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.source = new LocalDataSource(this.agendamentos);
    
  } 

  editarRegistro(event) {
    var agendamento = this.agendamentos.find(c => c.id == event.data.id);
    var modalDetalhesAgendamento = this.modalService.open(ModalDetalhesAgendamentoComponent, { size: "lg" });
    modalDetalhesAgendamento.componentInstance.agendamento = agendamento;
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      dataAgendamento: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (dataAgendamento) => { return this.util.dataParaString(dataAgendamento) }
      },
      medico: {
        title: 'Médico',
        filter: true,
        valuePrepareFunction: (medico) => { return medico != null ? medico.nomeCompleto : "" },
        filterFunction: (cell?: any, search?: string) => {
          return cell.nomeCompleto.toUpperCase().indexOf(search.toUpperCase()) >= 0;
        }
      },
      paciente: {
        title: 'Paciente',
        filter: true,
        valuePrepareFunction: (paciente) => { return paciente != null ? paciente.nomeCompleto : "" },
        filterFunction: (cell?: any, search?: string) => {
          return cell.nomeCompleto.toUpperCase().indexOf(search.toUpperCase()) >= 0;
        }
      },
      pagamentos: {
        title: "Valor Total",
        filter: false,
        valuePrepareFunction: (pagamentos) => {
          let soma = 0;
          if (pagamentos != null) {
            pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
            return this.util.formatarDecimalBlur(soma);
          }
          else return this.util.formatarDecimalBlur(0);
        },

      },
      tipoAgendamentoDescricao: {
        title: 'Procedimento',
        filter: true
      },
      id: {
        title: "Adicionar Pagamento",
        type: "custom",
        filter: false,
        renderComponent: BotaoAdicionarPagamentoComponent, onComponentInitFunction: (instance) => {          
          instance.save.subscribe(id => {
            this.adicionarPagamento(id);
          });
        }
      }
    },
    actions:
    {
      columnTitle: '',
      add: false,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
  };

  adicionarPagamento(id) {

    this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
      if (!this.util.hasItems(caixas)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não existe caixa aberto, abra um caixa para proceder com o pagamento.";
      }
      else {

        var agendamento = this.agendamentos.find(c=> c.id == id);

        var modalPagamento = this.modalService.open(ModalPagamentoAgendamentoComponent, { size: "lg" });

        modalPagamento.componentInstance.agendamento = agendamento;
        modalPagamento.componentInstance.medico = agendamento.medico;
        modalPagamento.componentInstance.formasPagamento = this.formaDePagamentos;
        modalPagamento.componentInstance.caixas = caixas;

        modalPagamento.result.then(retorno => {

          if (retorno != null && retorno != "") {
            this.agendamentoService.salvar(retorno).subscribe(c=> {
              this.source = new LocalDataSource(this.agendamentos)
            });
          }

        }, (error) => { })
      }
    });

  }

}


