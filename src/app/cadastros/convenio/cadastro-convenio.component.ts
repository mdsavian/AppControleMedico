import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Convenio } from '../../modelos/convenio';
import { Medico } from '../../modelos/medico';
import * as tableData from './listagem-medico-convenio-settings';

import { ConvenioService } from '../../services/convenio.service';
import { LocalDataSource } from 'ng2-smart-table';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './cadastro-convenio.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroConvenioComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeConvenio', { read: ElementRef }) private nomeConvenio: ElementRef;

  convenios = new Array<Convenio>();
  mensagemErro: string;
  id: string;
  source: LocalDataSource;
  listaMedicos: Array<Medico>;
  settings = tableData.settings;
  convenio: Convenio = {
    id: "", nomeConvenio: "", diasRetorno: 0, ativo: true
  };

  ngAfterViewInit(): void {
    if (this.nomeConvenio != null)
      this.nomeConvenio.nativeElement.focus();
  }

  editarMedico(event) {
    this.router.navigate(['/cadastros/cadastromedico', { id: event.data.id }]);
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.convenios = this.convenioService.listaConvenio;

    if (this.id != null) {
      this.convenioService.buscarPorId(this.id).subscribe(dado => {
        if (dado != null && dado.nomeConvenio != '') {
          this.convenio = dado;
          this.convenioService.convenio = dado;
          this.nomeConvenio.nativeElement.setAttribute('readonly', true);
        }
      });

      this.convenioService.buscarMedicosPorConvenio(this.id).subscribe(medicos => {
        this.listaMedicos = medicos;
        this.source = new LocalDataSource(this.listaMedicos);
      });
    }
  }

  constructor(private convenioService: ConvenioService, private route: ActivatedRoute, private router: Router) {
  }


  public onSubmit(): void {
    this.convenioService.salvar(this.convenio).subscribe(
      data => {
        this.router.navigate(["listagem/listagemconvenio"]);
      },
      error => {

      }
    )
  }
}
