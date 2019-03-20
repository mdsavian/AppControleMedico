import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Oficio } from '../../modelos/oficio';
import { OficioService } from '../../services/oficio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './cadastro-oficio.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroOficioComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeOficio', { read: ElementRef }) private nomeOficio: ElementRef;

  oficios = new Array<Oficio>();
  mensagemErro: string;
  id: string;
  oficio: Oficio = {
    id: "", descricao:""
  };

  ngAfterViewInit(): void {
    if (this.nomeOficio != null)
      this.nomeOficio.nativeElement.focus();
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.oficioService.buscarPorId(this.id).subscribe(dado => {
        if (dado != null && dado.descricao != '') {
          this.nomeOficio.nativeElement.setAttribute('readonly', true);
        }
      });
    }
  }

  constructor(private oficioService: OficioService, private route: ActivatedRoute, private router: Router) {
  }

  public onSubmit(): void {
    this.oficioService.salvar(this.oficio).subscribe(
      data => {
        this.router.navigate(["listagem/listagemoficio"]);
      },
      error => {

      }
    )
  }
}
