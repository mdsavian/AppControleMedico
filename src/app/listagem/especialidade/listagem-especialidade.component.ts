import { Component } from '@angular/core';
import * as tableData from './listagem-especialidade-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { EspecialidadeService } from '../../services/especialidade.service';
import { Especialidade } from '../../modelos/especialidade';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from '../../services/medico.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-especialidade.component.html'
})
export class ListagemEspecialidadeComponent {
  source: LocalDataSource;
  listaEspecialidades: Array<Especialidade>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();

  constructor(private especialidadeService: EspecialidadeService, private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaEspecialidades();
    this.isSpinnerVisible = false;
  }

  buscaEspecialidades(): void {
    this.especialidadeService.Todos().subscribe(dados => {
      this.listaEspecialidades = dados;
      this.especialidadeService.listaEspecialidade = dados;
      this.source = new LocalDataSource(this.listaEspecialidades);
    });
  }
  settings = tableData.settings;

  deletarRegistro(event) {
    this.medicoService.buscarMedicoEspecialidade(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir especialidade vínculada a médico(s).";
      }
      else {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.especialidadeService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaEspecialidades();
                }
              });
            }
          }
        );
      }
    });
  }

  editarRegistro(event) {
    this.especialidadeService.especialidade = this.listaEspecialidades.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroespecialidade']);
  }

  criarRegistro(event) {
    this.especialidadeService.especialidade = null;
    this.router.navigate(['/cadastros/cadastroespecialidade']);
  }
}


