import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../services/app.service';
import { Util } from "../../uteis/Util";
import { AgendamentoService } from '../../services/agendamento.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

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
  util = new Util();

  constructor(private appService: AppService,  private agendamentoService: AgendamentoService, private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;

    this.administrador = this.appService.retornarUsuarioAdministrador();

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
          valuePrepareFunction: (celular) => { return celular === null ? "" : this.util.formataCelular(celular) }
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
    this.agendamentoService.buscarAgendamentoMedicoExcluir(event.data.id).subscribe(agendamentos => {
      console.log(agendamentos);
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir médico vínculado a agendamento(s).";
      }
      else {
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
    });
  }

  editarRegistro(event) {
    this.medicoService.medico = this.listaMedicos.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastromedico']);
  }

  criarRegistro(event) {
    this.medicoService.medico = null;
    this.router.navigate(['/cadastros/cadastromedico']);
  }
}
