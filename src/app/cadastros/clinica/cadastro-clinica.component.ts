import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Clinica } from '../../modelos/clinica';
import { ClinicaService } from '../../services/clinica.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoService } from '../../services/endereco.service';
import { Estados } from "../../enums/estados";


@Component({
  templateUrl: './cadastro-clinica.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroClinicaComponent implements OnInit, AfterViewInit {

  @ViewChild('razaoSocial', { read: ElementRef, static:false}) private razaoSocial: ElementRef;
  @ViewChild('numero', { read: ElementRef, static:false}) private numero: ElementRef;

  estados = Estados;
  mensagemErro: string;
  clinica: Clinica = new Clinica();

  constructor(private enderecoService:EnderecoService,private clinicaService: ClinicaService, private route: ActivatedRoute, private router: Router, 
    private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.razaoSocial != null)
      this.razaoSocial.nativeElement.focus();
  }

  public ngOnInit(): void {
    if (this.clinicaService.clinica) {
      this.clinica = this.clinicaService.clinica;
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

  public onSubmit(): void {
    this.clinicaService.salvar(this.clinica).subscribe(
      data => {
        this.router.navigate(["listagem/listagemclinica"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
