import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Cirurgia } from '../../modelos/cirurgia';
import { CirurgiaService } from '../../services/cirurgia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';

@Component({
  templateUrl: './cadastro-cirurgia.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroCirurgiaComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static:true }) private descricao: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valorModel: ElementRef;

  mensagemErro: string;
  cirurgia = new Cirurgia();
  util = new Util();


  constructor(private cirurgiaService: CirurgiaService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();

      if (this.valorModel != null)
        this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(this.valorModel.nativeElement.value);
  }

  public ngOnInit(): void {

    if (this.cirurgiaService.cirurgia) {
      this.cirurgia = this.cirurgiaService.cirurgia;
      this.descricao.nativeElement.setAttribute('readonly', true);
    }

  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  public onSubmit(): void {
    this.cirurgiaService.cirurgia = null;
    this.cirurgiaService.salvar(this.cirurgia).subscribe(
      data => {        
        this.router.navigate(["listagem/listagemcirurgia"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
