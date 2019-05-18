import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Cirurgia } from '../../modelos/cirurgia';
import { CirurgiaService } from '../../services/cirurgia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-cirurgia.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroCirurgiaComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef }) private descricao: ElementRef;
  
  mensagemErro: string;
  id: string;
  cirurgia: Cirurgia = {
    id: "", descricao: "", corFundo:"#000000", corLetra:"#ffffff"
  };

  constructor(private cirurgiaService: CirurgiaService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.cirurgiaService.buscarPorId(this.id).subscribe(dado => {
        if (dado != null && dado.descricao != '') {
          this.descricao.nativeElement.setAttribute('readonly', true);
          this.cirurgia = dado;
          this.cirurgiaService.cirurgia = dado;
        }
      });
    }    

  } 

  public onSubmit(): void {
    this.cirurgiaService.salvar(this.cirurgia).subscribe(
      data => {
        this.router.navigate(["listagem/listagemcirurgia"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, {windowClass:"modal-holder modal-error"});
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
