
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Caixa } from '../../modelos/caixa';
import { Funcionario } from '../../modelos/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { CaixaService } from '../../services/caixa.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-modal-abertura-caixa.component',
  templateUrl: './modal-abertura-caixa.component.html'
})

export class ModalAberturaCaixaComponent {
  @ViewChild('funcionarioModel', { read: ElementRef, static: false }) private funcionarioModel: ElementRef;
  @ViewChild('senha', { read: ElementRef, static: false }) private senha: ElementRef;

  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  caixa: Caixa = new Caixa();
  util = new Util();
  funcionarios: Array<Funcionario>;
  dataAber: string;
  testPrice: any;
  existeCaixaAbertoParaFuncionario: boolean;
  senhaValida: boolean;
  constructor(public activeModal: NgbActiveModal, private loginService: LoginService, private funcionarioService: FuncionarioService, private caixaService: CaixaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.funcionarioModel.nativeElement.focus();
    this.caixa.horaAbertura = this.util.horaAgoraString();
    this.caixa.dataAbertura = this.util.dataParaString(new Date());
    this.funcionarioService.Todos().subscribe(funcs => {
      this.funcionarios = funcs;
    });
  }

  validaCaixaFuncionario() {
    this.caixaService.validarCaixaAbertoFuncionario(this.caixa.funcionarioId).subscribe(retorno => {
      this.existeCaixaAbertoParaFuncionario = retorno;
    });
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
    this.activeModal.close();
  }
}