import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Exame } from '../../modelos/exame';
import { ExameService } from '../../services/exame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-exame.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroExameComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static:true }) private descricao: ElementRef;

  mensagemErro: string;
  id: string;
  exame: Exame = {
    id: "", descricao: "", corFundo: "#000000", corLetra: "#ffffff"
  };

  constructor(private exameService: ExameService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    if (this.exameService.exame != null) {
      this.descricao.nativeElement.setAttribute('readonly', true);
      this.exame = this.exameService.exame;
    }
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
