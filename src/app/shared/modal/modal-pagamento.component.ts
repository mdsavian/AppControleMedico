import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Pagamento } from '../../modelos/naoPersistidos/pagamento';
import { EVistaPrazo } from '../../enums/EVistaPrazo';
import { Util } from '../../uteis/Util';
import { AppService } from '../../services/app.service';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { ModalErrorComponent } from './modal-error.component';

@Component({
  selector: 'app-modal-pagamento',
  templateUrl: './modal-pagamento.component.html'

})

export class ModalPagamentoComponent {
  @ViewChild('formaPagamentoModel', { read: ElementRef, static: true }) private formaPagamentoModel: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: true }) private valor: ElementRef;
  @ViewChild('tipoPagamento', { read: ElementRef, static: true }) private tipoPagamento: ElementRef;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private appService: AppService, private formaPagamentoService: FormaDePagamentoService) { }

  formasPagamento = new Array<FormaDePagamento>();
  pagamento = new Pagamento();
  vistaPrazo: string = EVistaPrazo[1].toString();
  visualizaParcela = false;
  util = new Util();
  saldo: number;
  dataPag = this.util.dataParaString(new Date());

  ngOnInit() {
    this.pagamento.dataPagamento = new Date();
    this.pagamento.usuarioId = this.appService.retornarUsuarioCorrente().id;
    this.pagamento.vistaPrazo = EVistaPrazo["À Vista"];
    this.pagamento.descricaoPagamento = "DINHEIRO";
    this.pagamento.parcela = 1;

    this.formaPagamentoService.Todos().subscribe(formas => {
      this.pagamento.formaPagamentoId = formas.find(c => true).id;
      this.formasPagamento = formas;
    });
  }

  selecionaTipoPagamento(value: string) {
    if (value == "À Prazo") {
      if (this.pagamento.formaPagamentoId == this.formasPagamento.find(c => c.descricao == "DINHEIRO").id) {
        value = this.tipoPagamento.nativeElement.value = EVistaPrazo[1].toString();
        this.pagamento.vistaPrazo = EVistaPrazo[value];
      }
      else
        this.visualizaParcela = true;
    }
    else {
      this.visualizaParcela = false;
    }
  }

  public formataData(e): void {
    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    if (e.target.id == "dataPagamento") {
      this.pagamento.dataPagamento = this.util.stringParaData(dataFormatada);
      this.dataPag = dataFormatada;

    }
  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valor.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  salvar() {
    var retorno = false;
    var valor = this.pagamento.valor;

    if (!this.util.validaData(this.util.dataParaString(this.pagamento.dataPagamento))) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Data de pagamento inválida";
      retorno = true;
    } else if ((parseFloat(valor.toString()) * this.pagamento.parcela) > this.saldo) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Valor informado maior do que valor de saldo.";
      retorno = true;
    }

    if (!retorno) {
      this.activeModal.close(this.pagamento);
    }

  }

  fechar() {
    this.activeModal.close();
  }

  alteraFormaPagamento() {

    if (this.pagamento.formaPagamentoId == this.formasPagamento.find(c => c.descricao == "DINHEIRO").id) {
      this.tipoPagamento.nativeElement.value = EVistaPrazo[1].toString();
      this.pagamento.vistaPrazo = EVistaPrazo["À Vista"];
    }
    var formaPagamento = this.formasPagamento.find(c => c.id == this.pagamento.formaPagamentoId);

    if (formaPagamento != null) {
      this.pagamento.descricaoPagamento = formaPagamento.descricao;
      this.tipoPagamento.nativeElement.value = EVistaPrazo[formaPagamento.tipoPagamento];
      this.pagamento.vistaPrazo = formaPagamento.tipoPagamento;
      this.tipoPagamento.nativeElement.setAttribute('disabled', true);

    }
    else
      this.tipoPagamento.nativeElement.setAttribute('disabled', false);


    this.selecionaTipoPagamento(EVistaPrazo[this.pagamento.vistaPrazo]);
  }
}