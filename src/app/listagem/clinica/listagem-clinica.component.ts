import { Component } from '@angular/core';
import * as tableData from './listagem-clinica-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ClinicaService } from '../../services/clinica.service';
import { Clinica } from '../../modelos/clinica';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-clinica.component.html'
})
export class ListagemClinicaComponent {
  source: LocalDataSource;
  listaClinicas: Array<Clinica>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;

  constructor(private clinicaService: ClinicaService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaClinicas();
    this.isSpinnerVisible = false;
  }

  buscaClinicas(): void {
    this.clinicaService.Todos().subscribe(dados => {
      this.listaClinicas = dados;
      this.clinicaService.listaClinica = this.listaClinicas;
      this.source = new LocalDataSource(this.listaClinicas);
    });
  }

  deletarRegistro(event) {
    this.modalService.open(ModalExcluirRegistroComponent).result.then(
      result => {
        if (result == 'Sim') {
          this.clinicaService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaClinicas();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.clinicaService.clinica = this.listaClinicas.find(c=> c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroclinica']);
  }

  criarRegistro(event) {
    this.clinicaService.clinica = null;
    this.router.navigate(['/cadastros/cadastroclinica']);
  }

  

}


