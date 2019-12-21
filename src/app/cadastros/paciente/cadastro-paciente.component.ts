import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Paciente } from "../../modelos/paciente";
import { Convenio } from '../../modelos/convenio'
import { Medico } from '../../modelos/medico';
import { ESemanasGestacao } from '../../enums/ESemanasGestacao';
import { EDiasGestacao } from '../../enums/EDiasGestacao';;
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
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ModalAdicionaConvenioComponent } from '../convenio/modal-adiciona-convenio.component';
import { ModalWebcamComponent } from '../../shared/modal/modal-webcam.component';
import { UploadService } from '../../services/upload.service';

@Component({
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroPacienteComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef, static: false }) private nomeCompleto: ElementRef;
  @ViewChild('numero', { read: ElementRef, static: true }) private numero: ElementRef;
  @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;

  paciente = new Paciente();  
  semanasGestacao = ESemanasGestacao;
  diasGestacao = EDiasGestacao;
  convenios: Array<Convenio> = [];
  util = new Util();
  estados = Estados;
  dataNasci: string = "01/01/1901"
  dataValidade: string = "01/01/1901"
  dataUltimaMenstru: string = "01/01/1901"
  descricaos: Array<string>;
  falhaNaBusca: boolean;
  medicos: Array<Medico>;
  exibeAbaEspecialidade: boolean;
  imagemPaciente: any;
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';

 
  constructor(public router: Router, private uploadService: UploadService, private pacienteService: PacienteService, private enderecoService: EnderecoService,
    private convenioService: ConvenioService, private modalService: NgbModal,
    private appService: AppService, private medicoService: MedicoService) {
  }

  public ngAfterViewInit(): void {
    this.nomeCompleto.nativeElement.focus();
  }  

  public ngOnInit(): void {

    if (this.pacienteService.paciente != null) {

      this.paciente = this.pacienteService.paciente;
      this.dataNasci = this.util.dataParaString(this.paciente.dataNascimento);
      this.dataValidade = this.util.dataParaString(this.paciente.dataValidadeCartao);
      this.dataUltimaMenstru = this.util.dataParaString(this.paciente.dataUltimaMenstruacao);

      if (!this.util.isNullOrWhitespace(this.paciente.fotoId))
        this.downloadFoto();
    }

    this.medicoService.buscarMedicosPorUsuario(this.appService.retornarUsuarioCorrente().id, this.appService.retornarClinicaCorrente().id, true)
      .subscribe(medicoRetorno => {
        this.medicos = medicoRetorno;
        this.ExibeAbaEspecialidade("obstetrícia");
      });

    this.convenioService.Todos().subscribe(dados => {
      this.convenios = dados;
    });
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

      let achei = false;
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
      this.imagemPaciente = this.util.dataURIparaBlob(imagem,'image/jpeg');
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
        this.imagemPaciente = this.util.dataURIparaBlob(this.imageUrl.split(',')[1], 'image/jpeg');
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public downloadFoto() {
    this.uploadService.downloadImagem(this.pacienteService.paciente.id, "paciente").subscribe(byte => {
      this.imageUrl = "data:image/jpeg;base64," + byte['value'];
    });
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
}