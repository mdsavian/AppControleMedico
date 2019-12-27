import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Clinica } from '../../modelos/clinica';
import { ClinicaService } from '../../services/clinica.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoService } from '../../services/endereco.service';
import { Estados } from "../../enums/estados";
import { UploadService } from '../../services/upload.service';
import { Util } from '../../uteis/Util';

@Component({
  templateUrl: './cadastro-clinica.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroClinicaComponent implements OnInit, AfterViewInit {

  @ViewChild('razaoSocial', { read: ElementRef, static: false }) private razaoSocial: ElementRef;
  @ViewChild('cnpj', { read: ElementRef, static: false }) private cnpj: ElementRef;
  @ViewChild('numero', { read: ElementRef, static: true }) private numero: ElementRef;
  @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;

  estados = Estados;
  mensagemErro: string;
  clinica: Clinica = new Clinica();
  imageUrl: any = '../../../assets/images/fotoCadastro.jpg';
  imagemClinica: any;
  util = new Util();

  constructor(private uploadService: UploadService, private enderecoService: EnderecoService, private clinicaService: ClinicaService, private route: ActivatedRoute, private router: Router,
    private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.razaoSocial != null && this.clinica.id) {
      this.razaoSocial.nativeElement.focus();
      this.razaoSocial.nativeElement.setAttribute('readonly', true);
    }

    if (this.cnpj != null && this.clinica.id)
      this.cnpj.nativeElement.setAttribute('readonly', true);

  }

  public ngOnInit(): void {
    if (this.clinicaService.clinica) {
      this.clinica = this.clinicaService.clinica;
      if (!this.util.isNullOrWhitespace(this.clinica.logoId))
        this.downloadFoto();
    }
  }

  public buscaCep() {
    if (this.clinica.cep != "") {
      this.enderecoService.buscarEndereco(this.clinica.cep).subscribe(c => {
        this.clinica.cep = c.cep;
        this.clinica.bairro = c.bairro;
        this.clinica.endereco = c.rua;
        this.clinica.complemento = c.complemento;
        this.clinica.uf = c.uf;
        this.clinica.cidade = c.cidade;
        this.numero.nativeElement.focus();
      });
    }
  }


  importarArquivo() {
    this.fileInput.nativeElement.click();
  }

  changefile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.imageUrl = e.target['result'];
        this.imagemClinica = this.util.dataURIparaBlob(this.imageUrl.split(',')[1]);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public downloadFoto() {
    this.uploadService.downloadImagem(this.clinicaService.clinica.id, "clinica").subscribe(byte => {
      this.imageUrl = "data:image/jpeg;base64," + byte['value'];
    });
  }

  public salvar(): void {
    this.clinicaService.clinica = null;
    this.clinicaService.salvar(this.clinica).subscribe(
      data => {
        if (this.imagemClinica != null) {
          this.uploadService.salvarImagem(this.imagemClinica, "clinica", data.id).subscribe(c => {
            this.router.navigate(["listagem/listagemclinica"]);
          });
        }
        else
          this.router.navigate(["listagem/listagemclinica"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
