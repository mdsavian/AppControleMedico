
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Caixa } from '../../modelos/caixa';
import { Funcionario } from '../../modelos/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { CaixaService } from '../../services/caixa.service';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { EVistaPrazo } from '../../enums/EVistaPrazo';
import { LocalDataSource } from 'ng2-smart-table';
import { Usuario } from '../../modelos/usuario';

import { forkJoin } from 'rxjs';
import { ExtraCaixa } from '../../modelos/extraCaixa';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { ETipoExtraCaixa } from '../../enums/ETipoExtraCaixa';
import { ExtraCaixaService } from '../../services/extraCaixa.service';
import { ModalSucessoComponent } from '../../shared/modal/modal-sucesso.component';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';


@Component({
  selector: 'app-modal-extra-caixa.component',
  templateUrl: './modal-extra-caixa.component.html',
  styleUrls: ['../../cadastros/cadastros.scss']
})

export class ModalExtraCaixaComponent {
  @ViewChild('formaPagamentoModel', { read: ElementRef, static: true }) private formaPagamentoModel: ElementRef;
  @ViewChild('tipoPagamento', { read: ElementRef, static: true }) private tipoPagamento: ElementRef;
  @ViewChild('senha', { read: ElementRef, static: false }) private senha: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valorModel: ElementRef;

  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  caixa: Caixa = new Caixa();
  util = new Util();
  caixas = new Array<Caixa>();
  visualizaParcela = false;
  formasPagamento = new Array<FormaDePagamento>();
  caixaUsuario = true;
  funcionarios: Array<Funcionario>;
  existeCaixaAbertoParaFuncionario: boolean;
  senhaValida: boolean;
  vistaPrazoEnum = EVistaPrazo;
  vistaPrazo: string = EVistaPrazo[1].toString();
  sourcePagamentos: LocalDataSource;
  usuarioCorrente: Usuario;
  valorTotal: string;
  extraCaixa = new ExtraCaixa();
  medicos = new Array<Medico>();
  operacao: string;
  adicionarEditar = "Adicionar";

  constructor(public activeModal: NgbActiveModal, private appService: AppService, private medicoService: MedicoService, private extraCaixaService: ExtraCaixaService,
    private funcionarioService: FuncionarioService, private caixaService: CaixaService, private modalService: NgbModal, private formaPagamentoService: FormaDePagamentoService) { }

  ngOnInit() {

    this.alimentarModelos().subscribe(c => {
      if (this.util.isNullOrWhitespace(this.extraCaixa.id)) {
        if (this.util.hasItems(this.funcionarios) && this.util.hasItems(this.caixas)) {
          this.caixas.forEach(caixa => {
            caixa = this.caixaService.retornarDescricaoCaixa(caixa, this.funcionarios, this.medicos);
          });

          var caixaAbertoUsuario = this.caixas.find(c => c.pessoaId == this.usuarioCorrente.funcionarioId || c.pessoaId == this.usuarioCorrente.medicoId);

          if (caixaAbertoUsuario != null) {
            this.caixaUsuario = caixaAbertoUsuario != null;
            this.caixa = caixaAbertoUsuario;
          }
        }
      }
      else {

        this.caixa = this.caixaService.retornarDescricaoCaixa(this.caixa, this.funcionarios, this.medicos);
        this.operacao = this.extraCaixa.tipoExtraCaixa == 1 ? "Débito" : "Crédito";
      }
    });

  }

  alimentarModelos() {
    this.usuarioCorrente = this.appService.retornarUsuarioCorrente();

    var reqFormas = this.formaPagamentoService.Todos().map(formas => { this.formasPagamento = formas; });
    var reqFuncionarios = this.funcionarioService.Todos().map(func => { this.funcionarios = func; });
    var reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(medicos => { this.medicos = medicos; });

    var reqCaixas = this.util.isNullOrWhitespace(this.extraCaixa.id) ? this.caixaService.retornarTodosCaixasAbertos().map(caixas => { this.caixas = caixas; }) :
      this.caixaService.buscarPorId(this.extraCaixa.caixaId).map(caixa => {
        this.caixas.push(caixa);
        this.caixa = caixa;
      });

    return forkJoin([reqFuncionarios, reqCaixas, reqFormas, reqMedicos])
  }

  selecionaTipoPagamento(value: string) {
    if (value == "À Prazo") {
      this.visualizaParcela = true;
    }
    else
      this.visualizaParcela = false;
  }

  alteraFormaPagamento() {
    if (this.extraCaixa.formaPagamentoId == this.formasPagamento.find(c => c.descricao == "DINHEIRO").id) {
      this.tipoPagamento.nativeElement.value = EVistaPrazo[1].toString();
      this.extraCaixa.vistaPrazo = EVistaPrazo["À Vista"];
    }

    var formaPagamento = this.formasPagamento.find(c => c.id == this.extraCaixa.formaPagamentoId);

    if (formaPagamento != null) {
      this.tipoPagamento.nativeElement.value = EVistaPrazo[formaPagamento.tipoPagamento];
      this.extraCaixa.vistaPrazo = formaPagamento.tipoPagamento;
      this.tipoPagamento.nativeElement.setAttribute('disabled', true);

    }
    else
      this.tipoPagamento.nativeElement.setAttribute('disabled', false);

    this.selecionaTipoPagamento(EVistaPrazo[this.extraCaixa.vistaPrazo]);

  }

  selecionaCaixa(e: Caixa) {
    // var caixaAbertoUsuario = this.caixas.find(c => c.funcionarioId == this.usuarioCorrente.funcionarioId);
    // this.caixaUsuario = caixaAbertoUsuario != null && this.caixa.id == caixaAbertoUsuario.id;
  }

  validaCaixaFuncionario() {
    this.caixaService.retornarCaixaAbertoPessoa(this.caixa.pessoaId).subscribe(caixa => {
      this.existeCaixaAbertoParaFuncionario = caixa != null;
    });
  }

  validaSenha() {
    // if (!this.util.isNullOrWhitespace(this.caixa.funcionarioId) && this.util.hasItems(this.funcionarios)) {
    //   var funcionario = this.funcionarios.find(c => c.id == this.caixa.funcionarioId);
    //   this.loginService.validaSenha(funcionario.email, this.senha.nativeElement.value).subscribe(senhaValidada => {
    //     this.senhaValida = !senhaValidada;
    //   });
    // }
  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  salvar() {
    this.extraCaixa.caixaId = this.caixa.id;
    this.extraCaixa.clinicaId = this.caixa.clinicaId;
    this.extraCaixa.usuarioId = this.usuarioCorrente.id;
    this.extraCaixa.data = new Date();
    this.extraCaixa.tipoExtraCaixa = this.operacao == "Débito" ? ETipoExtraCaixa["Extra Débito"] : ETipoExtraCaixa["Extra Crédito"];

    this.extraCaixaService.salvar(this.extraCaixa).subscribe(c => {

      var modal = this.modalService.open(ModalSucessoComponent, { windowClass: "modal-holder" });
      modal.componentInstance.mensagem = "Extra " + this.operacao + " salvo com sucesso";
      modal.componentInstance.titulo = "Salvo com sucesso";
      modal.result.then(() => this.activeModal.close());


    });

  }

  fechar() {
    this.activeModal.close("");
  }

  settingsPagamentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      formaPagamentoId: {
        title: 'Descrição',
        filter: false,
        valuePrepareFunction: (id) => { return id === "" || id === null ? "" : this.formasPagamento.find(c => c.id == id).descricao }
      },
      parcela: {
        title: 'Parcela',
        filter: false
      },
      valor: {
        title: 'Valor',
        filter: false,
        valuePrepareFunction: (valor) => { return new Util().formatarDecimal(valor); }
      }
    },
    actions:
    {
      columnTitle: '',
      add: false,
      edit: false
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    }
  }
}





