import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Especialidade } from '../../modelos/especialidade';
import { EspecialidadeService } from '../../services/especialidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-especialidade.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroEspecialidadeComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef }) private descricao: ElementRef;
  
  mensagemErro: string;
  id: string;
  especialidade: Especialidade = {
    id: "", descricao: ""
  };

  constructor(private especialidadeService: EspecialidadeService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.especialidadeService.buscarPorId(this.id).subscribe(dado => {
        if (dado != null && dado.descricao != '') {
          this.descricao.nativeElement.setAttribute('readonly', true);
          this.especialidade = dado;
          this.especialidadeService.especialidade = dado;
        }
      });
    }    

  } 

  public onSubmit(): void {
    this.especialidadeService.salvar(this.especialidade).subscribe(
      data => {
        this.router.navigate(["listagem/listagemespecialidade"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, {windowClass:"modal-holder modal-error"});
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}