import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ContaReceberService } from '../../services/contaReceber.service';
import { ContaReceber } from '../../modelos/contaReceber';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from '../../services/medico.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { PacienteService } from '../../services/paciente.service';
import { AppService } from '../../services/app.service';
import { Paciente } from '../../modelos/paciente';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { Medico } from '../../modelos/medico';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './listagem-conta-receber.component.html'
})
export class ListagemContaReceberComponent implements OnInit {
  source: LocalDataSource;
  listaContaRecebers: Array<ContaReceber>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  pacientes = new Array<Paciente>();
  medicos = new Array<Medico>();

  constructor(private contaReceberService: ContaReceberService, private pacienteService: PacienteService, private appService:AppService,
    private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.isSpinnerVisible = true;
    this.alimentaModelos().subscribe(c => {
      this.buscarContasReceber();
    });
  }

  buscarContasReceber()
  {
   this.contaReceberService.Todos().subscribe(dados => {
      this.listaContaRecebers = dados;      
      this.contaReceberService.listaContaReceber = this.listaContaRecebers;
      this.source = new LocalDataSource(this.listaContaRecebers);
      this.isSpinnerVisible = false;
    });
  }

  alimentaModelos() {
    let requisicoes = [];
    var reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(medicos => this.medicos = medicos);
    requisicoes.push(reqMedicos);

    let reqPaciente = this.pacienteService.Todos().map(c => this.pacientes = c);
    requisicoes.push(reqPaciente);    

    return forkJoin(requisicoes);
  }

  deletarRegistro(event) {
    var conta = this.listaContaRecebers.find(c => c.id == event.data.id);

    if (this.util.hasItems(conta.pagamentos)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Não é possível excluir conta a receber que já contém pagamento(s).";
    }
    else {
      this.modalService.open(ModalExcluirRegistroComponent).result.then(
        result => {
          if (result == 'Sim') {
            this.contaReceberService.Excluir(event.data.id).subscribe(retorno => {
              if (retorno) {
                this.isSpinnerVisible = true;

                this.buscarContasReceber();
              }
            });
          }
        }
      );
    }
  }

  editarRegistro(event) {
    this.contaReceberService.contaReceber = this.listaContaRecebers.find(c => c.id == event.data.id && c.agendamentoId == event.data.agendamentoId);
    this.router.navigate(['/cadastros/cadastrocontareceber']);
  }

  criarRegistro(event) {
    this.contaReceberService.contaReceber = null;
    this.router.navigate(['/cadastros/cadastrocontareceber']);
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      pacienteId: {
        title: 'Paciente',
        filter: true,
        valuePrepareFunction: (pacienteId) => {
          return this.util.isNullOrWhitespace(pacienteId) || !this.util.hasItems(this.pacientes) ? "" : this.pacientes.find(c => c.id == pacienteId).nomeCompleto;
        }
      },
      medicoId: {
        title: 'Médico',
        filter: true,
        valuePrepareFunction: (medicoId) => {          
          return this.util.isNullOrWhitespace(medicoId) || !this.util.hasItems(this.medicos) ? "Todos" : this.medicos.find(c => c.id == medicoId).nomeCompleto;
        }
      },
      dataEmissao: {
        title: 'Emissão',
        filter: true,
        valuePrepareFunction: (dataEmissao) => { return this.util.dataParaString(dataEmissao) }
      },
      numeroFatura: {
        title: 'Fatura',
        filter: true
      },
      numeroDocumento: {
        title: 'Documento',
        filter: true
      },
      tipoContaDescricao: {
        title: 'Tipo Conta',
        filter: true,
        valuePrepareFunction: (tipoContaDescricao) => { return this.util.isNullOrWhitespace(tipoContaDescricao) ? "Lançamento Manual" : tipoContaDescricao }

      },
      desconto: {
        title: 'Desconto',
        filter: true,
        valuePrepareFunction: (desconto) => { return this.util.formatarDecimal(desconto) }
      },
      jurosMulta: {
        title: 'Juros/Multa',
        filter: true,
        valuePrepareFunction: (jurosMulta) => { return this.util.formatarDecimal(jurosMulta) }
      },
      valor: {
        title: 'Valor',
        filter: true,
        valuePrepareFunction: (valor) => { return this.util.formatarDecimal(valor) }

      },
      saldo: {
        title: 'Saldo',
        filter: true,
        valuePrepareFunction: (saldo) => { return this.util.formatarDecimal(saldo) }
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


