import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { Prontuario } from '../../modelos/prontuario';
import { ProntuarioService } from '../../services/prontuario.service';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../modelos/paciente';


@Component({
  templateUrl: './listagem-prontuario.component.html'
})
export class ListagemProntuarioComponent {
  source: LocalDataSource;
  listaProntuarios: Array<Prontuario>;
  listaPacientes: Array<Paciente>;
  public isSpinnerVisible = false;
  closeResult: string;  
  util = new Util();

  constructor(private pacienteService:PacienteService, private prontuarioService:ProntuarioService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaPacientes();   
  }

  buscaPacientes(): void {
    this.pacienteService.Todos().subscribe(dados => {
      this.listaPacientes = dados;
      this.source = new LocalDataSource(this.listaPacientes);
      this.isSpinnerVisible = false;
    });
  }

  editarRegistro(event) {
     this.prontuarioService.pacienteId = event.data.id;
     this.router.navigate(['/cadastros/cadastroprontuario']);
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
        filter: true,
        valuePrepareFunction: (celular) => { return celular === null ? "" : new Util().formataCelular(celular) }
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
      columnTitle: '',
      add:false,
      delete:false
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    }    
  };
}


