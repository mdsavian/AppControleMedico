import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Servico } from '../../modelos/servico';
import { ServicoService } from '../../services/servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroServicoComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef }) private descricao: ElementRef;
  
  mensagemErro: string;
  id: string;
  servico: Servico = {
    id: "", descricao: "", cor:""
  };

  constructor(private servicoService: ServicoService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.servicoService.buscarPorId(this.id).subscribe(dado => {
        if (dado != null && dado.descricao != '') {
          this.descricao.nativeElement.setAttribute('readonly', true);
          this.servico = dado;
          this.servicoService.servico = dado;
        }
      });
    }    

  } 

  public onSubmit(): void {
    this.servicoService.salvar(this.servico).subscribe(
      data => {
        this.router.navigate(["listagem/listagemservico"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, {windowClass:"modal-holder modal-error"});
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
