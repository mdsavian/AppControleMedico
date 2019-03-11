import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Convenio } from '../../modelos/convenio';
import { Medico } from '../../modelos/medico';
import * as tableData from './listagem-medico-convenio-settings';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ConvenioService } from '../../services/convenio.service';
import { LocalDataSource } from 'ng2-smart-table';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './cadastro-convenio.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroConvenioComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeConvenio') private nomeConvenio: ElementRef;
  @ViewChild('modalErro', {read: TemplateRef}) modalErro: TemplateRef<any>;

  mensagemErro:string;
  id: string;
  source: LocalDataSource;
  listaMedicos: Array<Medico>;
  settings = tableData.settings;
  convenio: Convenio = {
    id: "", nomeConvenio: "", diasRetorno: 0, ativo: true
  };

  ngAfterViewInit(): void {
    this.nomeConvenio.nativeElement.focus();
  }

  editarMedico(event) {
    this.router.navigate(['/cadastros/cadastromedico', { id: event.data.id }]);
  }

  public ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.convenioService.buscarPorId(this.id).subscribe(dado => {
        this.convenio = dado;
      });

      this.convenioService.buscarMedicosPorConvenio(this.id).subscribe(medicos => {
        this.listaMedicos = medicos;
        this.source = new LocalDataSource(this.listaMedicos);
      });
    }
  }

  constructor(private convenioService: ConvenioService, private route: ActivatedRoute, private router: Router,  private modalService: NgbModal ) {
  }

  public onSubmit(): void {
    
    var convenios = new Array<Convenio>();
    
    this.convenioService.Todos().subscribe(c => {
      
      convenios = c;

      if (convenios.length > 0 && convenios.find(c => c.nomeConvenio === this.convenio.nomeConvenio) != null) {
        this.mensagemErro = "Já existe um convênio com este nome.";
        this.modalService.open(this.modalErro);
        return false;
      }
      else {
        console.log("eaasae");
        this.convenioService.salvar(this.convenio).subscribe(
          data => {
            this.router.navigate(["listagem/listagemconvenio"]);
          },
          error => {
  
          }
        )
      }
      
    });
    
  }

}
