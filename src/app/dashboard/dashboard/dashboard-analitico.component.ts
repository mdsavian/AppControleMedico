import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import { AgendamentoService } from '../../services/agendamento.service';
import { ContaReceberService } from '../../services/contaReceber.service';
import { ContaPagarService } from '../../services/contaPagar.service';
import { ContaReceber } from '../../modelos/contaReceber';
import { ContaPagar } from '../../modelos/contaPagar';
import { Agendamento } from '../../modelos/agendamento';
import { Util } from '../../uteis/Util';
import { ESituacaoAgendamento } from '../../enums/ESituacaoAgendamento';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { AppService } from '../../services/app.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal, NgbDateStruct, NgbCalendar, NgbInputDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FuncionarioService } from '../../services/funcionario.service';
import { CaixaService } from '../../services/caixa.service';
import { Funcionario } from '../../modelos/funcionario';
import { Caixa } from '../../modelos/caixa';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ExtraCaixaService } from '../../services/extraCaixa.service';
import { ExtraCaixa } from '../../modelos/extraCaixa';
import { ETipoExtraCaixa } from '../../enums/ETipoExtraCaixa';

@Component({
  templateUrl: './dashboard-analitico.component.html',
  styleUrls: ['./dashboard-analitico.component.css']
})
export class DashboardAnaliticoComponent implements OnInit {

  @ViewChild('datePickerNgb', { read: NgbInputDatepicker, static: false }) datePickerNgb: NgbInputDatepicker;

  isSpinnerVisible = false;
  contasReceber: Array<ContaReceber> = new Array<ContaReceber>();
  contasPagar: Array<ContaPagar> = new Array<ContaPagar>();
  medicos: Array<Medico> = new Array<Medico>();
  medico: Medico = new Medico();
  agendamentos: Array<Agendamento> = new Array<Agendamento>();
  util = new Util();
  dataHoje = new Date();
  sourceAgendamentosMedicos: LocalDataSource;
  sourceEntradas: LocalDataSource;
  sourceSaidas: LocalDataSource;
  totalRecebido = this.util.formatarDecimal(0);
  totalAPagar = this.util.formatarDecimal(0);
  lucroBruto = this.util.formatarDecimal(0);
  projecaoLucroBruto = this.util.formatarDecimal(0);
  totalAgendamentosMedicos = this.util.formatarDecimal(0);
  titulo = "";
  tempoMedioAgendamento = "";
  totalAgendados = 0;
  totalConfirmados = 0;
  totalFinalizados = 0;
  totalCancelados = 0;
  usuario = this.appService.retornarUsuarioCorrente();
  funcionarios = new Array<Funcionario>();
  caixas = new Array<Caixa>();
  descricoesCaixas = new Array<string>();
  pacienteSelecionado: string;
  dataPicker: NgbDateStruct;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  falhaNaBusca = false;
  funcionario = new Funcionario();
  caixa = new Caixa();
  extrasCaixa = new Array<ExtraCaixa>();
  totalEntradas: string;

  constructor(private contaPagarService: ContaPagarService, private calendar: NgbCalendar, private modalService: NgbModal, private appService: AppService, private extraCaixaService: ExtraCaixaService,
    private medicoService: MedicoService, private contaReceberService: ContaReceberService, private agendamentoService: AgendamentoService, private caixaService: CaixaService,
    private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.toDate = this.fromDate = new NgbDate(this.dataHoje.getFullYear(), this.dataHoje.getMonth(), this.dataHoje.getDate());
    this.buscarDadosDashboard().subscribe(c => {
      this.buscarDadosSecundarios().subscribe(d => {

        this.caixas.forEach(caixa => {
          caixa = this.caixaService.retornarDescricaoCaixa(caixa, this.funcionarios, this.medicos);
          this.descricoesCaixas.push(caixa.descricao);
        });

        this.refreshPage();
      });

    });
  }

  montarTooltip() {

    this.totalConfirmados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Confirmado).length;
    this.totalFinalizados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento["Finalizado"]).length;
    this.totalAgendados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Agendado).length;
    this.totalCancelados = this.agendamentos.filter(c => c.situacaoAgendamento == ESituacaoAgendamento.Cancelado).length;
  }

  refreshPage() {
    this.calcularTotais();
    this.montarListagemMedico();
    this.montarTooltip();
    this.isSpinnerVisible = false;
  }

  buscar() {
    this.isSpinnerVisible = true;
    this.buscarDadosDashboard().subscribe(c => {
      this.refreshPage();
    });
  }

  montarListagemMedico() {
    let dados = new Array<any>();
    var totalAgendamentos = 0;
    this.sourceAgendamentosMedicos = new LocalDataSource();

    this.medicos.forEach(medico => {
      if (this.medico != null && !this.util.isNullOrWhitespace(this.medico.id) && medico.id != this.medico.id)
        return;

      let agendamentosMedicos = this.agendamentos.filter(c => c.medicoId == medico.id || this.util.isNullOrWhitespace(medico.id));  //médico todos

      let totalRecebidoAgendamentos = 0;
      let mediaAgendamento = 0;
      let quantidadeAgendamentos = 0;

      if (agendamentosMedicos.length > 0) {

        agendamentosMedicos.filter(c => this.util.hasItems(c.pagamentos)).forEach(agendamento => {
          agendamento.pagamentos.forEach(pagamento => {
            totalRecebidoAgendamentos = totalRecebidoAgendamentos + pagamento.parcela * pagamento.valor
          });
        });

        quantidadeAgendamentos = agendamentosMedicos.length;
        mediaAgendamento = totalRecebidoAgendamentos > 0 && quantidadeAgendamentos > 0 ? totalRecebidoAgendamentos / quantidadeAgendamentos : 0;
      }

      if (!this.util.isNullOrWhitespace(medico.id)) //médico todos
        totalAgendamentos = totalAgendamentos + totalRecebidoAgendamentos;

      if (quantidadeAgendamentos > 0)
        dados.push({ medicoId: medico.id, nomeMedico: medico.nomeCompleto, quantidadeAgendamentos: quantidadeAgendamentos, total: totalRecebidoAgendamentos, mediaAgendamento: mediaAgendamento })
    });

    this.totalAgendamentosMedicos = this.util.formatarDecimal(totalAgendamentos);

    this.sourceAgendamentosMedicos = new LocalDataSource(dados.sort((a, b) => a.nomeMedico.localeCompare(b.nomeMedico)));

  }

  calcularTotais() {
    let totalAgendamentoPagos = 0;
    let totalContasRebidas = 0;
    let totalContasPagar = 0;

    this.medicos.forEach(medico => {
      var agendamentosPagos = this.agendamentos.filter(c => this.util.hasItems(c.pagamentos) && c.medicoId == medico.id);

      agendamentosPagos.forEach(agendamento => {
        agendamento.pagamentos.forEach(pagamento => {
          totalAgendamentoPagos = totalAgendamentoPagos + pagamento.parcela * pagamento.valor
        });
      });
    });

    var contasRecebidasPagas = this.contasReceber.filter(c => this.util.hasItems(c.pagamentos));

    contasRecebidasPagas.forEach(conta => {
      conta.pagamentos.forEach(pagamento => {
        totalContasRebidas = totalContasRebidas + pagamento.parcela * pagamento.valor
        conta.valor = pagamento.parcela * pagamento.valor;
      });
    });

    var contasPagarPagas = this.contasPagar.filter(c => this.util.hasItems(c.pagamentos));

    contasPagarPagas.forEach(conta => {
      conta.pagamentos.forEach(pagamento => {
        totalContasPagar = totalContasPagar + pagamento.parcela * pagamento.valor
        conta.valor = pagamento.parcela * pagamento.valor;
      });
    });

    var extrasDebito = this.extrasCaixa.filter(extra => extra.tipoExtraCaixa == ETipoExtraCaixa["Extra Débito"]);
    var extrasCredito = this.extrasCaixa.filter(extra => extra.tipoExtraCaixa == ETipoExtraCaixa["Extra Crédito"]);

    extrasDebito.forEach(extra => {
      totalContasPagar = totalContasPagar + extra.parcela * extra.valor
    });

    extrasCredito.forEach(extra => {
      totalContasRebidas = totalContasRebidas + extra.parcela * extra.valor
    });

    this.contasPagar = this.contasPagar.concat(this.extraCaixaService.converterExtraCaixaContaPagar(extrasDebito));
    this.contasReceber = this.contasReceber.concat(this.extraCaixaService.converterExtraCaixaContaReceber(extrasCredito));

    this.sourceSaidas = new LocalDataSource(this.contasPagar);
    this.sourceEntradas = new LocalDataSource(this.contasReceber);

    this.totalEntradas = this.util.formatarDecimal(totalContasRebidas);
    this.totalRecebido = this.util.formatarDecimal(totalContasRebidas + totalAgendamentoPagos);
    this.totalAPagar = this.util.formatarDecimal(totalContasPagar);
    let lucroBrutoDecimal = (totalContasRebidas + totalAgendamentoPagos) - totalContasPagar;
    this.lucroBruto = this.util.formatarDecimal(lucroBrutoDecimal);
  }

  buscarDadosSecundarios() {
    var requisicoes = [];

    let reqMedico = this.medicoService.buscarMedicosPorUsuario().map(dados => {
      if (dados.length > 1) {
        let medicoTodos = new Medico();
        medicoTodos.nomeCompleto = "Todos";
        medicoTodos.id = "";
        this.medicos.push(medicoTodos);

        this.medicos = this.medicos.concat(dados);
        this.medico = this.medicos.find(c => c == medicoTodos);

      }
      else {
        this.medicos = dados;
        this.medico = this.medicos.find(c => true);
      }
      //quando usuário for um médico traz ele selecionado primeiro
      if (!this.util.isNullOrWhitespace(this.usuario.medicoId))
        this.medico = this.medicos.find(c => c.id == this.usuario.medicoId);
    });
    requisicoes.push(reqMedico);

    let reqCaixas = this.caixaService.caixasUltimos7dias().map(caixas => {
      this.caixas = caixas;
    });
    requisicoes.push(reqCaixas);

    let reqFuncionario = this.funcionarioService.Todos().map(funcionarios => {

      let funcionarioTodos = new Funcionario();
      funcionarioTodos.nomeCompleto = "Todos";
      funcionarioTodos.id = "";
      this.funcionarios.push(funcionarioTodos);

      this.funcionarios = this.funcionarios.concat(funcionarios);
      this.funcionario = this.funcionarios.find(c => c == funcionarioTodos);

    });
    requisicoes.push(reqFuncionario);

    return forkJoin(requisicoes);
  }

  buscarDadosDashboard() {
    this.isSpinnerVisible = true;

    if (this.fromDate == null || this.toDate == null)
      return forkJoin();

    this.montaTitulo();

    let dataInicio = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day);
    let dataFim = new Date(this.toDate.year, this.toDate.month, this.toDate.day);

    let reqContaReceber = this.contaReceberService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id, this.funcionario.id).map(dados => {
      this.contasReceber = dados;
    });

    let reqContaPagar = this.contaPagarService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id, this.funcionario.id).map(dados => {
      this.contasPagar = dados;
    });

    let reqExtraCaixa = this.extraCaixaService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id, this.caixa.id, this.funcionario.id).map(dados => {
      this.extrasCaixa = dados;
    });

    let reqAgendamento = this.agendamentoService.TodosPorPeriodo(this.util.dataParaString(dataInicio), this.util.dataParaString(dataFim), this.medico.id, this.caixa.id, this.funcionario.id).map(dados => {
      this.agendamentos = dados;
      this.tempoMedioAgendamento = this.util.hasItems(dados) ? this.agendamentoService.calcularTempoMedio(dados) + " Minutos" : "-";
    });

    return Observable.forkJoin([reqContaReceber, reqContaPagar, reqAgendamento, reqExtraCaixa]);

  }

  montaTitulo() {

    let dataInicio = this.fromDate != null ? new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day) : new Date();
    let dataFim = this.toDate != null ? new Date(this.toDate.year, this.toDate.month, this.toDate.day) : new Date();

    this.titulo = "De " + this.util.dataParaString(dataInicio) + " até " + this.util.dataParaString(dataFim);
  }

  selecionaDataPicker(date: NgbDate) {
    date.month = date.month - 1;
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if (this.fromDate && this.toDate)
      this.buscar();
  }

  irParaDatePicker(valor) {
    if (this.util.validaData(valor)) {
      var dataPartes = valor.split("/");
      var dia = parseInt(dataPartes[0]);
      var mes = dataPartes[1] - 1;
      var ano = parseInt(dataPartes[2]);

      this.toDate = this.fromDate = new NgbDate(ano, mes, dia);

      this.buscar();
    }
    else {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Data inválida";
    }
  }

  trocarData(acao) {
    var date = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day);
    var toDate = new Date(this.toDate.year, this.toDate.month, this.toDate.day);

    if (acao == 'Anterior') {
      date.setDate(date.getDate() - 1);
    }
    else {
      date.setDate(date.getDate() + 1);
    }

    if (date > toDate) {
      this.toDate = new NgbDate(date.getFullYear(), date.getMonth(), date.getDate());
    }
    else
      this.fromDate = new NgbDate(date.getFullYear(), date.getMonth(), date.getDate());


    this.buscar();

  }

  abrirCalendario() {
    this.datePickerNgb.navigateTo(this.fromDate);
    this.fromDate = this.toDate = null;
    this.datePickerNgb.open();
  }

  hojeDatePicker() {
    this.dataPicker = this.calendar.getToday();
    this.datePickerNgb.navigateTo(this.dataPicker);
    this.toDate = this.fromDate = new NgbDate(this.dataPicker.year, this.dataPicker.month - 1, this.dataPicker.day);

    this.buscar();
  }

  fecharCalendario() {
    this.datePickerNgb.close();
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  buscaCaixa = (text$: Observable<string>) =>

    text$.pipe(
      distinctUntilChanged(),
      map(term => {

        if (this.util.isNullOrWhitespace(term)) {
          this.caixa = new Caixa();
          return false;
        }

        if (this.descricoesCaixas == null) {
          this.falhaNaBusca = true;
          return false;
        }

        this.falhaNaBusca = this.descricoesCaixas.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return this.descricoesCaixas.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  selecionaCaixa(item) {

    var caixa = this.caixas.find(c => c.descricao === item.item);
    if (caixa != null) {
      this.caixa = caixa;
    }
    else this.caixa = new Caixa();
  }

  visualizarAgendamentosMedico(e: any) {
    var agendamentosMedico = this.agendamentos.find(c => c.medicoId == e.medicoId);

    console.log(agendamentosMedico);

    

  }

  settingsAgendamentosMedicos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      nomeMedico: {
        title: 'Médico',
        filter: false
      },
      quantidadeAgendamentos: {
        title: 'Qtd. Agendamentos',
        filter: false
      },
      total: {
        title: 'Total Agendamentos',
        valuePrepareFunction: (total) => { return this.util.formatarDecimal(total) },
        filter: false
      },
      mediaAgendamento: {
        title: 'Média por Agendamento',
        valuePrepareFunction: (mediaAgendamento) => { return this.util.formatarDecimal(mediaAgendamento) },
        filter: false
      }
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    actions:
    {
      columnTitle: '',
      delete: false,
      add: false,
    }
  };

  settingsEntradasSaidas = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      medicoId: {
        title: 'Médico',
        filter: true,
        valuePrepareFunction: (medicoId) => {

          if (this.util.isNullOrWhitespace(medicoId) || !this.util.hasItems(this.medicos))
            return "Todos";
          else {

            var medico = this.medicos.find(c => c.id == medicoId);
            if (medico != null)
              return medico.nomeCompleto;
            else return "";
          }
        }
      },
      caixa: {
        title: 'Caixa',
        filter: true,
        valuePrepareFunction: (caixa) => {
          return caixa != null && caixa != "" ? this.caixaService.retornarDescricaoCaixa(caixa, this.funcionarios, this.medicos).descricao : "";
        }
      },
      dataEmissao: {
        title: 'Emissão',
        filter: true,
        valuePrepareFunction: (dataEmissao) => { return this.util.dataParaString(dataEmissao) }
      },
      valor: {
        title: 'Valor',
        valuePrepareFunction: (valor) => {
          return this.util.formatarDecimal(valor)
        },
        filter: false
      }
    },
    actions:
    {
      columnTitle: '',
      delete: false,
      add: false,
      edit: false
    }
  };
}
