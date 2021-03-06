import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Local } from '../../modelos/local';
import { LocalService } from '../../services/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-cadastro-local.component',
  templateUrl: './cadastro-local.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroLocalComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static:false }) private descricao: ElementRef;

  mensagemErro: string;
  id: string;
  local: Local = {
    id: "", descricao: ""
  };

  constructor(private localService: LocalService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    if (this.localService.local != null) {
      this.descricao.nativeElement.setAttribute('readonly', true);
      this.local = this.localService.local;
      this.localService.local = this.localService.local;
    }
  }

  public onSubmit(): void {
    this.localService.local = null;
    this.localService.salvar(this.local).subscribe(
      data => {
        this.router.navigate(["listagem/listagemlocal"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
