import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ContaPagarService } from '../../services/contaPagar.service';
import { ContaPagar } from '../../modelos/contaPagar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../modelos/fornecedor';
import { ETipoContaPagar } from '../../enums/ETipoContaPagar';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { MedicoService } from '../../services/medico.service';
import { forkJoin } from 'rxjs';
import { Medico } from '../../modelos/medico';

@Component({
  templateUrl: './listagem-conta-pagar.component.html'
})
export class ListagemContaPagarComponent implements OnInit {
  source: LocalDataSource;
  listaContaPagars: Array<ContaPagar>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  fornecedores = new Array<Fornecedor>();
  medicos = new Array<Medico>();

  constructor(private contaPagarService: ContaPagarService, private fornecedorService: FornecedorService, private medicoService: MedicoService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.isSpinnerVisible = true;
    this.alimentaModelos().subscribe(c => {
      this.buscaContasPagar();

    });
  }

  alimentaModelos() {
    let requisicoes = [];
    
    var reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(medicos => this.medicos = medicos);
    requisicoes.push(reqMedicos);

    let reqFornecedor = this.fornecedorService.Todos().map(c => this.fornecedores = c);
    requisicoes.push(reqFornecedor);

    return forkJoin(requisicoes);
  }

  buscaContasPagar(): void {

    this.contaPagarService.Todos().subscribe(dados => {
      this.listaContaPagars = dados;      
      this.contaPagarService.listaContaPagar = this.listaContaPagars;
      this.source = new LocalDataSource(this.listaContaPagars);
      this.isSpinnerVisible = false;
    });
  }

  deletarRegistro(event) {
    var conta = this.listaContaPagars.find(c => c.id == event.data.id);

    if (this.util.hasItems(conta.pagamentos)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Não é possível excluir conta a pagar que já contém pagamento(s).";
    }
    else {
      this.modalService.open(ModalExcluirRegistroComponent).result.then(
        result => {
          if (result == 'Sim') {
            this.contaPagarService.Excluir(event.data.id).subscribe(retorno => {
              if (retorno) {
                this.isSpinnerVisible = true;
                this.buscaContasPagar();
              }
            });
          }
        }
      );
    }
  }

  editarRegistro(event) {
    this.contaPagarService.contaPagar = this.listaContaPagars.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/cadastrocontapagar']);
  }

  criarRegistro(event) {
    this.contaPagarService.contaPagar = null;
    this.router.navigate(['/cadastros/cadastrocontapagar']);
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      fornecedorId: {
        title: 'Fornecedor',
        filter: true,
        valuePrepareFunction: (fornecedorId) => {
          return fornecedorId == null || !this.util.hasItems(this.fornecedores) ? "" : this.fornecedores.find(c => c.id == fornecedorId).razaoSocial;
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
        title: 'Número',
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


