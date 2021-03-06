import { Component } from '@angular/core';
import * as tableData from './listagem-cirurgia-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { CirurgiaService } from '../../services/cirurgia.service';
import { Cirurgia } from '../../modelos/cirurgia';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-cirurgia.component.html'
})
export class ListagemCirurgiaComponent {
  source: LocalDataSource;
  listaCirurgias: Array<Cirurgia>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private cirurgiaService: CirurgiaService, private agendamentoService: AgendamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaCirurgias();
    this.isSpinnerVisible = false;
  }

  buscaCirurgias(): void {
    this.cirurgiaService.Todos().subscribe(dados => {
      this.listaCirurgias = dados;
      this.cirurgiaService.listaCirurgia = this.listaCirurgias;
      this.source = new LocalDataSource(this.listaCirurgias);
    });
  }

  deletarRegistro(event) {
    this.agendamentoService.buscarAgendamentosCirurgia(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir cirurgia vínculada a agendamento(s).";
      }
      else {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.cirurgiaService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaCirurgias();
                }
              });
            }
          }
        );
      }
    });
  }

  editarRegistro(event) {
    this.cirurgiaService.cirurgia = this.listaCirurgias.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrocirurgia']);
  }

  criarRegistro(event) {
    this.cirurgiaService.cirurgia = null;
    this.router.navigate(['/cadastros/cadastrocirurgia']);
  }



}


