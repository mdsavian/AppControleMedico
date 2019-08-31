
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Caixa } from '../../modelos/caixa';
import { Funcionario } from '../../modelos/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { CaixaService } from '../../services/caixa.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';
import { AgendamentoPagamento } from '../../modelos/agendamentoPagamento';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { EVistaPrazo } from '../../enums/EVistaPrazo';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import * as tableDataPagamento from './lista-pagamentos-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { Usuario } from '../../modelos/usuario';


@Component({
  selector: 'app-modal-pagamento-agendamento.component',
  templateUrl: './modal-pagamento-agendamento.component.html',
  styleUrls: ['../../cadastros/cadastros.scss']
})

export class ModalPagamentoAgendamentoComponent {
  @ViewChild('formaPagamentoModel', { read: ElementRef, static: true }) private formaPagamentoModel: ElementRef;
  @ViewChild('tipoPagamento', { read: ElementRef, static: true }) private tipoPagamento: ElementRef;
  @ViewChild('senha', { read: ElementRef, static: false }) private senha: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valor: ElementRef;

  settingsPagamentos = tableDataPagamento.settingsPagamentos;
  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  caixa: Caixa = new Caixa();
  util = new Util();
  caixas = new Array<Caixa>();
  visualizaParcela = false;
  formasPagamento = new Array<FormaDePagamento>();
  caixaUsuario = true;
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

  constructor(public activeModal: NgbActiveModal, private appService: AppService, private formaPagamentoService: FormaDePagamentoService,
    private loginService: LoginService, private funcionarioService: FuncionarioService, private caixaService: CaixaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.formaPagamentoModel.nativeElement.focus();
    this.usuarioCorrente = this.appService.retornarUsuarioCorrente();

    this.formaPagamentoService.Todos().subscribe(formas => {
      this.agendamentoPagamento.formaPagamentoId = formas.find(c => true).id;
      this.formasPagamento = formas;
    });

    this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
      caixas.forEach(caixa => {
        this.funcionarioService.buscarPorId(caixa.funcionarioId).subscribe(func => {
          caixa.descricao = func.nomeCompleto + " - " + this.util.formatarData(caixa.dataAbertura) + " " + this.util.formatarHora(caixa.horaAbertura);
        });
      });

      this.caixas = caixas;
      var caixaAbertoUsuario = this.caixas.find(c => c.funcionarioId == this.usuarioCorrente.funcionarioId);

      if (caixaAbertoUsuario != null) {
        this.caixaUsuario = caixaAbertoUsuario != null;
        this.caixa = caixaAbertoUsuario;
      }
      else
        this.caixa = this.caixas.find(c => true);
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
    }
   
    
    this.selecionaTipoPagamento( EVistaPrazo[this.agendamentoPagamento.vistaPrazo]);
  }

  selecionaCaixa(e: Caixa) {
    this.caixaUsuario = this.caixa.id == this.caixas.find(c => c.funcionarioId == this.usuarioCorrente.funcionarioId).id;
  }

  formataValor()
  {
    // this.valor = this.util.f
  }

  validaCaixaFuncionario() {
    this.caixaService.retornarCaixaAbertoFuncionario(this.caixa.funcionarioId).subscribe(caixa => {
      this.existeCaixaAbertoParaFuncionario = caixa != null;
    });
  }

  validaSenha() {
    if (!this.util.isNullOrWhitespace(this.caixa.funcionarioId)) {
      this.loginService.validaSenha(this.funcionarios.find(c => c.id == this.caixa.funcionarioId).email, this.senha.nativeElement.value).subscribe(senhaValidada => {
        this.senhaValida = !senhaValidada;
      });
    }
  }

  adicionarPagamento()
  {
    console.log(this.agendamentoPagamento);

    this.listaPagamentos.push(this.agendamentoPagamento);    
    this.sourcePagamentos = new LocalDataSource(this.listaPagamentos);
    this.agendamentoPagamento = new AgendamentoPagamento();
  }

  salvar() {

    var retornar = false;

    if (this.util.isNullOrWhitespace(this.caixa.funcionarioId)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Funcionário inválido.";
      retornar = true;
    }

    if (this.caixa.trocoAbertura <= 0) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Troco inválido.";
      retornar = true;
    }

    if (!retornar) {
      this.caixaService.salvar(this.caixa).subscribe(caixaRetorno => {
        this.activeModal.close(caixaRetorno);
      });
    }

  }

  fechar() {
    this.activeModal.close("");
  }
}