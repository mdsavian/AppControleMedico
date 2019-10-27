
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
import { LocalDataSource } from 'ng2-smart-table';
import { Usuario } from '../../modelos/usuario';
import { Agendamento } from '../../modelos/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';
import { ESituacaoAgendamento } from '../../enums/ESituacaoAgendamento';
import { Paciente } from '../../modelos/paciente';
import { Convenio } from '../../modelos/convenio';
import { Procedimento } from '../../modelos/procedimento';
import { Exame } from '../../modelos/exame';
import { Cirurgia } from '../../modelos/cirurgia';


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
  valorTotal: string;
  agendamento: Agendamento;
  tituloTela = "";
  pacientes = new Array<Paciente>();
  convenios = new Array<Convenio>();
  exames = new Array<Exame>();
  procedimentos = new Array<Procedimento>();
  cirurgias = new Array<Cirurgia>();

  constructor(public activeModal: NgbActiveModal, private appService: AppService, private formaPagamentoService: FormaDePagamentoService,
    private loginService: LoginService, private agendamentoService: AgendamentoService, private funcionarioService: FuncionarioService, private caixaService: CaixaService, private modalService: NgbModal) { }

  ngOnInit() {

    if (this.agendamento != null) {

      this.tituloTela = this.agendamentoService.retornarOperacaoAgendamento(this.agendamento,this.exames, this.cirurgias, this.procedimentos).toUpperCase();


      if (!this.util.hasItems(this.pacientes) && !this.util.isNullOrWhitespace(this.agendamento.pacienteId)) {
        var paciente = this.pacientes.find(c => c.id == this.agendamento.pacienteId);
        this.tituloTela = this.tituloTela + " - " + paciente.nomeCompleto.split(' ')[0];
      }

      if (!this.util.hasItems(this.convenios) && !this.util.isNullOrWhitespace(this.agendamento.convenioId)) {
        var convenio = this.convenios.find(c => c.id == this.agendamento.convenioId);
        this.tituloTela = this.tituloTela + " - " + convenio.descricao.toUpperCase();
      }
      this.tituloTela = this.tituloTela + " - " +
        this.agendamento.horaInicial.substring(0, 2) + ":" + this.agendamento.horaInicial.substring(2, 4) + " até " +
        this.agendamento.horaFinal.substring(0, 2) + ":" + this.agendamento.horaFinal.substring(2, 4);
    }


    this.formaPagamentoModel.nativeElement.focus();
    this.usuarioCorrente = this.appService.retornarUsuarioCorrente();

    this.formaPagamentoService.Todos().subscribe(formas => {
      this.agendamentoPagamento.formaPagamentoId = formas.find(c => true).id;
      this.formasPagamento = formas;
    });

    this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
      caixas.forEach(caixa => {
        this.funcionarioService.buscarPorId(caixa.funcionarioId).subscribe(func => {
          caixa.descricao = func.nomeCompleto + " - " + this.util.dataParaString(caixa.dataAbertura) + " " + this.util.formatarHora(caixa.horaAbertura);
        });
      });

      this.caixas = caixas;
      var caixaAbertoUsuario = this.caixas.find(c => c.funcionarioId == this.usuarioCorrente.funcionarioId);

      if (caixaAbertoUsuario != null) {
        this.caixaUsuario = caixaAbertoUsuario != null;
        this.caixa = caixaAbertoUsuario;
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
    var caixaAbertoUsuario = this.caixas.find(c => c.funcionarioId == this.usuarioCorrente.funcionarioId);   
    this.caixaUsuario = caixaAbertoUsuario != null && this.caixa.id == caixaAbertoUsuario.id;
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

  deletarPagamento(pagamento: AgendamentoPagamento) {
    var index = this.listaPagamentos.findIndex(c => c.formaPagamentoId == pagamento.formaPagamentoId);

    this.listaPagamentos.splice(index, 1);

    if (this.util.hasItems(this.listaPagamentos))
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
    this.listaPagamentos.forEach(c => {
      total = total + parseFloat(c.valor.toString());
    });
    return total;
  }

  formatarDecimal(e: any) {
    if (e.target.id == "valor")
      this.valorModel.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  salvar() {

    var retornar = false;

    if (!this.util.hasItems(this.listaPagamentos)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "É necessário adicionar um pagamento.";
      retornar = true;
    }

    if (this.somaPagamentos() <= 0) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Somatório dos pagamentos inválido.";
      retornar = true;
    }

    if (!retornar) {
      this.agendamento.contemPagamentos = true;
      this.agendamento.pagamentos = this.listaPagamentos;
      this.agendamento.situacaoAgendamento = ESituacaoAgendamento["Pago/Finalizado"];
      this.agendamento.corFundo = "#656565";
      this.agendamento.corLetra = "#656565";

      this.agendamentoService.salvar(this.agendamento).subscribe(agendamentoRetorno => {
        this.activeModal.close(agendamentoRetorno);
      });
    }
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





