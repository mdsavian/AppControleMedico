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
import { Medico } from '../../modelos/medico';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaModeloDescricaoComponent } from '../../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalSucessoComponent } from '../../shared/modal/modal-sucesso.component';
import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';
import * as tableDataClinica from './listagem-clinica-funcionario-settings';
import * as tableDataMedico from './listagem-medico-funcionario-settings';
import { ClinicaService } from '../../services/clinica.service';
import { MedicoService } from '../../services/medico.service';
import { Clinica } from '../../modelos/clinica';
import { LocalDataSource } from 'ng2-smart-table';
import { AppService } from '../../services/app.service';
import { ModalWebcamComponent } from '../../shared/modal/modal-webcam.component';
import { UploadService } from '../../services/upload.service';

@Component({
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroFuncionarioComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef, static: false }) private nomeCompleto: ElementRef;
  @ViewChild('numero', { read: ElementRef, static: false }) private numero: ElementRef;
  @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;

  funcionario = new Funcionario();

  settingsClinica = tableDataClinica.settingsClinica;
  settingsMedico = tableDataMedico.settingsMedico;
  usuarioAdministrador = false;
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
  clinicas: Clinica[] = [];
  clinicaModel: Clinica;
  sourceClinica: LocalDataSource;
  medicos: Medico[] = [];
  medicoModel: Medico;
  sourceMedico: LocalDataSource;
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';
  imagemFuncionario: any;

  constructor(private appService: AppService, private uploadService: UploadService, private loginService: LoginService, private medicoService: MedicoService, private clinicaService: ClinicaService, private usuarioService: UsuarioService, public router: Router, private funcionarioService: FuncionarioService, private enderecoService: EnderecoService,
    private oficioService: OficioService, private route: ActivatedRoute, private modalService: NgbModal) {
  }

  public ngAfterViewInit(): void {
    this.nomeCompleto.nativeElement.focus();
  }

  public ngOnInit(): void {
    this.usuario = this.appService.retornarUsuarioCorrente();
    this.usuarioAdministrador = this.appService.retornarUsuarioAdministrador();

    if (this.funcionarioService.funcionario != null) {

      this.funcionario = this.funcionarioService.funcionario;
      this.dataNasci = this.util.dataParaString(this.funcionario.dataNascimento);
      this.dataAdmis = this.util.dataParaString(this.funcionario.dataAdmissao);
      this.dataDemis = this.util.dataParaString(this.funcionario.dataDemissao);
      this.permiteAlterarSenha = this.usuario.funcionarioId == this.funcionario.id;

      if (!this.util.isNullOrWhitespace(this.funcionario.fotoId))
        this.downloadFoto();
    }
    this.alimentarModelos();
  }
  
  deletarMedico(event) {
    var medico = this.funcionario.medicos.find(c => c.id == event.data.id);
    this.funcionario.medicos.splice(this.funcionario.medicos.indexOf(medico), 1);

    this.medicos.push(medico);

    this.funcionario.medicosId.splice(this.funcionario.medicosId.indexOf(event.data.id), 1);

    this.funcionarioService.salvar(this.funcionario).subscribe(c => { });
    this.sourceMedico = new LocalDataSource(this.funcionario.medicos);

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


  associarMedicoFuncionario() {
    if (this.medicoModel == null)
      return;

    if (this.funcionario.medicosId == null)
      this.funcionario.medicosId = new Array<string>();

    if (this.funcionario.medicos == null)
      this.funcionario.medicos = new Array<Medico>();

    if (this.funcionario.medicos.find(c => c.id == this.medicoModel.id) != null)
      return;

    this.funcionario.medicosId.push(this.medicoModel.id);
    this.funcionario.medicos.push(this.medicoModel);
    var index = this.medicos.indexOf(this.medicoModel);

    this.medicos.splice(index, 1);
    this.medicoModel = this.medicos.find(c => true);
    this.sourceMedico = new LocalDataSource(this.funcionario.medicos);

    if (!this.util.isNullOrWhitespace(this.funcionario.id)) {
      this.funcionarioService.salvar(this.funcionario).subscribe(funci => { });
    }
  }

  associarClinicaFuncionario() {

    if (this.clinicaModel == null)
      return;

    if (this.funcionario.clinicasId == null)
      this.funcionario.clinicasId = new Array<string>();

    if (this.funcionario.clinicas == null)
      this.funcionario.clinicas = new Array<Clinica>();

    if (this.funcionario.clinicas.find(c => c.id == this.clinicaModel.id) != null)
      return;

    this.funcionario.clinicasId.push(this.clinicaModel.id);
    this.funcionario.clinicas.push(this.clinicaModel);

    var index = this.clinicas.indexOf(this.clinicaModel);

    this.clinicas.splice(index, 1);
    this.clinicaModel = this.clinicas.find(c => true);
    this.sourceClinica = new LocalDataSource(this.funcionario.clinicas);

    if (!this.util.isNullOrWhitespace(this.funcionario.id)) {
      this.funcionarioService.salvar(this.funcionario).subscribe(funcionario => {
        this.funcionario = funcionario;
      });
    }
  }

  alimentarModelos() {
    this.oficioService.Todos().subscribe(oficioBanco => {
      this.oficios = oficioBanco;
      this.nomeOficios = new Array<string>();

      oficioBanco.forEach(ofiBanc => {

        this.nomeOficios.push(ofiBanc.descricao);

        if (!this.util.isNullOrWhitespace(this.funcionario.oficioId) && this.funcionario.oficioId == ofiBanc.id)
          this.oficioSelecionado = this.nomeOficios.find(c => c == ofiBanc.descricao);
      });
    });

    this.medicoService.todos().subscribe(dados => {

      if (this.funcionario != null && this.util.hasItems(this.funcionario.medicosId)) {
        if (this.funcionario.medicos == null)
          this.funcionario.medicos = new Array<Medico>();

        dados.forEach(medicos => {

          var indexMedico = this.funcionario.medicosId.indexOf(medicos.id);
          if (indexMedico >= 0)
            this.funcionario.medicos.push(medicos);
          else
            this.medicos.push(medicos);
        });

        if (this.util.hasItems(this.funcionario.medicos))
          this.sourceMedico = new LocalDataSource(this.funcionario.medicos);
      }
      else
        this.medicos = dados;

      if (this.util.hasItems(this.medicos))
        this.medicoModel = this.medicos.find(c => true);
    });


    this.clinicaService.Todos().subscribe(dados => {

      if (this.funcionario != null && this.util.hasItems(this.funcionario.clinicasId)) {
        if (this.funcionario.clinicas == null)
          this.funcionario.clinicas = new Array<Clinica>();

        dados.forEach(clin => {

          var indexClinica = this.funcionario.clinicasId.indexOf(clin.id);
          if (indexClinica >= 0)
            this.funcionario.clinicas.push(clin);
          else
            this.clinicas.push(clin);
        });

        if (this.util.hasItems(this.funcionario.clinicas))
          this.sourceClinica = new LocalDataSource(this.funcionario.clinicas);
      }
      else
        this.clinicas = dados;

      if (this.util.hasItems(this.clinicas))
        this.clinicaModel = this.clinicas.find(c => true);
    });
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

  public tirarFoto() {
    var modalWebcam = this.modalService.open(ModalWebcamComponent, { size: "lg" });
    modalWebcam.result.then(imagem => {
      this.imagemFuncionario = this.util.dataURIparaBlob(imagem);
      this.imageUrl = "data:image/jpeg;base64," + imagem;
    },
      error => { });
  }

  importarArquivo() {
    this.fileInput.nativeElement.click();
  }

  changefile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.imageUrl = e.target['result'];
        this.imagemFuncionario = this.util.dataURIparaBlob(this.imageUrl.split(',')[1]);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public downloadFoto() {
    this.uploadService.downloadImagem(this.funcionarioService.funcionario.id, "funcionario").subscribe(byte => {
      this.imageUrl = "data:image/jpeg;base64," + byte['value'];
    });
  }

  public salvar(): void {
    this.funcionarioService.salvar(this.funcionario).subscribe(
      data => {

        if (this.imagemFuncionario != null) {
          this.uploadService.salvarImagem(this.imagemFuncionario, "funcionario", data.id).subscribe(c => {
            this.router.navigate(["listagem/listagemfuncionario"]);
          });
        }
        else
          this.router.navigate(["listagem/listagemfuncionario"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }
}