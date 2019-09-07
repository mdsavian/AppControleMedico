
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

@Component({
  selector: 'app-modal-fechamento-caixa.component',
  templateUrl: './modal-fechamento-caixa.component.html'
})

export class ModalFechamentoCaixaComponent {
  @ViewChild('caixaModel', { read: ElementRef, static: true }) private caixaModel: ElementRef;
  @ViewChild('login', { read: ElementRef, static: true }) private login: ElementRef;
  @ViewChild('senha', { read: ElementRef, static: false }) private senha: ElementRef;

  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  caixa: Caixa = new Caixa
  caixas: Array<Caixa>;
  util = new Util();
  funcionarios: Array<Funcionario>;
  dataAber: string;
  testPrice: any;
  existeCaixaAbertoParaFuncionario: boolean;
  senhaValida: boolean;
  constructor(public activeModal: NgbActiveModal, private loginService: LoginService, private funcionarioService: FuncionarioService,
    private caixaService: CaixaService, private appService: AppService, private modalService: NgbModal) { }

  ngOnInit() {
    this.caixaModel.nativeElement.focus();
    var horaString = this.util.horaAgoraString();
    var dataString = this.util.dataParaString(new Date());
    
    this.caixa.dataFechamento = dataString;
    this.caixa.horaFechamento = horaString;
    var usuario = this.appService.retornarUsuarioCorrente().id;

    this.caixaService.retornarTodosCaixasAbertos().subscribe(caixas => {
      this.funcionarioService.Todos().subscribe(funcs => {
        this.funcionarios = funcs;
        caixas.forEach(caix => {
          let func = funcs.find(c => c.id == caix.funcionarioId);          

          caix.dataFechamento = dataString;
          caix.horaFechamento = horaString;
          caix.usuarioFechamentoId = usuario;

          caix.descricao = "Caixa aberto por " + func.nomeCompleto + " em " + this.util.formatarData(caix.dataAbertura)
            + " " + this.util.formatarHora(caix.horaAbertura);
        });
        this.caixas = caixas
      });
    });
  }

  descricaoCaixa(e: any) {
    let caix = this.caixas.find(c => c.id == this.caixa.id);
    this.login.nativeElement.value = this.funcionarios.find(c => c.id == caix.funcionarioId).email;
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
    if (this.util.isNullOrWhitespace(this.caixa.funcionarioId)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Funcionário inválido.";
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