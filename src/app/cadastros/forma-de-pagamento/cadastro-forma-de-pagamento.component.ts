import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EVistaPrazo } from '../../enums/EVistaPrazo';

@Component({
  templateUrl: './cadastro-forma-de-pagamento.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroFormaDePagamentoComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static:true }) private descricao: ElementRef;
  @ViewChild('tipoPagamento', { read: ElementRef, static:true }) private tipoPagamento: ElementRef;

  mensagemErro: string;
  vistaPrazo: string = EVistaPrazo[1].toString();
  id: string;
  formaDePagamento = new FormaDePagamento();
  vistaPrazoEnum = EVistaPrazo;

  constructor(private formaDePagamentoService: FormaDePagamentoService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    this.formaDePagamento.tipoPagamento = EVistaPrazo["À Vista"];

    if (this.formaDePagamentoService.formaDePagamento != null) {
      this.descricao.nativeElement.setAttribute('readonly', true);
      this.tipoPagamento.nativeElement.setAttribute('disabled', true);
      this.formaDePagamento = this.formaDePagamentoService.formaDePagamento;
      this.vistaPrazo = EVistaPrazo[this.formaDePagamento.tipoPagamento];
    }
  }

  selecionaTipoPagamento(value: string) {
    if (value == "À Prazo") {
      if (this.formaDePagamento.descricao.toUpperCase() == "DINHEIRO") {
        value = this.tipoPagamento.nativeElement.value = EVistaPrazo[1].toString();
      }      
    }  
    this.formaDePagamento.tipoPagamento = EVistaPrazo[value];
  }

  public onSubmit(): void {
    this.formaDePagamentoService.salvar(this.formaDePagamento).subscribe(
      data => {
        this.router.navigate(["listagem/listagemformadepagamento"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
