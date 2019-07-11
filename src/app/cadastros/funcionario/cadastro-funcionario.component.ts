import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Funcionario } from "../../modelos/funcionario";
import { Estados } from "../../enums/estados";
import { Usuario } from '../../modelos/usuario';
import { FuncionarioService } from "../../services/funcionario.service"
import { EnderecoService } from '../../services/endereco.service';
import { OficioService } from '../../services/oficio.service';
import { ModalAlteraSenhaComponent } from '../../shared/modal/modal-altera-senha.component';
import { Util } from '../../uteis/Util';
import { Oficio } from '../../modelos/oficio';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaModeloDescricaoComponent } from '../../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalSucessoComponent } from '../../shared/modal/modal-sucesso.component';
import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroFuncionarioComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef }) private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;

  funcionario: Funcionario = {
    id: "", nomeCompleto: "", cpf: "", dataAdmissao: new Date('01/01/0001'), dataDemissao: new Date('01/01/0001'),
    dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "", cep: "", endereco: "",
    oficioId: "", usuarioId: "",
    numero: "", complemento: "", bairro: "", cidade: "", uf: "", oficio: new Oficio(), imagem: "", usuario: new Usuario(), permissaoAdministrador: false, visualizaAgenda: false
  };

  permiteAlterarSenha = false;
  oficios = new Array<Oficio>();
  nomeOficios: Array<string>;
  falhaNaBusca: boolean;
  oficioSelecionado: string;
  util = new Util();
  estados = Estados;
  dataNasci: string = "01/01/1901"
  dataAdmis: string = "01/01/1901"
  dataDemis: string = "01/01/1901"
  usuario: Usuario;

  constructor(private loginService: LoginService, private usuarioService: UsuarioService, public router: Router, private funcionarioService: FuncionarioService, private enderecoService: EnderecoService,
    private oficioService: OficioService, private route: ActivatedRoute, private modalService: NgbModal) {
  }

  public ngAfterViewInit(): void {
    this.nomeCompleto.nativeElement.focus();
  }

  alterarSenha() {

    if (this.permiteAlterarSenha) {
      var modal = this.modalService.open(ModalAlteraSenhaComponent, { windowClass: "modal-holder" });

      modal.result.then((alteraSenha) => {
        alteraSenha.usuarioId = this.usuario.id;
        this.usuarioService.alterarSenha(alteraSenha).subscribe(c => {
          if (c == null) {
            var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
            modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente.";
          }
          else {
            var modal = this.modalService.open(ModalSucessoComponent, { windowClass: "modal-holder" });
            modal.componentInstance.mensagem = "Senha alterada com sucesso";
            modal.componentInstance.titulo = "Alterado com sucesso";
            modal.result.then(() => this.loginService.logout());
          }
        });
      },
        error => {

        });
    }
  }

  public ngOnInit(): void {
    this.usuario = this.util.retornarUsuarioCorrente();

    if (this.funcionarioService.funcionario != null) {

      this.funcionario = this.funcionarioService.funcionario;
      this.dataNasci = this.util.dataParaString(this.funcionario.dataNascimento);
      this.dataAdmis = this.util.dataParaString(this.funcionario.dataAdmissao);
      this.dataDemis = this.util.dataParaString(this.funcionario.dataDemissao);
      this.permiteAlterarSenha = this.usuario.funcionarioId == this.funcionario.id;
    }

    this.oficioService.Todos().subscribe(oficioBanco => {
      this.oficios = oficioBanco;
      this.nomeOficios = new Array<string>();
      
      oficioBanco.forEach(ofiBanc => {

        this.nomeOficios.push(ofiBanc.descricao);

        if (!this.util.isNullOrWhitespace(this.funcionario.oficioId) && this.funcionario.oficioId == ofiBanc.id)
          this.oficioSelecionado = this.nomeOficios.find(c => c == ofiBanc.descricao);
      });
    })
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.falhaNaBusca = this.nomeOficios.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.nomeOficios.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  selectedItem(item) {
    var oficio = this.oficios.find(c => c.descricao === item.item);
    this.funcionario.oficio = oficio;
    this.funcionario.oficioId = oficio.id;
  }
  public buscaCep() {
    if (this.funcionario.cep != "") {
      this.enderecoService.buscarEndereco(this.funcionario.cep).subscribe(c => {
        this.funcionario.cep = c.cep;
        this.funcionario.bairro = c.bairro;
        this.funcionario.endereco = c.rua;
        this.funcionario.complemento = c.complemento;
        this.funcionario.uf = c.uf;
        this.funcionario.cidade = c.cidade;
        this.numero.nativeElement.focus();
      });
    }
  }

  public formataData(e): void {
    if (e.target.id == "dataNascimento")
      this.funcionario.dataNascimento = this.util.stringParaData(e.target.value);
    else if (e.target.id == "dataAdmissao")
      this.funcionario.dataAdmissao = this.util.stringParaData(e.target.value);
    else if (e.target.id == "dataDemissao")
      this.funcionario.dataDemissao = this.util.stringParaData(e.target.value);
  }

  public adicionaOficio(): void {

    var modal = this.modalService.open(ModalAdicionaModeloDescricaoComponent, { windowClass: "modal-holder" });
    modal.componentInstance.descricaoErro = "Ofício obrigatório.";
    modal.componentInstance.labelDescricao = "Ofício";

    modal.result.then((oficio) => {
      if (oficio != '') {

        var oficioExistente = this.oficios.find(c => c.descricao == oficio.descricao);
        if (oficioExistente != null) {
          this.funcionario.oficio = oficioExistente;
          this.funcionario.oficioId = oficioExistente.id;
          this.oficioSelecionado = oficioExistente.descricao;
        }
        else {
          var novoOficio = new Oficio()
          novoOficio.descricao = oficio.descricao;
          this.oficios.push(novoOficio);
          this.nomeOficios.push(novoOficio.descricao);


          this.oficioService.salvar(novoOficio).subscribe(oficioCadastrado => {
            this.funcionario.oficio = oficioCadastrado;
            this.funcionario.oficioId = oficioCadastrado.id;
            this.oficioSelecionado = oficioCadastrado.descricao;
          })
        }
      }
    });
  }

  public salvar(): void {
    this.funcionarioService.salvar(this.funcionario).subscribe(
      data => {
        this.router.navigate(["listagem/listagemfuncionario"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }
}