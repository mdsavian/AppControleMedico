import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ContaPagar } from '../../modelos/contaPagar';
import { ContaPagarService } from '../../services/contaPagar.service';
import { FornecedorService } from '../../services/fornecedor.service';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estados } from "../../enums/estados";
import { Paises } from "../../enums/paises";
import { Fornecedor } from '../../modelos/fornecedor';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { ETipoContaPagar } from '../../enums/ETipoContaPagar';
@Component({
  templateUrl: './cadastro-conta-pagar.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroContaPagarComponent implements OnInit, AfterViewInit {

   @ViewChild('fornecedorModel', { read: ElementRef, static: false }) private fornecedorModel: ElementRef;
  // @ViewChild('nomeFantasia', { read: ElementRef, static: false }) private nomeFantasia: ElementRef;
  // @ViewChild('cnpj', { read: ElementRef, static: false }) private cnpj: ElementRef;
  // @ViewChild('numero', { read: ElementRef, static: false }) private numero: ElementRef;

  mensagemErro: string;
  util = new Util();
  dataEmi = this.util.dataParaString(new Date());
  id: string;
  contaPagar = new ContaPagar();
  estados = Estados;
  paises = Paises;
  fornecedorSelecionado: string;
  nomeFornecedores: Array<string>;
  fornecedores: Array<Fornecedor> = [];
  fornecedor: Fornecedor;
  falhaNaBusca: boolean;
  tiposConta = ETipoContaPagar;

  constructor(private fornecedorService: FornecedorService, private contaPagarService: ContaPagarService, private route: ActivatedRoute, private enderecoService: EnderecoService, private router: Router, private modalService: NgbModal) {
  }

  adicionaFornecedor() {
    // var modalNovoFornecedor = this.modalService.open(ModalCadastroFornecedorComponent, { size: 'lg' })

    // modalNovoFornecedor.result.then((fornecedor: Fornecedor) => {
    //   if (fornecedor != null && fornecedor.nomeCompleto != '') {

    //     console.log(fornecedor);
    //     var fornecedorExistente = this.fornecedors.find(c => c.nomeCompleto == fornecedor.nomeCompleto);
    //     if (fornecedorExistente != null) {
    //       this.agendamento.fornecedor = fornecedorExistente;
    //       this.agendamento.fornecedorId = fornecedorExistente.id;
    //     }
    //     else {

    //       this.fornecedors.push(fornecedor);
    //       this.nomeFornecedors.push(fornecedor.nomeCompleto);
    //       this.fornecedorSelecionado = fornecedor.nomeCompleto;

    //       this.fornecedorService.salvar(fornecedor).subscribe(fornecedorCadastrado => {
    //         if (fornecedor.foto != null)
    //           this.uploadService.salvarImagem(fornecedor.foto, "fornecedor", fornecedorCadastrado.id);
    //         this.agendamento.fornecedor = fornecedorCadastrado;
    //         this.agendamento.fornecedorId = fornecedorCadastrado.id;
    //       });
    //     }
    //   }
    // }).catch((error) => { })

  }

  ngAfterViewInit(): void {
    this.fornecedorService.Todos().subscribe(fornec => {
      this.fornecedores = fornec;
      this.nomeFornecedores = new Array<string>();
      this.fornecedores.forEach(d => {
        this.nomeFornecedores.push(d.razaoSocial);
      });
    })
    if (this.fornecedorModel != null) {
      this.fornecedorModel.nativeElement.focus();
      if (this.contaPagarService.contaPagar != null)
        this.fornecedorModel.nativeElement.setAttribute('readonly', true);
    }

    // if (this.nomeFantasia != null && this.contaPagarService.contaPagar != null)
    //   this.nomeFantasia.nativeElement.setAttribute('readonly', true);

    // if (this.cnpj != null && this.contaPagarService.contaPagar != null)
    //   this.cnpj.nativeElement.setAttribute('readonly', true);
  }

  public ngOnInit(): void {
    if (this.contaPagarService.contaPagar != null) {
      this.contaPagar = this.contaPagarService.contaPagar;
    }
    else
    {
      this.contaPagar.tipoContaPagar = ETipoContaPagar["Lançamento Manual"];
      this.contaPagar.dataEmissao = this.util.dataParaString(new Date());
    }
  }

  buscaFornecedor = (text$: Observable<string>) =>
    text$.pipe(
      distinctUntilChanged(),
      map(term => {

        if (this.nomeFornecedores == null) {
          this.falhaNaBusca = true;
          return false;
        }

        if (term.length < 2) {
          this.falhaNaBusca = true;
          return false;
        }
        this.falhaNaBusca = this.nomeFornecedores.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return this.nomeFornecedores.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  selecionaFornecedor(item) {
    var fornecedor = this.fornecedores.find(c => c.nomeCompleto === item.item);
    if (fornecedor != null) {
      this.fornecedor = fornecedor;
      this.contaPagar.fornecedorId = fornecedor.id;
    }

  }

  public formataData(e): void {
    if (e.target.id == "dataVencimento" && e.target.value.length == 10) {
      this.contaPagar.dataVencimento = e.target.value;
    }
    if (e.target.id == "dataEmissao" && e.target.value.length == 10) {
      this.contaPagar.dataEmissao = e.target.value;
    }
  }

  public salvar(): void {
    this.contaPagarService.salvar(this.contaPagar).subscribe(
      data => {
        this.router.navigate(["listagem/listagemcontaPagar"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
