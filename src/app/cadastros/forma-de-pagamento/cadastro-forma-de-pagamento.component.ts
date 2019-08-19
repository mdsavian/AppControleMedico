import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-forma-de-pagamento.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroFormaDePagamentoComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static: false }) private descricao: ElementRef;

  mensagemErro: string;
  id: string;
  formaDePagamento: FormaDePagamento = {
    id: "", descricao: "", diasRecebimento :0
  };

  constructor(private formaDePagamentoService: FormaDePagamentoService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    if (this.formaDePagamentoService.formaDePagamento != null) {
      this.descricao.nativeElement.setAttribute('readonly', true);
      this.formaDePagamento = this.formaDePagamentoService.formaDePagamento;
    }
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
