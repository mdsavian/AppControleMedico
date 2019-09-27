import { Component } from '@angular/core';
import * as tableData from './listagem-conta-pagar-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ContaPagarService } from '../../services/contaPagar.service';
import { ContaPagar } from '../../modelos/contaPagar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

@Component({
  templateUrl: './listagem-conta-pagar.component.html'
})
export class ListagemContaPagarComponent {
  source: LocalDataSource;
  listaContaPagars: Array<ContaPagar>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;
  util = new Util();

  constructor(private contaPagarService: ContaPagarService, private agendamentoService: AgendamentoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaContaPagars();
    this.isSpinnerVisible = false;
  }

  buscaContaPagars(): void {
    this.contaPagarService.Todos().subscribe(dados => {
      this.listaContaPagars = dados;
      this.contaPagarService.listaContaPagar = this.listaContaPagars;
      this.source = new LocalDataSource(this.listaContaPagars);
    });
  }

  deletarRegistro(event, modalExcluir) {
    // this.agendamentoService.buscarAgendamentosContaPagar(event.data.id).subscribe(agendamentos => {
    //   console.log(agendamentos);
    //   if (this.util.hasItems(agendamentos)) {
    //     var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
    //     modal.componentInstance.mensagemErro = "Não é possível excluir contaPagar vínculada a agendamento(s).";
    //   }
    //   else {
    //     this.modalService.open(modalExcluir).result.then(
    //       result => {
    //         if (result == 'Sim') {
    //           this.contaPagarService.Excluir(event.data.id).subscribe(retorno => {
    //             if (retorno) {
    //               this.buscaContaPagars();
    //             }
    //           });
    //         }
    //       }
    //     );
    //   }
    // });
  }

  editarRegistro(event) {
    this.contaPagarService.contaPagar = this.listaContaPagars.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrocontapagar']);
  }

  criarRegistro(event) {
    console.log("opa eae12121");
    this.contaPagarService.contaPagar = null;
    this.router.navigate(['/cadastros/cadastrocontapagar']);
  }
}


