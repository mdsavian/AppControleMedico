import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ClinicaService } from '../../services/clinica.service';
import { MedicoService } from '../../services/medico.service';
import { Clinica } from '../../modelos/clinica';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { Util } from "../../uteis/Util";
import { AppService } from '../../services/app.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';


@Component({
  templateUrl: './listagem-clinica.component.html'
})
export class ListagemClinicaComponent {
  source: LocalDataSource;
  listaClinicas: Array<Clinica>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();

  constructor(private clinicaService: ClinicaService, private medicoService: MedicoService, private appService: AppService, private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    this.buscaClinicas();
    this.isSpinnerVisible = false;
  }

  buscaClinicas(): void {
    this.clinicaService.Todos().subscribe(dados => {
      this.listaClinicas = dados;
      this.clinicaService.listaClinica = this.listaClinicas;
      this.source = new LocalDataSource(this.listaClinicas);
    });
  }

  deletarRegistro(event) {
    this.medicoService.todos().subscribe(medicos => {
      var medicoVinculado = false;
      medicos.forEach(medico => {
        medicoVinculado = medico.clinicasId.includes(event.data.id);
        if (medicoVinculado)
          return;
      });
      if (!medicoVinculado) {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.clinicaService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaClinicas();
                }
              });
            }
          }
        );
      }
      else{
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir clínica vínculada a médico(s).";
      }
    });


  }

  editarRegistro(event) {
    this.clinicaService.clinica = this.listaClinicas.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastroclinica']);
  }

  criarRegistro(event) {
    this.clinicaService.clinica = null;
    this.router.navigate(['/cadastros/cadastroclinica']);
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      razaoSocial: {
        title: 'Razão Social',
        filter: true
      },
      cnpj: {
        title: 'CNPJ',
        filter: true,
        valuePrepareFunction: (cnpj) => { return cnpj === null ? "" : this.util.formataCnpj(cnpj) }
      },
      telefone: {
        title: 'Telefone',
        valuePrepareFunction: (celular) => { return celular === null ? "" : this.util.formataCelular(celular) }

      },
      ativo: {
        title: 'ativo',
        valuePrepareFunction: (ativo) => { return ativo ? "Sim" :"Não"; }
      }
    },
    actions:
    {
      columnTitle: '',
      delete: this.util.retornarUsuarioAdministradorSistema(this.appService.retornarUsuarioCorrente()),
      add: this.util.retornarUsuarioAdministradorSistema(this.appService.retornarUsuarioCorrente())
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    add:
    {
      addButtonContent: 'Novo'
    }
  };

}


