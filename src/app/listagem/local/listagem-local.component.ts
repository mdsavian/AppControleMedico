import { Component } from '@angular/core';
import * as tableData from './listagem-local-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { LocalService } from '../../services/local.service';
import { Local } from '../../modelos/local';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Util } from '../../uteis/Util';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-local.component.html'
})
export class ListagemLocalComponent {
  source: LocalDataSource;
  listaLocais: Array<Local>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private localService: LocalService,private agendamentoService:AgendamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaLocais();
    this.isSpinnerVisible = false;
    
  }

  buscaLocais(): void {
    this.localService.Todos().subscribe(dados => {
      this.listaLocais = dados;
      this.localService.listaLocal = this.listaLocais;
      this.source = new LocalDataSource(this.listaLocais);
    });
  }

  deletarRegistro(event) {
    this.agendamentoService.buscarAgendamentosLocal(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir local vínculado a agendamento(s).";
      }
      else {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.localService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaLocais();
                }
              });
            }
          }
        );
      }
    });
  }

  editarRegistro(event) {
    this.localService.local = this.listaLocais.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrolocal']);
  }

  criarRegistro(event) {
    this.localService.local = null;
    this.router.navigate(['/cadastros/cadastrolocal']);
  }



}


