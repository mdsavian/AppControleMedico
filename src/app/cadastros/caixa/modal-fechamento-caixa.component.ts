
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
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { forkJoin } from 'rxjs';
import { Pessoa } from '../../modelos/pessoa';

@Component({
  selector: 'app-modal-fechamento-caixa.component',
  templateUrl: './modal-fechamento-caixa.component.html'
})

export class ModalFechamentoCaixaComponent {
  @ViewChild('caixaModel', { read: ElementRef, static: true }) private caixaModel: ElementRef;
  @ViewChild('login', { read: ElementRef, static: true }) private login: ElementRef;
  @ViewChild('senha', { read: ElementRef, static: false }) private senha: ElementRef;
  @ViewChild('trocoFechamento', { read: ElementRef, static: false }) private trocoFechamento: ElementRef;

  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  caixa: Caixa = new Caixa
  caixas: Array<Caixa>;
  util = new Util();
  funcionarios: Array<Funcionario>;
  dataFecha: string;
  testPrice: any;
  senhaValida: boolean;
  medicos = new Array<Medico>();

  constructor(public activeModal: NgbActiveModal, private loginService: LoginService, private medicoService: MedicoService, private funcionarioService: FuncionarioService,
    private caixaService: CaixaService, private appService: AppService, private modalService: NgbModal) { }

  ngOnInit() {
    this.caixaModel.nativeElement.focus();
    var horaString = this.util.horaAgoraString();
    var dataString = this.util.dataParaString(new Date());
    this.dataFecha = dataString;
    this.caixa.dataFechamento = this.util.stringParaData(dataString);
    this.caixa.horaFechamento = horaString;
    var usuarioId = this.appService.retornarUsuarioCorrente().id;

    this.buscarModelos().subscribe(c => {

      this.caixas.forEach(caix => {
        caix.dataFechamento = this.util.stringParaData(dataString);
        caix.horaFechamento = horaString;
        caix.usuarioFechamentoId = usuarioId;

        var pessoa = this.caixaService.retornarPessoaCaixa(caix, this.funcionarios, this.medicos);

        caix.descricao = "Caixa aberto por " + (pessoa != null ? pessoa.nomeCompleto : "") + " em " + this.util.dataParaString(caix.dataAbertura)
          + " " + this.util.formatarHora(caix.horaAbertura);
      });

    })

  }

  buscarModelos() {
    let requisicoes = [];

    let reqFunc = this.funcionarioService.Todos().map(funcs => {
      this.funcionarios = funcs;
    });
    requisicoes.push(reqFunc);

    let reqCaixa = this.caixaService.retornarTodosCaixasAbertos().map(caixas => {
      this.caixas = caixas
    });
    requisicoes.push(reqCaixa);

    let reqMedico = this.medicoService.buscarMedicosPorUsuario().map(medicos => {
      this.medicos = medicos;
    })
    requisicoes.push(reqMedico);

    return forkJoin(requisicoes);
  }

  formatarDecimal(e: any) {
    if (e.target.id == "trocoFechamento")
      this.trocoFechamento.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  descricaoCaixa(e: any) {
    let caix = this.caixas.find(c => c.id == this.caixa.id);
    
    var pessoa = this.caixaService.retornarPessoaCaixa(caix, this.funcionarios, this.medicos);
    if (pessoa != null)
      this.login.nativeElement.value = pessoa.email;
  }

  validaSenha() {
    if (!this.util.isNullOrWhitespace(this.caixa.funcionarioId)) {
      this.loginService.validaSenha(this.funcionarios.find(c => c.id == this.caixa.funcionarioId).email, this.senha.nativeElement.value).subscribe(senhaValidada => {
        this.senhaValida = !senhaValidada;
      });
    }
  }

  salvar() {
    var retornar = false;
    if (this.util.isNullOrWhitespace(this.caixa.pessoaId)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Pessoa inválida.";
      retornar = true;
    }

    if (this.caixa.trocoFechamento <= 0) {
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