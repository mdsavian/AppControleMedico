import { Component } from '@angular/core';
import * as tableData from './listagem-modelo-prescricao-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ModeloPrescricaoService } from '../../services/modeloPrescricao.service';
import { ModeloPrescricao } from '../../modelos/modeloPrescricao';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PacienteService } from '../../services/paciente.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-modelo-prescricao.component.html'
})
export class ListagemModeloPrescricaoComponent {
  source: LocalDataSource;
  listaModeloPrescricaos: Array<ModeloPrescricao>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private modeloPrescricaoService: ModeloPrescricaoService, private pacienteService: PacienteService,
    private router: Router, private modalService: NgbModal) {

    this.isSpinnerVisible = true;
    this.buscaModeloPrescricao();
    this.isSpinnerVisible = false;
  }

  buscaModeloPrescricao(): void {
    this.modeloPrescricaoService.Todos().subscribe(dados => {
      this.listaModeloPrescricaos = dados;
      this.modeloPrescricaoService.listaModeloPrescricao = this.listaModeloPrescricaos;
      this.source = new LocalDataSource(this.listaModeloPrescricaos);
    });
  }

  deletarRegistro(event) {
    this.modalService.open(ModalExcluirRegistroComponent).result.then(
      result => {
        if (result == 'Sim') {
          this.modeloPrescricaoService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaModeloPrescricao();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.modeloPrescricaoService.modeloPrescricao = this.listaModeloPrescricaos.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastromodeloprescricao']);
  }

  criarRegistro() {
    this.modeloPrescricaoService.modeloPrescricao = null;
    this.router.navigate(['/cadastros/cadastromodeloprescricao']);
  }



}


