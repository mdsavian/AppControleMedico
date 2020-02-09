
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Caixa } from '../../modelos/caixa';
import { Funcionario } from '../../modelos/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { MedicoService } from '../../services/medico.service';
import { CaixaService } from '../../services/caixa.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';
import { AgendamentoPagamento } from '../../modelos/agendamentoPagamento';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { EVistaPrazo } from '../../enums/EVistaPrazo';
import { LocalDataSource } from 'ng2-smart-table';
import { Usuario } from '../../modelos/usuario';
import { Agendamento } from '../../modelos/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';
import { forkJoin } from 'rxjs';
import { Medico } from '../../modelos/medico';


@Component({
  selector: 'app-modal-pagamento-agendamento.component',
  templateUrl: './modal-pagamento-agendamento.component.html',
  styleUrls: ['../../cadastros/cadastros.scss']
})

export class ModalPagamentoAgendamentoComponent {
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
  // caixaUsuario = true;
  agendamentoPagamento = new AgendamentoPagamento();
  funcionarios: Array<Funcionario>;
  dataAber: string;
  testPrice: any;
  existeCaixaAbertoParaFuncionario: boolean;
  senhaValida: boolean;
  vistaPrazoEnum = EVistaPrazo;
  vistaPrazo: string = EVistaPrazo[1].toString();
  sourcePagamentos: LocalDataSource;
  usuarioCorrente: Usuario;
  listaPagamentos = new Array<AgendamentoPagamento>();
  valorTotal: string;
  agendamento: Agendamento;
  valorProcedimento = 0;
  medicos = new Array<Medico>();

  constructor(public activeModal: NgbActiveModal, private appService: AppService, private loginService: LoginService, private agendamentoService: AgendamentoService,
    private funcionarioService: FuncionarioService, private medicoService: MedicoService, private caixaService: CaixaService, private modalService: NgbModal) { }

  alimentarModelos() {
    this.usuarioCorrente = this.appService.retornarUsuarioCorrente();

    let requisicoes = [];

    var reqFuncionarios = this.funcionarioService.Todos().map(func => { this.funcionarios = func; });
    requisicoes.push(reqFuncionarios);

    var reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(medicos => { this.medicos = medicos; });
    requisicoes.push(reqMedicos);

    return forkJoin(requisicoes);
  }
  ngOnInit() {

    this.alimentarModelos().subscribe(c => {

      if (this.agendamento != null) {

        this.formaPagamentoModel.nativeElement.focus();

        if (this.agendamento.exame != null && this.agendamento.exame.valor > 0) {
          this.agendamentoPagamento.valor = this.agendamento.exame.valor;
          this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(this.agendamento.exame.valor);
        }
        else if (this.agendamento.cirurgia != null && this.agendamento.cirurgia.valor > 0) {
          this.agendamentoPagamento.valor = this.agendamento.cirurgia.valor;
          this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(this.agendamento.cirurgia.valor);
        }
        else if (this.agendamento.procedimento != null && this.agendamento.procedimento.valor > 0) {
          this.agendamentoPagamento.valor = this.agendamento.procedimento.valor;
          this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(this.agendamento.procedimento.valor);
        }

        if (this.util.hasItems(this.agendamento.pagamentos)) {

          this.listaPagamentos = this.agendamento.pagamentos;
          this.sourcePagamentos = new LocalDataSource(this.listaPagamentos);

          var caixaId = this.agendamento.pagamentos.find(c => true).caixaId;

          this.caixas = new Array<Caixa>();

          this.caixaService.buscarPorId(caixaId).subscribe(caixa => {
            
            var pessoa = this.caixaService.retornarPessoaCaixa(caixa,this.funcionarios, this.medicos);
            caixa.descricao = pessoa.nomeCompleto + " - " + this.util.dataParaString(caixa.dataAbertura) + " " + this.util.formatarHora(caixa.horaAbertura);

            this.caixas.push(caixa);
            this.caixa = this.caixas.find(c => true);
          })
        }
        else {

          if (!this.util.hasItems(this.caixas)) {
            this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
              this.caixas = caixas;
            });
          }

          if (this.util.hasItems(this.funcionarios) && this.util.hasItems(this.caixas) && this.util.hasItems(this.medicos)) {

            this.caixas.forEach(caixa => {
              var pessoa = this.caixaService.retornarPessoaCaixa(caixa,this.funcionarios, this.medicos);              
              if (pessoa != null)
                caixa.descricao = pessoa.nomeCompleto + " - " + this.util.dataParaString(caixa.dataAbertura) + " " + this.util.formatarHora(caixa.horaAbertura);
            });
              var caixaAbertoUsuario = this.caixas.find(c => c.pessoaId == this.usuarioCorrente.funcionarioId || c.pessoaId == this.usuarioCorrente.medicoId);

              if (caixaAbertoUsuario != null) {
                // this.caixaUsuario = caixaAbertoUsuario != null;
                this.caixa = caixaAbertoUsuario;
              }
          }
        }
      }
    });
  }

  selecionaTipoPagamento(value: string) {
    if (value == "À Prazo") {
      if (this.agendamentoPagamento.formaPagamentoId == this.formasPagamento.find(c => c.descricao == "DINHEIRO").id) {
        value = this.tipoPagamento.nativeElement.value = EVistaPrazo[1].toString();
        this.agendamentoPagamento.vistaPrazo = EVistaPrazo[value];
      }
      else
        this.visualizaParcela = true;
    }
    else
      this.visualizaParcela = false;
  }

  alteraFormaPagamento() {

    if (this.agendamentoPagamento.formaPagamentoId == this.formasPagamento.find(c => c.descricao == "DINHEIRO").id) {
      this.tipoPagamento.nativeElement.value = EVistaPrazo[1].toString();
      this.agendamentoPagamento.vistaPrazo = EVistaPrazo["À Vista"];
    }
    var formaPagamento = this.formasPagamento.find(c => c.id == this.agendamentoPagamento.formaPagamentoId);

    if (formaPagamento != null) {
      this.agendamentoPagamento.descricaoPagamento = formaPagamento.descricao;
      this.tipoPagamento.nativeElement.value = EVistaPrazo[formaPagamento.tipoPagamento];
      this.agendamentoPagamento.vistaPrazo = formaPagamento.tipoPagamento;
      this.tipoPagamento.nativeElement.setAttribute('disabled', true);

    }
    else
      this.tipoPagamento.nativeElement.setAttribute('disabled', false);


    this.selecionaTipoPagamento(EVistaPrazo[this.agendamentoPagamento.vistaPrazo]);
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

  deletarPagamento(pagamento: any) {

    var index = this.listaPagamentos.indexOf(this.listaPagamentos.find(c => c.formaPagamentoId == pagamento.data.formaPagamentoId));
    this.listaPagamentos.splice(index, 1);

    this.valorTotal = this.util.formatarDecimal(this.somaPagamentos());

    this.sourcePagamentos = new LocalDataSource(this.listaPagamentos);
  }

  adicionarPagamento() {
    var retornar;

    if (this.agendamentoPagamento.valor == 0) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Valor inválido.";
      retornar = true;
    }

    if (this.listaPagamentos.find(c => c.formaPagamentoId == this.agendamentoPagamento.formaPagamentoId) != null) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Forma de pagamento já informada.";
      retornar = true;
    }

    if (!retornar) {
      this.agendamentoPagamento.caixaId = this.caixa.id;
      this.agendamentoPagamento.usuarioId = this.appService.retornarUsuarioCorrente().id;
      this.agendamentoPagamento.data = new Date();

      this.listaPagamentos.push(this.agendamentoPagamento);
      this.valorTotal = this.util.formatarDecimal(this.somaPagamentos());
      this.sourcePagamentos = new LocalDataSource(this.listaPagamentos);
      this.agendamentoPagamento = new AgendamentoPagamento();
      this.formaPagamentoModel.nativeElement.focus();

      this.visualizaParcela = false;
    }
  }

  somaPagamentos() {
    var total = 0;
    if (this.util.hasItems(this.listaPagamentos)) {
      this.listaPagamentos.forEach(c => {
        total = total + (parseFloat(c.valor.toString()) * c.parcela);
      });
    }
    return total;
  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  salvar() {

    this.agendamento.contemPagamentos = this.util.hasItems(this.listaPagamentos);
    this.agendamento.pagamentos = this.listaPagamentos;
    this.activeModal.close(this.agendamento);

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





