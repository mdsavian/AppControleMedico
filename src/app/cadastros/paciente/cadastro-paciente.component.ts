import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Paciente } from "../../modelos/paciente";
import { Convenio } from '../../modelos/convenio'
import { Medico } from '../../modelos/medico';
import { ESemanasGestacao } from '../../enums/ESemanasGestacao';
import { EDiasGestacao } from '../../enums/EDiasGestacao';
import { EEstadoCivil } from '../../enums/EEstadoCivil';
import { Estados } from "../../enums/estados";
import { Util } from '../../uteis/Util';
import { PacienteService } from "../../services/paciente.service"
import { EnderecoService } from '../../services/endereco.service';
import { ConvenioService } from '../../services/convenio.service';
import { AppService } from '../../services/app.service';
import { MedicoService } from '../../services/medico.service';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, forkJoin } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ModalAdicionaConvenioComponent } from '../convenio/modal-adiciona-convenio.component';
import { ModalWebcamComponent } from '../../shared/modal/modal-webcam.component';
import { UploadService } from '../../services/upload.service';
import { PrescricaoPaciente } from '../../modelos/prescricaoPaciente';
import { PrescricaoPacienteService } from '../../services/prescricaoPaciente.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ModalCadastroPrescricaoPacienteComponent } from '../modelo-prescricao/modal-cadastro-prescricao-paciente.component';
import { BotaoImprimirComponent } from '../../shared/components/botao-imprimir-component';

@Component({
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroPacienteComponent implements OnInit, AfterViewChecked {

  @ViewChild('nomeCompleto', { read: ElementRef, static: false }) private nomeCompleto: ElementRef;
  @ViewChild('numero', { read: ElementRef, static: true }) private numero: ElementRef;
  @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;

  paciente = new Paciente();
  semanasGestacao = ESemanasGestacao;
  diasGestacao = EDiasGestacao;
  convenios: Array<Convenio> = [];
  util = new Util();
  estados = Estados;
  estadosCivil = EEstadoCivil;
  dataNasci: string = "01/01/1901"
  dataValidade: string = "01/01/1901"
  dataUltimaMenstru: string = "01/01/1901"
  descricaos: Array<string>;
  falhaNaBusca: boolean;
  medicos: Array<Medico>;
  exibeAbaEspecialidade: boolean;
  imagemPaciente: any;
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';
  usuarioAdm: boolean;
  isSpinnerVisible: boolean;
  sourcePrescricao: LocalDataSource;
  prescricoes = new Array<PrescricaoPaciente>();


  constructor(public router: Router, private uploadService: UploadService, private pacienteService: PacienteService, private enderecoService: EnderecoService,
    private convenioService: ConvenioService, private modalService: NgbModal,
    private appService: AppService, private prescricaoPacienteService: PrescricaoPacienteService, private medicoService: MedicoService) {
  }

  public ngAfterViewChecked(): void {
    // if (this.nomeCompleto != null)
    //   this.nomeCompleto.nativeElement.focus();
  }

  alimentarModelos() {

    let requisicoes = [];

    if (this.pacienteService.paciente != null) {

      this.paciente = this.pacienteService.paciente;
      this.dataNasci = this.util.dataParaString(this.paciente.dataNascimento);
      this.dataValidade = this.util.dataParaString(this.paciente.dataValidadeCartao);
      this.dataUltimaMenstru = this.util.dataParaString(this.paciente.dataUltimaMenstruacao);

      let reqPrescricaoPaciente = this.prescricaoPacienteService.buscarPorPaciente(this.paciente.id).map(c => {
        if (this.util.hasItems(c)) {
          this.prescricoes = c;
          this.prescricaoPacienteService.listaPrescricaoPaciente = c;
          this.sourcePrescricao = new LocalDataSource(c);
        }
      });

      requisicoes.push(reqPrescricaoPaciente);

      if (!this.util.isNullOrWhitespace(this.paciente.fotoId))
        var reqImagem = this.uploadService.downloadImagem(this.pacienteService.paciente.id, "paciente").subscribe(byte => {
          this.imageUrl = "data:image/jpeg;base64," + byte['value'];
          requisicoes.push(reqImagem);
        });
    }

    var reqMedico = this.medicoService.buscarMedicosPorUsuario(true)
      .map(medicoRetorno => {
        this.medicos = medicoRetorno;
        this.ExibeAbaEspecialidade("obstetrícia");
      });

    requisicoes.push(reqMedico);

    var reqConvenio = this.convenioService.Todos().map(dados => {
      this.convenios = dados;
    });

    requisicoes.push(reqConvenio);

    return forkJoin(requisicoes);
  }

  public ngOnInit(): void {
    this.usuarioAdm = this.util.retornaUsuarioAdmOuMedico(this.appService.retornarUsuarioCorrente());
    this.isSpinnerVisible = true;

    this.alimentarModelos().subscribe(c => this.isSpinnerVisible = false);
  }

  public adicionaConvenio(): void {
    var modal = this.modalService.open(ModalAdicionaConvenioComponent, { windowClass: "modal-holder" });
    modal.result.then((convenio) => {
      this.paciente.convenio = convenio;
      this.paciente.convenioId = convenio.id;
      this.convenios.push(convenio);
    }, error => { });
  }

  public buscaCep() {
    if (this.paciente.cep != "") {
      this.enderecoService.buscarEndereco(this.paciente.cep).subscribe(c => {
        this.paciente.cep = c.cep;
        this.paciente.bairro = c.bairro;
        this.paciente.endereco = c.rua;
        this.paciente.complemento = c.complemento;
        this.paciente.uf = c.uf;
        this.paciente.cidade = c.cidade;
        this.numero.nativeElement.focus();
      });
    }
  }

  ExibeAbaEspecialidade(especialidade: string) {
    if (this.util.hasItems(this.medicos)) {
      this.medicos.forEach(medico => {
        if (!this.exibeAbaEspecialidade) {
          this.exibeAbaEspecialidade = medico.especialidade.descricao.toUpperCase().includes(especialidade.toUpperCase());
          if (this.exibeAbaEspecialidade)
            return;
        }
      });

    }
  }

  buscaConvenio = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.falhaNaBusca = this.descricaos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.descricaos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  public formataData(e): void {

    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    if (e.target.id == "dataNascimento") {
      this.paciente.dataNascimento = this.util.stringParaData(dataFormatada);
      this.dataNasci = dataFormatada;
    }
    else if (e.target.id == "dataValidadeCartao") {
      this.paciente.dataValidadeCartao = this.util.stringParaData(dataFormatada);
      this.dataValidade = dataFormatada;
    }
    else if (e.target.id == "dataUltimaMenstruacao") {
      this.paciente.dataUltimaMenstruacao = this.util.stringParaData(dataFormatada);
      this.dataUltimaMenstru = dataFormatada;
    }
  }

  public tirarFoto() {
    var modalWebcam = this.modalService.open(ModalWebcamComponent, { size: "lg" });
    modalWebcam.result.then(imagem => {
      this.imagemPaciente = this.util.dataURIparaBlob(imagem);
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
        this.imagemPaciente = this.util.dataURIparaBlob(this.imageUrl.split(',')[1]);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public downloadFoto() {

  }

  public salvar(): void {
    
    this.pacienteService.paciente = null;
    this.pacienteService.salvar(this.paciente).subscribe(
      data => {
        if (this.imagemPaciente != null) {
          this.uploadService.salvarImagem(this.imagemPaciente, "paciente", data.id).subscribe(
            c => {
              this.router.navigate(["listagem/listagempaciente"]);
            }
          );
        }
        else
          this.router.navigate(["listagem/listagempaciente"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }

  criarPrescricao() {

    var modalPrescricao = this.modalService.open(ModalCadastroPrescricaoPacienteComponent, { size: "lg" });
    modalPrescricao.componentInstance.paciente = this.paciente;
    modalPrescricao.result.then(novaPrescricao => {

      if (novaPrescricao != null) {

        this.prescricoes.push(novaPrescricao);
        this.sourcePrescricao = new LocalDataSource(this.prescricoes);
      }

    }, error => { })
  }

  editarPrescricao(prescricaoPacienteId) {
    var prescricao = this.prescricoes.find(c => c.id == prescricaoPacienteId);

    if (prescricao != null) {
      var modalPrescricao = this.modalService.open(ModalCadastroPrescricaoPacienteComponent, { size: "lg" });
      modalPrescricao.componentInstance.prescricaoPaciente = prescricao;
      modalPrescricao.componentInstance.editando = true;
      modalPrescricao.componentInstance.paciente = this.paciente;

      modalPrescricao.result.then(novaPrescricao => {

        if (novaPrescricao != null) {
          this.prescricoes.splice(this.prescricoes.indexOf(prescricao), 1);
          this.prescricoes.push(novaPrescricao);
          this.sourcePrescricao = new LocalDataSource(this.prescricoes);
        }

      }, error => { })

    }
  }

  settingsPrescricoes = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      data: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (data) => {return this.util.dataParaString(data) }
      },
      medicoId: {
        title: 'Médico',
        filter: true,
        valuePrepareFunction: (medicoId) => {
          return this.util.hasItems(this.medicos) && !this.util.isNullOrWhitespace(medicoId) ? this.medicos.find(c => c.id == medicoId).nomeCompleto : ""
        }
      },
      id: {
        title: "Imprimir",
        type: "custom",
        filter: false,
        renderComponent: BotaoImprimirComponent,
      }
    },
    actions:
    {
      columnTitle: '',
      delete: false
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    add:
    {
      addButtonContent: 'Nova Prescrição'
    }
  };
}