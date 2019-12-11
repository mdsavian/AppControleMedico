import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../services/app.service';
import { Util } from "../../uteis/Util";
import { AgendamentoService } from '../../services/agendamento.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../modelos/usuario';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-medico.component.html'
})

export class ListagemMedicoComponent implements OnInit {
  source: LocalDataSource;
  listaMedicos: Array<Medico>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  usuarios: Array<Usuario>;

  ngOnInit()
  {
    this.buscaMedicos();

    this.usuarioService.todos().subscribe(c=> {
      this.usuarioService.listaUsuario = c;
      this.usuarios = c;
    });
  }

  constructor(private appService: AppService, private usuarioService: UsuarioService, private agendamentoService: AgendamentoService, private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;    
  }

  buscaMedicos(): void {
    this.medicoService.todos(true).subscribe(dados => {
      this.listaMedicos = dados;
      this.source = new LocalDataSource(this.listaMedicos);
      this.isSpinnerVisible = false;
    });
  }

  deletarRegistro(event) {
    this.agendamentoService.buscarAgendamentoMedicoExcluir(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir médico vínculado a agendamento(s).";
      }
      else {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
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
    this.usuarioService.usuarioParaValidacao = this.usuarios.find(c => c.medicoId == event.data.id);
    this.medicoService.medico = this.listaMedicos.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastromedico']);
  }

  criarRegistro(event) {
    this.usuarioService.usuarioParaValidacao = this.medicoService.medico = null;
    this.router.navigate(['/cadastros/cadastromedico']);
  }

  settings = {
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
      especialidade: {
        title: 'Especialidade',
        filter: true,
        valuePrepareFunction: (especialidade) => { return especialidade === null ? "" : especialidade.descricao }
      },
      celular: {
        title: 'Celular',
        filter: false,
        valuePrepareFunction: (celular) => { return celular === null ? "" : this.util.formataCelular(celular) }
      }
    },
    actions:
    {
      delete: this.util.retornarUsuarioAdministradorSistema(this.appService.retornarUsuarioCorrente()),
      add: this.util.retornarUsuarioAdministradorSistema(this.appService.retornarUsuarioCorrente()),
      columnTitle: ''
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    add:
    {
      addButtonContent: 'Novo'
    }
  };
}
