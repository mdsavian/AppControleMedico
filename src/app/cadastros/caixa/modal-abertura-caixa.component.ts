
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Caixa } from '../../modelos/caixa';
import { FuncionarioService } from '../../services/funcionario.service';
import { MedicoService } from '../../services/medico.service';
import { CaixaService } from '../../services/caixa.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';
import { forkJoin } from 'rxjs';
import { Pessoa } from '../../modelos/pessoa';
import { Medico } from '../../modelos/medico';
import { Funcionario } from '../../modelos/funcionario';

@Component({
  selector: 'app-modal-abertura-caixa.component',
  templateUrl: './modal-abertura-caixa.component.html'
})

export class ModalAberturaCaixaComponent {
  @ViewChild('funcionarioModel', { read: ElementRef, static: true }) private funcionarioModel: ElementRef;
  @ViewChild('senha', { read: ElementRef, static: false }) private senha: ElementRef;
  @ViewChild('trocoAbertura', { read: ElementRef, static: false }) private trocoAbertura: ElementRef;

  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  caixa: Caixa = new Caixa();
  util = new Util();
  dataAber: string;
  pessoas: Array<Pessoa> = new Array<Pessoa>();
  medicos: Array<Pessoa> = new Array<Medico>();
  funcionarios: Array<Pessoa> = new Array<Funcionario>();
  testPrice: any;
  existeCaixaAbertoParaFuncionario: boolean;
  senhaValida: boolean;
  constructor(public activeModal: NgbActiveModal, private appService: AppService, private medicoService: MedicoService,
    private loginService: LoginService, private funcionarioService: FuncionarioService, private caixaService: CaixaService, private modalService: NgbModal) { }

  ngOnInit() {
    // this.funcionarioModel.nativeElement.focus();
    this.caixa.clinicaId = this.appService.retornarClinicaCorrente().id;
    this.caixa.horaAbertura = this.util.horaAgoraString();
    this.caixa.dataAbertura = new Date();
    this.dataAber = this.util.dataParaString(new Date());
    this.caixa.usuarioAberturaId = this.appService.retornarUsuarioCorrente().id;

    this.buscarModelos().subscribe(c => {

      this.pessoas = this.pessoas.concat(this.funcionarios);
      this.pessoas = this.pessoas.concat(this.medicos);
      this.caixa.pessoaId = this.pessoas.find(c => true).id;
    });
  }

  buscarModelos() {
    let requisicoes = [];

    let reqFuncionario = this.funcionarioService.Todos().map(funcs => {
      this.funcionarios = funcs;
    });
    requisicoes.push(reqFuncionario);

    let reqMedico = this.medicoService.buscarMedicosPorUsuario().map(medicos => {
      this.medicos = medicos;
    });
    requisicoes.push(reqMedico);

    return forkJoin(requisicoes);
  }

  validaCaixaFuncionario() {
    this.caixaService.retornarCaixaAbertoFuncionario(this.caixa.funcionarioId).subscribe(caixa => {
      this.existeCaixaAbertoParaFuncionario = caixa != null;
    });
  }

  trocaPessoa(e: any) {
    var medico = this.medicos.find(c => c.id == this.caixa.pessoaId);
    var funcionario = this.funcionarios.find(c => c.id == this.caixa.pessoaId);

    if (medico != null)
      this.caixa.medicoId = medico.id;

    if (funcionario != null)
      this.caixa.funcionarioId = funcionario.id;

  }

  formatarDecimal(e: any) {
    if (e.target.id == "trocoAbertura")
      this.trocoAbertura.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
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
      this.caixa.horaAbertura = this.util.horaAgoraString();
      this.caixaService.salvar(this.caixa).subscribe(caixaRetorno => {
        this.activeModal.close(caixaRetorno);
      });
    }

  }

  fechar() {
    this.activeModal.close("");
  }
}