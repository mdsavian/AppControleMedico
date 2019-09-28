import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {
  NgbModal, NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Pagamento } from '../../modelos/naoPersistidos/pagamento';
import { EVistaPrazo } from '../../enums/EVistaPrazo';
import { Util } from '../../uteis/Util';
import { AppService } from '../../services/app.service';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';

@Component({
  selector: 'app-modal-pagamento',
  templateUrl: './modal-pagamento.component.html'

})

export class ModalPagamentoComponent {
  @ViewChild('formaPagamentoModel', { read: ElementRef, static: true }) private formaPagamentoModel: ElementRef;
  @ViewChild('tipoPagamento', { read: ElementRef, static: true }) private tipoPagamento: ElementRef;
  
  constructor(public activeModal: NgbActiveModal, private appService:AppService, private formaPagamentoService:FormaDePagamentoService) { }  

  formasPagamento = new Array<FormaDePagamento>();
  pagamento = new Pagamento();
  vistaPrazoEnum = EVistaPrazo;
  vistaPrazo: string = EVistaPrazo[1].toString();
  visualizaParcela =false;
  util = new Util();

  ngOnInit() {    
    this.pagamento.dataPagamento = this.util.dataParaString(new Date());
this.pagamento.usuarioId = this.appService.retornarUsuarioCorrente().id;

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
  }

  salvar()
  {
    this.activeModal.close(this.pagamento);
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