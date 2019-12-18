import { Component } from '@angular/core';
import * as tableData from './listagem-prontuario-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-prontuario.component.html'
})
export class ListagemProntuarioComponent {
  source: LocalDataSource;
  // listaProntuarios: Array<Prontuario>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private agendamentoService: AgendamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaProntuarios();
    this.isSpinnerVisible = false;
  }

  buscaProntuarios(): void {
    // this.prontuarioService.Todos().subscribe(dados => {
    //   this.listaProntuarios = dados;
    //   this.prontuarioService.listaProntuario = this.listaProntuarios;
    //   this.source = new LocalDataSource(this.listaProntuarios);
    // });
  }

  editarRegistro(event) {
    // this.prontuarioService.prontuario = this.listaProntuarios.find(c => c.id == event.data.id);
    // this.router.navigate(['/cadastros/cadastroprontuario']);
  }
}


