import { Component } from '@angular/core';
import * as tableData from './listagem-exame-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ExameService } from '../../services/exame.service';
import { Exame } from '../../modelos/exame';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Util } from '../../uteis/Util';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-exame.component.html'
})
export class ListagemExameComponent {
  source: LocalDataSource;
  listaExames: Array<Exame>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private exameService: ExameService, private agendamentoService:AgendamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaExames();
    this.isSpinnerVisible = false;
  }

  buscaExames(): void {
    this.exameService.Todos().subscribe(dados => {
      this.listaExames = dados;
      this.exameService.listaExame = this.listaExames;
      this.source = new LocalDataSource(this.listaExames);
    });
  }

  deletarRegistro(event) {
    this.agendamentoService.buscarAgendamentosExame(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir exame vínculado a agendamento(s).";
      }
      else {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.exameService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaExames();
                }
              });
            }
          }
        );
      }
    });
  }

  editarRegistro(event) {
    this.exameService.exame = this.listaExames.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroexame']);
  }

  criarRegistro(event) {
    this.exameService.exame = null;
    this.router.navigate(['/cadastros/cadastroexame']);
  }



}


