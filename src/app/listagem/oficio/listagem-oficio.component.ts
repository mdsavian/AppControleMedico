import { Component } from '@angular/core';
import * as tableData from './listagem-oficio-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { OficioService } from '../../services/oficio.service';
import { FuncionarioService } from '../../services/funcionario.service';
import { Oficio } from '../../modelos/oficio';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

@Component({
  templateUrl: './listagem-oficio.component.html'
})
export class ListagemOficioComponent {
  source: LocalDataSource;
  listaOficios: Array<Oficio>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();

constructor( private oficioService: OficioService, private funcionarioService:FuncionarioService,private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaOficios();
    this.isSpinnerVisible = false;
  }
  
  buscaOficios(): void {
    this.oficioService.Todos().subscribe(dados => {
      this.listaOficios = dados;     
      this.oficioService.listaOficio = dados;
      this.source = new LocalDataSource(this.listaOficios);      
    });
  }
  settings = tableData.settings;

  deletarRegistro(event, modalExcluir) {
    this.funcionarioService.buscarPorOficio(event.data.id).subscribe(funcionarios => {      
      if (this.util.hasItems(funcionarios)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir ofício vínculado a funcionário(s).";
      }
      else {
        this.modalService.open(modalExcluir).result.then(
          result => {
            if (result == 'Sim') {
              this.oficioService.Excluir(event.data.id).subscribe(retorno=> {
                if (retorno) {
                  this.buscaOficios();
                }
              });
            }
          }
        );
      }
    });
  } 

  editarRegistro(event) {
    this.oficioService.oficio = this.listaOficios.find(c=> c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrooficio']);
  }

  criarRegistro(event) {
    this.oficioService.oficio =null;
    this.router.navigate(['/cadastros/cadastrooficio']);
  }
}


