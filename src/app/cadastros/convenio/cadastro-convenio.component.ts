import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Convenio } from '../../modelos/convenio';
import { Medico } from '../../modelos/medico';
import * as tableData from './listagem-medico-convenio-settings';

import { ConvenioService } from '../../services/convenio.service';
import { LocalDataSource } from 'ng2-smart-table';

import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

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

    this.convenios = this.convenioService.listaConvenio;

    if (this.convenioService.convenio != null) {
      this.convenio = this.convenioService.convenio;
      this.nomeConvenio.nativeElement.setAttribute('readonly', true);
    }
    
    this.convenioService.buscarMedicosPorConvenio(this.id).subscribe(medicos => {
      this.listaMedicos = medicos;
      this.source = new LocalDataSource(this.listaMedicos);
    });

  }

  constructor(private convenioService: ConvenioService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }


  public onSubmit(): void {
    this.convenioService.salvar(this.convenio).subscribe(
      data => {
        this.router.navigate(["listagem/listagemconvenio"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }
}
