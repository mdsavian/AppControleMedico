import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ContaReceberService } from '../../services/contaReceber.service';
import { ContaReceber } from '../../modelos/contaReceber';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../modelos/paciente';
import { ETipoContaReceber } from '../../enums/ETipoContaReceber';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './listagem-conta-receber.component.html'
})
export class ListagemContaReceberComponent implements OnInit {
  source: LocalDataSource;
  listaContaRecebers: Array<ContaReceber>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  pacientees = new Array<Paciente>();

  constructor(private contaReceberService: ContaReceberService, private pacienteService: PacienteService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.isSpinnerVisible = true;
    this.buscaContasReceber();
  }
  buscaContasReceber(): void {
    this.pacienteService.Todos().subscribe(c => {
      this.pacientees = c;

      this.contaReceberService.Todos().subscribe(dados => {
        this.listaContaRecebers = dados;
        this.isSpinnerVisible = false;
        this.contaReceberService.listaContaReceber = this.listaContaRecebers;
        this.source = new LocalDataSource(this.listaContaRecebers);
      });
    });
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
                this.buscaContasReceber();
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
          return pacienteId == null || !this.util.hasItems(this.pacientees) ? "" : this.pacientees.find(c => c.id == pacienteId).nomeCompleto;
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


