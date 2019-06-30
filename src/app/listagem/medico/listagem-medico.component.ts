import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import { Util } from "../../uteis/Util";

@Component({
  templateUrl: './listagem-medico.component.html'
})

export class ListagemMedicoComponent {
  source: LocalDataSource;
  listaMedicos: Array<Medico>;
  public isSpinnerVisible = false;
  closeResult: string;
  administrador: boolean;
  settings = {};

  constructor(private loginService: LoginService, private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;

    this.loginService.usuarioCorrenteObservable.subscribe(usuario => {
      this.administrador = usuario.funcionarioId == "" && usuario.medicoId == "";

      this.settings = {
        mode: 'external',
        noDataMessage: "Não foi encontrado nenhum registro",
        columns: {
          nomeCompleto: {
            title: 'Nome',
            filter: true
          },
          email: {
            title: 'Email',
            filter: false
          },
          celular: {
            title: 'Celular',
            filter: false,
            valuePrepareFunction: (celular) => { return celular === null ? "" : util.formataCelular(celular) }
          }
        },
        actions:
        {
          delete: this.administrador,
          add: this.administrador,
          columnTitle: ''
        },
        delete: {
          deleteButtonContent: this.administrador ? '<i class="ti-trash text-danger m-r-10"></i>' : '',
          saveButtonContent: this.administrador ? '<i class="ti-save text-success m-r-10"></i>' : '',
          cancelButtonContent: this.administrador ? '<i class="ti-close text-danger"></i>' : '',
        },
        edit: {
          editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>',
        },
        add:
        {
          addButtonContent: this.administrador ? 'Novo' : ''
        }
      };
    });

    this.buscaMedicos();

  }

  buscaMedicos(): void {
    this.medicoService.todos().subscribe(dados => {
      this.listaMedicos = dados;
      this.source = new LocalDataSource(this.listaMedicos);
      this.isSpinnerVisible = false;
    });
  }

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim') {
          this.medicoService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaMedicos();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.medicoService.medico = this.listaMedicos.find(c=> c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastromedico']);
  }

  criarRegistro(event) {
    this.medicoService.medico = null;
    this.router.navigate(['/cadastros/cadastromedico']);
  }



}
var util = new Util();
