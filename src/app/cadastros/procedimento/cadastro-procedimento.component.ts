import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Procedimento } from '../../modelos/procedimento';
import { ProcedimentoService } from '../../services/procedimento.service';
import { Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';

@Component({
  templateUrl: './cadastro-procedimento.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroProcedimentoComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static: true }) private descricao: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valorModel: ElementRef;

  mensagemErro: string;
  id: string;
  procedimento: Procedimento = new Procedimento();
  util = new Util();
  constructor(private procedimentoService: ProcedimentoService, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
      
    if (this.valorModel != null)
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(this.valorModel.nativeElement.value);
  }

  public ngOnInit(): void {
    if (this.procedimentoService.procedimento != null) {
      this.descricao.nativeElement.setAttribute('readonly', true);
      this.procedimento = this.procedimentoService.procedimento;
    }

  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }


  public onSubmit(): void {
    this.procedimentoService.procedimento = null;
    this.procedimentoService.salvar(this.procedimento).subscribe(
      data => {
        this.router.navigate(["listagem/listagemprocedimento"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
