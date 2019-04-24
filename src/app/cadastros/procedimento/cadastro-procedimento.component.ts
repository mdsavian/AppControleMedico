import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Procedimento } from '../../modelos/procedimento';
import { ProcedimentoService } from '../../services/procedimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-procedimento.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroProcedimentoComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef }) private descricao: ElementRef;
  
  mensagemErro: string;
  id: string;
  procedimento: Procedimento = {
    id: "", descricao: "", cor:""
  };

  constructor(private procedimentoService: ProcedimentoService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.procedimentoService.buscarPorId(this.id).subscribe(dado => {
        if (dado != null && dado.descricao != '') {
          this.descricao.nativeElement.setAttribute('readonly', true);
          this.procedimento = dado;
          this.procedimentoService.procedimento = dado;
        }
      });
    }    

  } 

  public onSubmit(): void {
    this.procedimentoService.salvar(this.procedimento).subscribe(
      data => {
        this.router.navigate(["listagem/listagemprocedimento"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, {windowClass:"modal-holder modal-error"});
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
