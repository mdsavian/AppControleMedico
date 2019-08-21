import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Oficio } from '../../modelos/oficio';
import { OficioService } from '../../services/oficio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-oficio.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroOficioComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static:false }) private descricao: ElementRef;

  mensagemErro: string;
  id: string;
  oficio: Oficio = {
    id: "", descricao: ""
  };

  constructor(private oficioService: OficioService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {
    if (this.oficioService.oficio != null) {
      this.descricao.nativeElement.setAttribute('readonly', true);
      this.oficio = this.oficioService.oficio;
    }
  }

  public onSubmit(): void {
    this.oficioService.salvar(this.oficio).subscribe(
      data => {
        this.router.navigate(["listagem/listagemoficio"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
