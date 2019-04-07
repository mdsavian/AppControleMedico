import { Component } from '@angular/core';
import * as tableData from './listagem-servico-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../modelos/servico';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listagem-servico.component.html'
})
export class ListagemServicoComponent {
  source: LocalDataSource;
  listaServicos: Array<Servico>;
  public isSpinnerVisible = false;
  closeResult: string;
  settings = tableData.settings;

  constructor(private servicoService: ServicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaServicos();
    this.isSpinnerVisible = false;
  }

  buscaServicos(): void {
    this.servicoService.Todos().subscribe(dados => {
      this.listaServicos = dados;
      this.servicoService.listaServico = this.listaServicos;
      this.source = new LocalDataSource(this.listaServicos);
    });
  }

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim') {
          this.servicoService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaServicos();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.router.navigate(['/cadastros/cadastroservico', { id: event.data.id }]);
  }

  criarRegistro(event) {
    this.router.navigate(['/cadastros/cadastroservico']);
  }

  

}


