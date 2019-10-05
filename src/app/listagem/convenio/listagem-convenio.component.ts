import { Component } from '@angular/core';
import * as tableData from './listagem-convenio-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { MedicoService } from '../../services/medico.service';
import { Util } from '../../uteis/Util';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-convenio.component.html'
})
export class ListagemConvenioComponent {
  source: LocalDataSource;
  listaConvenios: Array<Convenio>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private convenioService: ConvenioService, private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaConvenios();
    this.isSpinnerVisible = false;
  }

  buscaConvenios(): void {
    this.convenioService.Todos().subscribe(dados => {
      this.listaConvenios = dados;
      this.convenioService.listaConvenio = this.listaConvenios;
      this.source = new LocalDataSource(this.listaConvenios);
    });
  }

  deletarRegistro(event) {
    this.medicoService.buscarMedicoConvenio(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir convênio vínculado a médico(s).";
      }
      else {

        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.convenioService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaConvenios();
                }
              });
            }
          }
        );
      }
    });
  }

  editarRegistro(event) {
    this.convenioService.convenio = this.listaConvenios.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroconvenio']);
  }

  criarRegistro(event) {
    this.convenioService.convenio = null;
    this.router.navigate(['/cadastros/cadastroconvenio']);
  }
}


