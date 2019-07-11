import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../modelos/paciente';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from "../../uteis/Util";
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';

@Component({
  templateUrl: './listagem-paciente.component.html'
})
export class ListagemPacienteComponent {
  source: LocalDataSource;
  listaPacientes: Array<Paciente>;
  public isSpinnerVisible = false;
  closeResult: string;
  convenios = new Array<Convenio>();

  constructor(private pacienteService: PacienteService, private convenioService: ConvenioService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaPacientes();
    this.buscaModelos();
    this.isSpinnerVisible = false;
  }

  buscaModelos() {
    this.convenioService.Todos().subscribe(convs => this.convenios = convs);
  }

  buscaPacientes(): void {
    this.pacienteService.Todos().subscribe(dados => {
      this.listaPacientes = dados;
      this.source = new LocalDataSource(this.listaPacientes);
    });
  }

  deletarRegistro(event, modalExcluir) {
    this.modalService.open(modalExcluir).result.then(
      result => {
        if (result == 'Sim') {
          this.pacienteService.Excluir(event.data.id).subscribe(retorno => {
            if (retorno) {
              this.buscaPacientes();
            }
          });
        }
      }
    );
  }

  editarRegistro(event) {
    this.pacienteService.paciente = this.listaPacientes.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastropaciente']);
  }

  criarRegistro(event) {
    this.pacienteService.paciente = null;
    this.router.navigate(['/cadastros/cadastropaciente']);
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      nomeCompleto: {
        title: 'Nome',
        filter: true
      },
      celular: {
        title: 'Celular',
        filter: false,
        valuePrepareFunction: (celular) => { return celular === null ? "" : new Util().formataCelular(celular) }
      },
      convenioId: {
        title: 'Convênio',
        filter: true,
        valuePrepareFunction: (convenioId) => {
          return convenioId == null || this.convenios.length == 0 ? "" : this.convenios.find(c => c.id == convenioId).descricao;
        }
      },
      tipoPlano:
      {
        title: "Tipo Plano",
        filter: true
      },
      ativo: {
        title: 'Ativo',
        filter: false,
        valuePrepareFunction: (valor) => { return valor === true ? 'Sim' : 'false' }
      }

    },
    actions:
    {
      columnTitle: ''
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
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