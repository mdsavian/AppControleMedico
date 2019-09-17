import { Paciente } from '../../modelos/paciente';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Convenio } from '../../modelos/convenio';
import { ConvenioService } from '../../services/convenio.service';
import { ModalAdicionaModeloDescricaoComponent } from '../../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalWebcamComponent } from '../../shared/modal/modal-webcam.component';

@Component({
  selector: 'app-modal-cadastro-paciente.component',
  templateUrl: './modal-cadastro-paciente.component.html'
})

export class ModalCadastroPacienteComponent {
  @ViewChild('nomeCompleto', { read: ElementRef, static:true }) private nomeCompleto: ElementRef;
  @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;


  paciente: Paciente = new Paciente();
  util = new Util();
  convenio: Convenio;
  convenios: Array<Convenio>;
  nomeCompletoModel: string;
  dataNasci:string;

  imagemPaciente: any;
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';

  constructor(public activeModal: NgbActiveModal, private convenioService: ConvenioService, private modalService: NgbModal) { }

  public formataData(e): void {
    if (e.target.id == "dataNascimento")
      this.paciente.dataNascimento = this.util.stringParaData(e.target.value);
  }

  adicionaConvenio() {
    var modalAdiciona = this.modalService.open(ModalAdicionaModeloDescricaoComponent);
    modalAdiciona.componentInstance.descricaoErro = "Convênio obrigatório.";
    modalAdiciona.componentInstance.labelDescricao = "Convênio";
    modalAdiciona.componentInstance.mostrarCor = false;

    modalAdiciona.result.then((convenio) => {
      if (convenio != null && convenio.descricao != '') {

        var convenioExistente = this.convenios.find(c => c.descricao == convenio.descricao);
        if (convenioExistente != null) {
          this.paciente.convenio = convenioExistente;
          this.convenio = convenioExistente;
        }
        else {

          this.convenio = new Convenio();
          this.convenio.descricao = convenio.descricao;
          this.convenios.push(this.convenio);

          this.convenioService.salvar(this.convenio).subscribe(convenioCadastrado => {
            this.paciente.convenio = convenioCadastrado;
          });

          this.convenio = this.convenios.find(c => c.descricao == convenio.descricao);
        }
      }
    }).catch((error) => { })

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

  ngOnInit() {
    this.nomeCompleto.nativeElement.focus();
    this.convenioService.Todos().subscribe(c => this.convenios = c);
  }


  salvar() {
    if (this.imagemPaciente != null)
      this.paciente.foto = this.imagemPaciente;

    this.activeModal.close(this.paciente);
  }

  fechar() {
    this.activeModal.close();
  }
}