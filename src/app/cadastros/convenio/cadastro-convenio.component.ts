import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Convenio } from '../../modelos/convenio';
import { Medico } from '../../modelos/medico';
import * as tableData from './listagem-medico-convenio-settings';
import { ConvenioService } from '../../services/convenio.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import {WebcamImage} from 'ngx-webcam';


@Component({
  templateUrl: './cadastro-convenio.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroConvenioComponent implements OnInit, AfterViewInit {

  @ViewChild('descricao', { read: ElementRef, static:true}) private descricao: ElementRef;

  convenios = new Array<Convenio>();
  mensagemErro: string;
  source: LocalDataSource;
  listaMedicos: Array<Medico>;
  settings = tableData.settings;
  convenio: Convenio = {
    id: "", descricao: "", diasRetorno: 0, ativo: true
  };

  ngAfterViewInit(): void {
    if (this.descricao != null)
      this.descricao.nativeElement.focus();
  }

  editarMedico(event) {
    this.router.navigate(['/cadastros/cadastromedico', { id: event.data.id }]);
  }

  public ngOnInit(): void {

    this.convenioService.Todos().subscribe(convenios => {
    this.convenios = convenios
      this.convenioService.listaConvenio = convenios;
    });

    if (this.convenioService.convenio != null) {
      this.convenio = this.convenioService.convenio;

      this.convenioService.buscarMedicosPorConvenio(this.convenio.id).subscribe(medicos => {
        this.listaMedicos = medicos;
        this.descricao.nativeElement.setAttribute('readonly', true);
        this.source = new LocalDataSource(this.listaMedicos);
      });
    }

  }

  constructor(private convenioService: ConvenioService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }


  public onSubmit(): void {
    this.convenioService.convenio = null;
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
