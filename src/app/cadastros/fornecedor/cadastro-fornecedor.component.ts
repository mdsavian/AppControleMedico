import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Fornecedor } from '../../modelos/fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estados } from "../../enums/estados";
import { Paises } from "../../enums/paises";

@Component({
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroFornecedorComponent implements OnInit, AfterViewInit {

  @ViewChild('razaoSocial', { read: ElementRef, static: false }) private razaoSocial: ElementRef;
  @ViewChild('nomeFantasia', { read: ElementRef, static: false }) private nomeFantasia: ElementRef;
  @ViewChild('cnpj', { read: ElementRef, static: false }) private cnpj: ElementRef;
  @ViewChild('numero', { read: ElementRef, static: false }) private numero: ElementRef;

  mensagemErro: string;
  id: string;
  fornecedor = new Fornecedor();
  estados = Estados;
  paises = Paises;

  constructor(private fornecedorService: FornecedorService, private route: ActivatedRoute, private enderecoService: EnderecoService, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    if (this.razaoSocial != null) {
      this.razaoSocial.nativeElement.focus();
      if (this.fornecedorService.fornecedor != null)
        this.razaoSocial.nativeElement.setAttribute('readonly', true);
    }
    
    if (this.nomeFantasia != null && this.fornecedorService.fornecedor != null)
      this.nomeFantasia.nativeElement.setAttribute('readonly', true);

    if (this.cnpj != null && this.fornecedorService.fornecedor != null)
      this.cnpj.nativeElement.setAttribute('readonly', true);
  }

  public ngOnInit(): void {
    if (this.fornecedorService.fornecedor != null) {
      this.fornecedor = this.fornecedorService.fornecedor;
    }
  }

  public buscaCep() {
    if (this.fornecedor.cep != "") {
      console.log(this.fornecedor.cep);
      this.enderecoService.buscarEndereco(this.fornecedor.cep).subscribe(c => {
        this.fornecedor.cep = c.cep;
        this.fornecedor.bairro = c.bairro;
        this.fornecedor.endereco = c.rua;
        this.fornecedor.complemento = c.complemento;
        this.fornecedor.uf = c.uf;
        this.fornecedor.cidade = c.cidade;
        this.numero.nativeElement.focus();
      });
    }
  }

  public salvar(): void {
    this.fornecedorService.salvar(this.fornecedor).subscribe(
      data => {
        this.router.navigate(["listagem/listagemfornecedor"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
