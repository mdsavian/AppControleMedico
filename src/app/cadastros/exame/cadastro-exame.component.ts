import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Exame } from '../../modelos/exame';
import { ExameService } from '../../services/exame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';

@Component({
  templateUrl: './cadastro-exame.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroExameComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static: true }) private descricao: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valorModel: ElementRef;

  mensagemErro: string;
  id: string;
  exame = new Exame();
  util = new Util();

  constructor(private exameService: ExameService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();

      if (this.valorModel != null)
        this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(this.valorModel.nativeElement.value);
  }

  public ngOnInit(): void {

    if (this.exameService.exame != null) {
      this.exame = this.exameService.exame;
      this.descricao.nativeElement.setAttribute('readonly', true);      
    }
  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  public onSubmit(): void {
    this.exameService.exame = null;
    this.exameService.salvar(this.exame).subscribe(
      data => {
        this.router.navigate(["listagem/listagemexame"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
