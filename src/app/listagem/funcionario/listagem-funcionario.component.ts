import { Component } from '@angular/core';
import * as tableData from './listagem-funcionario-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../modelos/funcionario';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  templateUrl: './listagem-funcionario.component.html'
})
export class ListagemFuncionarioComponent {
  source: LocalDataSource;
  listaFuncionarios: Array<Funcionario>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  
  constructor(private funcionarioService: FuncionarioService, private agendamentoService:AgendamentoService,private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaFuncionarios();
    this.isSpinnerVisible = false;
  }

  buscaFuncionarios(): void {
    this.funcionarioService.Todos().subscribe(dados => {
      this.listaFuncionarios = dados;
      this.source = new LocalDataSource(this.listaFuncionarios);
    });
  }
  settings = tableData.settings;

  deletarRegistro(event, modalExcluir) {
    this.agendamentoService.buscarAgendamentosFuncionario(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir funcionário vínculado a agendamento(s).";
      }
      else {
        this.modalService.open(modalExcluir).result.then(
          result => {
            if (result == 'Sim') {
              this.funcionarioService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaFuncionarios();
                }
              });
            }
          }
        );
      }
    }); 
  }

  editarRegistro(event) {
      this.funcionarioService.funcionario = this.listaFuncionarios.find(c => c.id == event.data.id);
      this.router.navigate(['/cadastros/cadastrofuncionario']);
    }

  criarRegistro(event) {
      this.funcionarioService.funcionario = null;
      this.router.navigate(['/cadastros/cadastrofuncionario']);
    }
}


