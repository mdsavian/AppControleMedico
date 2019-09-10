import { Component } from '@angular/core';
import * as tableData from './listagem-procedimento-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ProcedimentoService } from '../../services/procedimento.service';
import { Procedimento } from '../../modelos/procedimento';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

@Component({
  templateUrl: './listagem-procedimento.component.html'
})
export class ListagemProcedimentoComponent {
  source: LocalDataSource;
  listaProcedimentos: Array<Procedimento>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private procedimentoService: ProcedimentoService, private agendamentoService: AgendamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaProcedimentos();
    this.isSpinnerVisible = false;
  }

  buscaProcedimentos(): void {
    this.procedimentoService.Todos().subscribe(dados => {
      this.listaProcedimentos = dados;
      this.procedimentoService.listaProcedimento = this.listaProcedimentos;
      this.source = new LocalDataSource(this.listaProcedimentos);
    });
  }

  deletarRegistro(event, modalExcluir) {
    this.agendamentoService.buscarAgendamentosProcedimento(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir procedimento vínculado a agendamento(s).";
      }
      else {
        this.modalService.open(modalExcluir).result.then(
          result => {
            if (result == 'Sim') {
              this.procedimentoService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaProcedimentos();
                }
              });
            }
          }
        );
      }
    });
  }

  editarRegistro(event) {
    this.procedimentoService.procedimento = this.listaProcedimentos.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroprocedimento']);
  }

  criarRegistro(event) {
    this.procedimentoService.procedimento = null;
    this.router.navigate(['/cadastros/cadastroprocedimento']);
  }



}


