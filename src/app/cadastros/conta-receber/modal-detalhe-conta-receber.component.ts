import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ContaReceber } from '../../modelos/contaReceber';
import { ContaReceberService } from '../../services/contaReceber.service';
import { PacienteService } from '../../services/paciente.service';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estados } from "../../enums/estados";
import { Paises } from "../../enums/paises";
import { Paciente } from '../../modelos/paciente';
import { Observable, observable, forkJoin } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { distinctUntilChanged, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { ETipoContaReceber } from '../../enums/ETipoContaReceber';
import { AppService } from '../../services/app.service';
import { ModalPagamentoComponent } from '../../shared/modal/modal-pagamento.component';
import { ContaReceberPagamento } from '../../modelos/contaReceberPagamento';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
@Component({
  templateUrl: './modal-detalhe-conta-receber.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class ModalDetalheContaReceberComponent implements OnInit, AfterViewChecked {

  sourcePagamentos: LocalDataSource;
  mensagemErro: string;
  util = new Util();
  dataEmi = this.util.dataParaString(new Date());
  dataVenc: string;
  isSpinnerVisible: boolean;
  id: string;
  formaDePagamentos = new Array<FormaDePagamento>();
  contaReceber = new ContaReceber();
  tipoConta = ETipoContaReceber[1].toString();
  estados = Estados;
  paises = Paises;
  pacienteSelecionado: string;
  paciente: Paciente;
  tiposConta = ETipoContaReceber;
  medicoSelecionado: string;

  @ViewChild('valor', { read: ElementRef, static: false }) private valor: ElementRef;
  @ViewChild('saldo', { read: ElementRef, static: false }) private saldo: ElementRef;
  @ViewChild('valorTotal', { read: ElementRef, static: false }) private valorTotal: ElementRef;
  @ViewChild('jurosMulta', { read: ElementRef, static: false }) private jurosMulta: ElementRef;
  @ViewChild('desconto', { read: ElementRef, static: false }) private desconto: ElementRef;

  constructor(private pacienteService: PacienteService, public activeModal: NgbActiveModal,
    private medicoService: MedicoService, private formaPagamentoService: FormaDePagamentoService, private contaReceberService: ContaReceberService) {
  }

  alimentarModelos() {

    var requisicoes = [];
    var reqMedico = this.medicoService.buscarPorId(this.contaReceber.medicoId).map(medico => {
      this.medicoSelecionado = medico.nomeCompleto;
    });

    requisicoes.push(reqMedico);

    var reqPaciente = this.pacienteService.buscarPorId(this.contaReceber.pacienteId).map(paciente => {

      this.pacienteSelecionado = paciente.nomeCompleto;
    });
    requisicoes.push(reqPaciente);

    var reqFormaPagamento = this.formaPagamentoService.Todos().map(formas => {
      if (this.util.hasItems(this.contaReceber.pagamentos)) {
        this.sourcePagamentos = new LocalDataSource(this.contaReceber.pagamentos);
      }
      this.formaDePagamentos = formas;
    });

    requisicoes.push(reqFormaPagamento);

    this.dataEmi = this.util.dataParaString(this.contaReceber.dataEmissao);
    this.dataVenc = this.util.dataParaString(this.contaReceber.dataVencimento);

    return forkJoin(requisicoes);

  }

  public ngOnInit(): void {

    this.isSpinnerVisible = true;
    if (this.contaReceber != null) {

      this.alimentarModelos().subscribe(c => {
        this.isSpinnerVisible = false;
      });
    }
  }

  fechar() {
    this.activeModal.close();
  }

  ngAfterViewChecked(): void {

    if (this.valorTotal != null)
      this.valorTotal.nativeElement.value = this.util.formatarDecimalBlur(this.valorTotal.nativeElement.value);

    if (this.saldo != null)
      this.saldo.nativeElement.value = this.util.formatarDecimalBlur(this.saldo.nativeElement.value);

    if (this.valor != null)
      this.valor.nativeElement.value = this.util.formatarDecimalBlur(this.valor.nativeElement.value);

    if (this.jurosMulta != null)
      this.jurosMulta.nativeElement.value = this.util.formatarDecimalBlur(this.jurosMulta.nativeElement.value);

    if (this.desconto != null)
      this.desconto.nativeElement.value = this.util.formatarDecimalBlur(this.desconto.nativeElement.value);

  }

  calcularSaldo() {
    if (this.util.hasItems(this.contaReceber.pagamentos)) {
      var pagamentos = 0;

      this.contaReceber.pagamentos.forEach(pagamento => {

        let val = pagamento.valor * pagamento.parcela;
        pagamentos = +pagamentos + +val;
      });

      var saldo = this.contaReceber.valorTotal - pagamentos;
      this.contaReceber.saldo = parseFloat(saldo.toFixed(2));
    }
    else
      this.contaReceber.saldo = this.contaReceber.valorTotal;
  }

  settingsPagamentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum pagamento",
    columns: {
      dataPagamento: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (dataPagamento) => {
          return this.util.dataParaString(dataPagamento);;
        }
      },
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
      delete: false,
      add: false,
      columnTitle: '  '
    }
  };
}


