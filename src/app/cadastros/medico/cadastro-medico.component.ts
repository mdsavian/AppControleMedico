import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { Router } from '@angular/router';
import { ConvenioService } from '../../services/convenio.service';
import { ClinicaService } from '../../services/clinica.service';
import { Convenio } from '../../modelos/convenio';
import { Especialidade } from '../../modelos/especialidade';
import { Util } from '../../uteis/Util';
import { EnderecoService } from '../../services/endereco.service';
import { Usuario } from '../../modelos/usuario';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EspecialidadeService } from '../../services/especialidade.service';
import { Paciente } from '../../modelos/paciente';
import { PacienteService } from '../../services/paciente.service';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableDataGestantes from './listagem-paciente-gestante-settings';
import * as tableDataConvenio from './listagem-convenio-medico-settings';
import * as tableDataClinica from './listagem-clinica-medico-settings';
import { ModalAlteraSenhaComponent } from '../../shared/modal/modal-altera-senha.component';
import { ModalSucessoComponent } from '../../shared/modal/modal-sucesso.component';
import { UsuarioService } from '../../services/usuario.service';
import { LoginService } from '../../services/login.service';
import { Clinica } from '../../modelos/clinica';
import { ModalAdicionaConvenioComponent } from '../convenio/modal-adiciona-convenio.component';
import { AppService } from '../../services/app.service';
import { ModalWebcamComponent } from '../../shared/modal/modal-webcam.component';
import { UploadService } from '../../services/upload.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss', '../../cadastros/cadastros.scss']
})

export class CadastroMedicoComponent implements OnInit {
  
  @ViewChild('numero', { read: ElementRef, static: false }) private numero: ElementRef;
  @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;

  settingsGestante = tableDataGestantes.settingsGestante;
  settingsConvenio = tableDataConvenio.settingsConvenio;
  settingsClinica = tableDataClinica.settingsClinica;

  sourceGestante: LocalDataSource;
  sourceConvenio: LocalDataSource;
  sourceClinica: LocalDataSource;
  estados = Estados;
  especialidades = new Array<Especialidade>();
  nomeEspecialidades: Array<string>;
  falhaNaBusca: boolean;
  especialidadeSelecionada: string;
  pacientesGestantes: Array<Paciente>;
  data: string = "01/01/1901"
  util = new Util();
  convenios: Array<Convenio> = [];
  medico = new Medico();
  usuario: Usuario;
  usuarioAdministrador = false;
  permiteAlterarSenha = false;
  convenioModel: Convenio;
  clinicas: Clinica[] = [];
  clinicaModel: Clinica;
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';
  imagemMedico: any;
  isSpinnerVisible = false;

  constructor(private appService: AppService, private agendamentoService: AgendamentoService, private uploadService: UploadService, private loginService: LoginService, private usuarioService: UsuarioService, private medicoService: MedicoService, private especialidadeService: EspecialidadeService, private enderecoService: EnderecoService, private clinicaService: ClinicaService,
    private convenioService: ConvenioService, private pacienteService: PacienteService, private router: Router, private modalService: NgbModal) {
  }

  public ngOnInit(): void {
    this.isSpinnerVisible = true;
    this.alimentarModelos().subscribe(c => { this.isSpinnerVisible = false; });
  }

  private alimentarModelos() {

    this.usuario = this.appService.retornarUsuarioCorrente();
    this.usuarioAdministrador = this.util.retornarUsuarioAdministradorSistema(this.usuario);

    let observableBatch = [];

    if (this.medicoService.medico != null) {
      this.medico = this.medicoService.medico;
      this.data = this.util.dataParaString(this.medico.dataNascimento);
      this.permiteAlterarSenha = this.usuario.medicoId == this.medico.id;

      if (!this.util.isNullOrWhitespace(this.medico.fotoId)) {
        let reqFoto = this.uploadService.downloadImagem(this.medicoService.medico.id, "medico").map(byte => {
          this.imageUrl = "data:image/jpeg;base64," + byte['value'];
        });
        observableBatch.push(reqFoto);
      }

      let reqGestantes = this.pacienteService.TodosGestantesFiltrandoMedico(this.medico.id).map(gestantes => {
        this.pacientesGestantes = gestantes;
        this.sourceGestante = new LocalDataSource(this.pacientesGestantes);
      });
      observableBatch.push(reqGestantes);
    }

    let reqConvenio = this.convenioService.Todos().map(dados => {

      if (this.medico != null && this.util.hasItems(this.medico.conveniosId)) {
        if (this.medico.convenios == null)
          this.medico.convenios = new Array<Convenio>();

        dados.forEach(conv => {

          var indexConvenio = this.medico.conveniosId.indexOf(conv.id);

          if (indexConvenio >= 0)
            this.medico.convenios.push(conv);
          else
            this.convenios.push(conv);
        });

        if (this.util.hasItems(this.medico.convenios))
          this.sourceConvenio = new LocalDataSource(this.medico.convenios);
      }
      else
        this.convenios = dados;

      if (this.util.hasItems(this.convenios))
        this.convenioModel = this.convenios.find(c => true);
    });

    observableBatch.push(reqConvenio);

    let reqClinica = this.clinicaService.Todos().map(dados => {

      if (this.medico != null && this.util.hasItems(this.medico.clinicasId)) {
        if (this.medico.clinicas == null)
          this.medico.clinicas = new Array<Clinica>();

        dados.forEach(clin => {

          var indexClinica = this.medico.clinicasId.indexOf(clin.id);
          if (indexClinica >= 0)
            this.medico.clinicas.push(clin);
          else
            this.clinicas.push(clin);
        });

        if (this.util.hasItems(this.medico.clinicas))
          this.sourceClinica = new LocalDataSource(this.medico.clinicas);
      }
      else
        this.clinicas = dados;

      if (this.util.hasItems(this.clinicas))
        this.clinicaModel = this.clinicas.find(c => true);
    });

    observableBatch.push(reqClinica);

    let reqEspecialidade = this.especialidadeService.Todos().map(c => {
      this.especialidades = c;

      this.nomeEspecialidades = new Array<string>();
      c.forEach(d => {
        this.nomeEspecialidades.push(d.descricao);
      });

      if (!this.util.isNullOrWhitespace(this.medico.especialidadeId)) {
        this.medico.especialidade = this.especialidades.find(c => c.id == this.medico.especialidadeId);
        this.especialidadeSelecionada = this.nomeEspecialidades.find(c => c === this.medico.especialidade.descricao);
      }
    });

    observableBatch.push(reqEspecialidade);




    return Observable.forkJoin(observableBatch);
  }

  public formataData(e): void {
    {
      var dataFormatada = "";

      if (!this.util.isNullOrWhitespace(e.target.value))
        dataFormatada = this.util.formatarDataBlur(e.target.value);

      this.medico.dataNascimento = this.util.stringParaData(dataFormatada);
      this.data = dataFormatada;
    }
  }

  configurarAgendaMedico() {
    if (this.medico.id != '') {
      this.medicoService.medico = this.medico;
      this.router.navigate(['/cadastros/configuracaoagenda']);
    }
  }

  public adicionaConvenio() {
    var modal = this.modalService.open(ModalAdicionaConvenioComponent, { windowClass: "modal-holder" });

    modal.result.then((convenio) => {
      this.convenioModel = convenio;
      this.associarConvenioMedico();
    }, error => { });

  }

  associarClinicaMedico() {

    if (this.clinicaModel == null)
      return;

    if (this.medico.clinicasId == null)
      this.medico.clinicasId = new Array<string>();

    if (this.medico.clinicas == null)
      this.medico.clinicas = new Array<Clinica>();

    if (this.medico.clinicas.find(c => c.id == this.clinicaModel.id) != null)
      return;

    this.medico.clinicasId.push(this.clinicaModel.id);
    this.medico.clinicas.push(this.clinicaModel);

    var index = this.clinicas.indexOf(this.clinicaModel);

    this.clinicas.splice(index, 1);
    this.clinicaModel = this.clinicas.find(c => true);
    this.sourceClinica = new LocalDataSource(this.medico.clinicas);

    if (!this.util.isNullOrWhitespace(this.medico.id)) {
      this.medicoService.salvar(this.medico).subscribe(medico => {
        this.medico = medico;
      });
    }
  }

  associarConvenioMedico() {

    if (this.convenioModel == null)
      return;

    if (this.medico.conveniosId == null)
      this.medico.conveniosId = new Array<string>();

    if (this.medico.convenios == null)
      this.medico.convenios = new Array<Convenio>();

    if (this.medico.convenios.find(c => c.id == this.convenioModel.id) != null)
      return;

    this.medico.conveniosId.push(this.convenioModel.id);
    this.medico.convenios.push(this.convenioModel);

    var index = this.convenios.indexOf(this.convenioModel);

    this.convenios.splice(index, 1);
    this.convenioModel = this.convenios.find(c => true);
    this.sourceConvenio = new LocalDataSource(this.medico.convenios);

    if (!this.util.isNullOrWhitespace(this.medico.id)) {
      this.medicoService.salvar(this.medico).subscribe(medico => {
        this.medico = medico;
      });
    }
  }

  deletarConvenioAssociado(convenioId) {

    if (this.medico.convenios.find(c => c.id == convenioId) == null)
      return;

    this.medicoService.validarDeleteConvenioMedico(this.medico.id, convenioId).subscribe(retorno => {
      if (retorno) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir convênio vínculado a agendamento(s).";
      }
      else {

        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {

              var convenio = this.medico.convenios.find(c => c.id == convenioId);

              var index = this.medico.convenios.indexOf(convenio);
              this.medico.convenios.splice(index, 1);

              index = this.medico.conveniosId.indexOf(convenioId);
              this.medico.conveniosId.splice(index, 1);

              this.convenios.push(convenio);

              this.medicoService.salvar(this.medico).subscribe(medico => {
                this.medico = medico;
              });

              this.sourceConvenio = new LocalDataSource(this.medico.convenios);
              this.convenioModel = this.convenios.find(c => true);
            }
          }
        );
      }
    });
  }

  alterarSenhaMedico() {

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

  editarPaciente(event) {
    this.pacienteService.buscarPorId(event.data.id).subscribe(paciente => {
      this.pacienteService.paciente = paciente;
      this.router.navigate(['/cadastros/cadastropaciente']);
    });
  }

  ExibeAbaEspecialidade(especialidade: string): boolean {
    if (this.medico != null && this.medico.especialidade != null && this.medico.especialidade.descricao != null) {
      return this.medico.especialidade.descricao.includes(especialidade);
    }
    return false;
  }

  selecionaEspecialidade(item: any) {
    var especialidade = this.especialidades.find(c => c.descricao === item.item);
    if (especialidade != null) {
      this.medico.especialidadeId = especialidade.id;
      this.medico.especialidade = especialidade;

    }
  }


  buscaEspecialidade = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.falhaNaBusca = this.nomeEspecialidades.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.nomeEspecialidades.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  public buscaCep() {
    if (this.medico.cep != "") {
      this.enderecoService.buscarEndereco(this.medico.cep).subscribe(c => {

        this.medico.cep = c.cep;
        this.medico.bairro = c.bairro;
        this.medico.endereco = c.rua;
        this.medico.complemento = c.complemento;
        this.medico.uf = c.uf;
        this.medico.cidade = c.cidade;

        this.numero.nativeElement.focus();
      });
    }
  }

  public tirarFoto() {
    var modalWebcam = this.modalService.open(ModalWebcamComponent, { size: "lg" });
    modalWebcam.result.then(imagem => {
      this.imagemMedico = this.util.dataURIparaBlob(imagem);
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
        this.imagemMedico = this.util.dataURIparaBlob(this.imageUrl.split(',')[1]);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public downloadFoto() {

  }



  public salvar(): void {
    if (this.usuarioAdministrador || !this.util.isNullOrWhitespace(this.medico.id)) {
      this.medicoService.medico = null;
      this.medicoService.salvar(this.medico).subscribe(
        data => {
          if (this.imagemMedico != null) {
            this.uploadService.salvarImagem(this.imagemMedico, "medico", data.id).subscribe(c => {
              this.router.navigate(["listagem/listagemmedico"]);
            });
          }
          else
            this.router.navigate(["listagem/listagemmedico"]);

        },
        error => {
          var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
          modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
        }
      )
    }
    else {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Usuário sem permissão para cadastrar um novo médico.";
    }
  }
}
