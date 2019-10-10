import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ContaPagar } from '../../modelos/contaPagar';
import { ContaPagarService } from '../../services/contaPagar.service';
import { FornecedorService } from '../../services/fornecedor.service';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estados } from "../../enums/estados";
import { Paises } from "../../enums/paises";
import { Fornecedor } from '../../modelos/fornecedor';
import { Observable } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { distinctUntilChanged, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { ETipoContaPagar } from '../../enums/ETipoContaPagar';
import { ModalCadastroFornecedorComponent } from '../fornecedor/modal-cadastro-fornecedor.component';
import { AppService } from '../../services/app.service';
import { ModalPagamentoComponent } from '../../shared/modal/modal-pagamento.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { ContaPagarPagamento } from '../../modelos/contaPagarPagamento';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
@Component({
  templateUrl: './cadastro-conta-pagar.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroContaPagarComponent implements OnInit, AfterViewInit {

  @ViewChild('fornecedorModel', { read: ElementRef, static: false }) private fornecedorModel: ElementRef;
  @ViewChild('tipoContaModel', { read: ElementRef, static: false }) private tipoContaModel: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valor: ElementRef;
  @ViewChild('numeroDocumento', { read: ElementRef, static: false }) private numeroDocumento: ElementRef;
  @ViewChild('numeroFatura', { read: ElementRef, static: false }) private numeroFatura: ElementRef;

  sourcePagamentos: LocalDataSource;
  mensagemErro: string;
  util = new Util();
  dataEmi = this.util.dataParaString(new Date());
  dataVenc: string;
  id: string;
  formaDePagamentos = new Array<FormaDePagamento>();
  contaPagar = new ContaPagar();
  tipoConta = ETipoContaPagar[1].toString();
  estados = Estados;
  paises = Paises;
  fornecedorSelecionado: string;
  nomeFornecedores: Array<string>;
  fornecedores: Array<Fornecedor> = [];
  fornecedor: Fornecedor;
  falhaNaBusca: boolean;
  tiposConta = ETipoContaPagar;

  constructor(private fornecedorService: FornecedorService, private formaPagamentoService: FormaDePagamentoService, private appService: AppService, private contaPagarService: ContaPagarService, private route: ActivatedRoute, private enderecoService: EnderecoService, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    this.fornecedorService.Todos().subscribe(fornec => {
      this.fornecedores = fornec;

      if (!this.util.isNullOrWhitespace(this.contaPagar.fornecedorId))
        this.fornecedorSelecionado = this.fornecedores.find(c => c.id == this.contaPagar.fornecedorId).razaoSocial;

      this.nomeFornecedores = new Array<string>();
      this.fornecedores.forEach(d => {
        this.nomeFornecedores.push(d.razaoSocial);
      });
    });

    if (this.fornecedorModel != null) {
      this.fornecedorModel.nativeElement.focus();
    }

    if (this.contaPagarService.contaPagar != null) {
      if (this.fornecedorModel != null)
        this.fornecedorModel.nativeElement.setAttribute('readonly', true);

      if (this.tipoContaModel != null)
        this.tipoContaModel.nativeElement.setAttribute('readonly', true);

      if (this.valor != null && this.util.hasItems(this.contaPagar.pagamentos))
        this.valor.nativeElement.setAttribute('readonly', true);

      if (this.numeroDocumento != null && !this.util.isNullOrWhitespace(this.contaPagar.numeroDocumento))
        this.numeroDocumento.nativeElement.setAttribute('readonly', true);

      if (this.numeroFatura != null && this.contaPagar.numeroFatura > 0)
        this.numeroFatura.nativeElement.setAttribute('readonly', true);
    }
  }

  public ngOnInit(): void {

    this.formaPagamentoService.Todos().subscribe(formas => {
      if (this.contaPagarService.contaPagar != null && this.util.hasItems(this.contaPagar.pagamentos)) {
        this.sourcePagamentos = new LocalDataSource(this.contaPagar.pagamentos);
      }
      this.formaDePagamentos = formas;
    });

    if (this.contaPagarService.contaPagar != null) {
      this.contaPagar = this.contaPagarService.contaPagar;
      this.dataEmi = this.contaPagar.dataEmissao;
      this.dataVenc = this.contaPagar.dataVencimento;
    }
    else {
      this.contaPagar.usuarioId = this.appService.retornarUsuarioCorrente().id;
      this.contaPagar.clinicaId = this.appService.retornarClinicaCorrente().id;
      this.contaPagar.tipoContaPagar = ETipoContaPagar["Lançamento Manual"];
      this.contaPagar.dataEmissao = this.util.dataParaString(new Date());
    }
  }

  calcularSaldo() {
    if (this.util.hasItems(this.contaPagar.pagamentos)) {
      var pagamentos = 0;

      this.contaPagar.pagamentos.forEach(pagamento => {

        let val = pagamento.valor * pagamento.parcela;
        pagamentos = +pagamentos + +val;
      });

      var saldo = this.contaPagar.valorTotal - pagamentos;
      this.contaPagar.saldo = parseFloat(saldo.toFixed(2));
    }
    else
      this.contaPagar.saldo = this.contaPagar.valorTotal;
  }

  buscaFornecedor = (text$: Observable<string>) =>
    text$.pipe(
      distinctUntilChanged(),
      map(term => {

        if (this.nomeFornecedores == null) {
          this.falhaNaBusca = true;
          return false;
        }

        if (term.length < 2) {
          this.falhaNaBusca = true;
          return false;
        }
        this.falhaNaBusca = this.nomeFornecedores.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return this.nomeFornecedores.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  calcularJurosDesconto(valor: number, operacao: string) {
    var valorTot = this.contaPagar.valor;
    if (valorTot == null)
      return;

    if (valorTot > 0) {
      if (operacao == "desconto" || (this.contaPagar.desconto != null && this.contaPagar.desconto > 0)) {
        let valorDesconto = valor;
        if (this.contaPagar.desconto != null && this.contaPagar.desconto > 0)
          valorDesconto = this.contaPagar.desconto;
        valorTot = +valorTot + -valorDesconto;
      }

      if (operacao == "juros" || (this.contaPagar.jurosMulta != null && this.contaPagar.jurosMulta > 0)) {
        let valorJuros = valor;
        if (this.contaPagar.jurosMulta != null && this.contaPagar.jurosMulta > 0)
          valorJuros = this.contaPagar.jurosMulta;
        valorTot = +valorTot + +valorJuros;
      }
    }

    this.contaPagar.valorTotal = parseFloat(valorTot.toString());
    this.calcularSaldo();

  }

  selecionaFornecedor(item) {
    var fornecedor = this.fornecedores.find(c => c.razaoSocial === item.item);
    if (fornecedor != null) {
      this.fornecedor = fornecedor;
      this.contaPagar.fornecedorId = fornecedor.id;
    }
  }

  public formataData(e): void {
    if (e.target.id == "dataVencimento" && e.target.value.length == 10) {
      this.contaPagar.dataVencimento = e.target.value;
    }
    if (e.target.id == "dataEmissao" && e.target.value.length == 10) {
      this.contaPagar.dataEmissao = e.target.value;
    }
  }

  selecionaTipoConta(value: string) {
    this.contaPagar.tipoContaPagar = ETipoContaPagar[value];
  }

  adicionarPagamento() {
    var modalPagamento = this.modalService.open(ModalPagamentoComponent, { size: "lg" });
    modalPagamento.componentInstance.saldo = this.contaPagar.saldo;
    modalPagamento.result.then(pagamento => {
      if (pagamento != null) {
        var contaPagamento = new ContaPagarPagamento();
        contaPagamento.dataPagamento = pagamento.dataPagamento;
        contaPagamento.valor = pagamento.valor;
        contaPagamento.formaPagamentoId = pagamento.formaPagamentoId;
        contaPagamento.usuarioId = pagamento.usuarioId;
        contaPagamento.vistaPrazo = pagamento.vistaPrazo;
        contaPagamento.parcela = pagamento.parcela;
        contaPagamento.descricaoPagamento = pagamento.descricaoPagamento;

        if (!this.util.hasItems(this.contaPagar.pagamentos)) {
          this.contaPagar.pagamentos = new Array<ContaPagarPagamento>();
          contaPagamento.codigo = 1;
        }
        else
          contaPagamento.codigo = this.contaPagar.pagamentos.length + 1;

        this.contaPagar.pagamentos.push(contaPagamento);
        this.sourcePagamentos = new LocalDataSource(this.contaPagar.pagamentos);
        this.calcularSaldo();
      }
    }, error => { });
  }

  formatarDecimal(valor)  
  {
    console.log(valor, this.util.formatarDecimalBlur(valor));
    this.valor.nativeElement.value = this.util.formatarDecimalBlur(valor);
  }

  adicionaFornecedor() {
    var modalNovoFornecedor = this.modalService.open(ModalCadastroFornecedorComponent, { size: 'lg' });

    modalNovoFornecedor.result.then((fornecedor: Fornecedor) => {
      if (fornecedor != null && fornecedor.razaoSocial != '') {
        var fornecedorExistente = this.fornecedores.find(c => c.razaoSocial == fornecedor.razaoSocial || c.cpfCnpj == fornecedor.cpfCnpj);
        if (fornecedorExistente != null) {
          this.fornecedorSelecionado = fornecedorExistente.razaoSocial;
          this.contaPagar.fornecedorId = fornecedorExistente.id;
          this.falhaNaBusca = false;
        }
        else {
          this.fornecedores.push(fornecedor);
          this.nomeFornecedores.push(fornecedor.razaoSocial);
          this.fornecedorSelecionado = fornecedor.razaoSocial;
          this.falhaNaBusca = false;

          this.fornecedorService.salvar(fornecedor).subscribe(fornecedorCadastrado => {
            this.contaPagar.fornecedorId = fornecedorCadastrado.id;
          });
        }
      }
    }).catch((error) => { })

  }

  deletarPagamento(event: any) {

    console.log(event.data.codigo);
    this.modalService.open(ModalExcluirRegistroComponent).result.then(
      result => {
        if (result == 'Sim') {
          var index = this.contaPagar.pagamentos.indexOf(event.data.codigo);
          this.contaPagar.pagamentos.splice(index, 1);
          this.sourcePagamentos = new LocalDataSource(this.contaPagar.pagamentos);
          this.calcularSaldo();
        }
      }
    );
  }

  public salvar(): void {
    this.contaPagarService.contaPagar = null;
    if (this.validar()) {
      this.contaPagarService.salvar(this.contaPagar).subscribe(
        data => {
          this.router.navigate(["listagem/listagemcontapagar"]);
        },
        error => {
          var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
          modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

        }
      );
    }
  }

  public validar(): boolean {

    if (this.util.stringParaData(this.contaPagar.dataEmissao) > this.util.stringParaData(this.contaPagar.dataVencimento)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Data de vencimento menor do que data de emissão.";
      return false;
    }
    else if (this.contaPagar.desconto > this.contaPagar.valorTotal) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Desconto maior do que valor total";
      return false;
    }
    else if (this.util.hasItems(this.contaPagar.pagamentos)) {
      let soma = 0;
      this.contaPagar.pagamentos.forEach(pag => soma = +soma + +pag.valor);
      if (soma > this.contaPagar.valorTotal) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Soma dos pagamentos maior do que valor total";
        return false;
      }
    }
    return true;
  }

  settingsPagamentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum pagamento",
    columns: {
      dataPagamento: {
        title: 'Data',
        filter: true
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
      columnTitle: '  '
    },
    delete:
    {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    },
    add:
    {
      addButtonContent: 'Adicionar Pagamento'
    }
  };
}


