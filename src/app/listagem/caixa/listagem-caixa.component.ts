import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CaixaService } from '../../services/caixa.service';
import { Caixa } from '../../modelos/caixa';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Util } from '../../uteis/Util';
import { Funcionario } from '../../modelos/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { forkJoin } from 'rxjs';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';

@Component({
  templateUrl: './listagem-caixa.component.html'
})
export class ListagemCaixaComponent {
  source: LocalDataSource;
  listaCaixas: Array<Caixa>;
  listaFuncionarios: Array<Funcionario>;
  listaMedicos: Array<Medico>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();

  constructor(private caixaService: CaixaService, private funcionarioService: FuncionarioService, private router: Router,
    private modalService: NgbModal, private medicoService: MedicoService) {

    this.isSpinnerVisible = true;
    this.buscaModelos().subscribe(c => {
      this.isSpinnerVisible = false;

      this.listaCaixas.forEach(caixa => {

        caixa.nomePessoa = this.caixaService.retornarPessoaCaixa(caixa,this.caixaService.listaFuncionarios, this.caixaService.listaMedicos).nomeCompleto;        
      });

      this.source = new LocalDataSource(this.listaCaixas);

    });
  }

  buscaModelos() {
    let requisicoes = [];

    let reqCaixas = this.caixaService.Todos().map(dados => {
      this.listaCaixas = dados;
      this.caixaService.listaCaixa = this.listaCaixas;
    });
    requisicoes.push(reqCaixas);

    let reqFuncionarios = this.funcionarioService.Todos().map(funcs => {
      this.listaFuncionarios = funcs;
      this.caixaService.listaFuncionarios = funcs;
    });

    requisicoes.push(reqFuncionarios);

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(medicos => {
      this.listaMedicos = medicos;
      this.caixaService.listaMedicos = medicos;
    });

    requisicoes.push(reqMedicos);

    return forkJoin(requisicoes);

  }

  editarRegistro(event) {
    this.caixaService.caixa = this.listaCaixas.find(c => c.id == event.data.id);
    this.router.navigate(['/cadastros/detalhescaixa']);
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      nomePessoa: {
        title: 'Pessoa',
        filter: true
      },
      dataAbertura: {
        title: 'Data Abertura',
        filter: true,
        valuePrepareFunction: (dataAbertura) => {
          return this.util.dataParaString(dataAbertura);
        }
      },
      horaAbertura: {
        title: 'Hora Abertura',
        valuePrepareFunction: (horaAbertura) => {
          return this.util.formatarHora(horaAbertura);
        }
      },
      dataFechamento: {
        title: 'Data Fechamento',
        filter: true,
        valuePrepareFunction: (dataFechamento) => {
          return this.util.dataParaString(dataFechamento);
        }
      },
      horaFechamento: {
        title: 'Hora Fechamento',
        valuePrepareFunction: (horaFechamento) => {
          return this.util.formatarHora(horaFechamento);
        }
      },
    },
    actions:
    {
      columnTitle: '',
      delete: false,
      add: false

    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    }
  }
}