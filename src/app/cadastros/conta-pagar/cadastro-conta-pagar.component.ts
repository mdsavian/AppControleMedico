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
import { LocalDataSource } from 'ng2-smart-table';
import * as tableDataPagamentos from './listagem-pagamentos-settings';
import {distinctUntilChanged, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { ETipoContaPagar } from '../../enums/ETipoContaPagar';
import { ModalCadastroFornecedorComponent } from '../fornecedor/modal-cadastro-fornecedor.component';
import { AppService } from '../../services/app.service';
import { ModalPagamentoComponent } from '../../shared/modal/modal-pagamento.component';
@Component({
  templateUrl: './cadastro-conta-pagar.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroContaPagarComponent implements OnInit, AfterViewInit {

  @ViewChild('fornecedorModel', { read: ElementRef, static: false }) private fornecedorModel: ElementRef;
  @ViewChild('tipoContaModel', { read: ElementRef, static: false }) private tipoContaModel: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valor: ElementRef;
  @ViewChild('numeroDocumento', { read: ElementRef, static: false }) private numeroDocumento: ElementRef;
  @ViewChild('numeroFatura', { read: ElementRef, static: false }) private numeroFatura: ElementRef;

  sourcePagamentos: LocalDataSource;
  settingsPagamentos = tableDataPagamentos.settingsPagamentos;
  mensagemErro: string;
  util = new Util();
  dataEmi = this.util.dataParaString(new Date());
  dataVenc:string;
  id: string;
  contaPagar = new ContaPagar();
  tipoConta = ETipoContaPagar[1].toString();
  estados = Estados;
  paises = Paises;
  fornecedorSelecionado: string;
  nomeFornecedores: Array<string>;
  fornecedores: Array<Fornecedor> = [];
  fornecedor: Fornecedor;
  falhaNaBusca: boolean;
  tiposConta = ETipoContaPagar;

  constructor(private fornecedorService: FornecedorService, private appService: AppService, private contaPagarService: ContaPagarService, private route: ActivatedRoute, private enderecoService: EnderecoService, private router: Router, private modalService: NgbModal) {
  }

  adicionaFornecedor() {
    var modalNovoFornecedor = this.modalService.open(ModalCadastroFornecedorComponent)

    modalNovoFornecedor.result.then((fornecedor: Fornecedor) => {
      if (fornecedor != null && fornecedor.razaoSocial != '') {
        var fornecedorExistente = this.fornecedores.find(c => c.razaoSocial == fornecedor.razaoSocial);
        if (fornecedorExistente != null) {
          this.contaPagar.fornecedorId = fornecedorExistente.id;
        }
        else {
          this.fornecedores.push(fornecedor);
          this.nomeFornecedores.push(fornecedor.razaoSocial);
          this.fornecedorSelecionado = fornecedor.razaoSocial;

          this.fornecedorService.salvar(fornecedor).subscribe(fornecedorCadastrado => {
            this.contaPagar.fornecedorId = fornecedorCadastrado.id;
          });
        }
      }
    }).catch((error) => { })

  }

  ngAfterViewInit(): void {
    this.fornecedorService.Todos().subscribe(fornec => {
      this.fornecedores = fornec;

      if (!this.util.isNullOrWhitespace(this.contaPagar.fornecedorId))
        this.fornecedorSelecionado = this.fornecedores.find(c => c.id == this.contaPagar.fornecedorId).razaoSocial;

      this.nomeFornecedores = new Array<string>();
      this.fornecedores.forEach(d => {
        this.nomeFornecedores.push(d.razaoSocial);
      });
    });

    if (this.fornecedorModel != null) {
      this.fornecedorModel.nativeElement.focus();
    }
    
    if (this.contaPagarService.contaPagar != null) {
      if (this.fornecedorModel != null)
        this.fornecedorModel.nativeElement.setAttribute('readonly', true);

      if (this.tipoContaModel != null)
        this.tipoContaModel.nativeElement.setAttribute('readonly', true);

      if (this.valor != null && this.util.hasItems(this.contaPagar.pagamentos))
        this.valor.nativeElement.setAttribute('readonly', true);

      if (this.numeroDocumento != null && !this.util.isNullOrWhitespace(this.contaPagar.numeroDocumento))
        this.numeroDocumento.nativeElement.setAttribute('readonly', true);
        
      if (this.numeroFatura != null && this.contaPagar.numeroFatura > 0)
        this.numeroFatura.nativeElement.setAttribute('readonly', true);
    }
  }

  public ngOnInit(): void {
    if (this.contaPagarService.contaPagar != null) {
      this.contaPagar = this.contaPagarService.contaPagar;
      this.dataEmi = this.contaPagar.dataEmissao;
      this.dataVenc = this.contaPagar.dataVencimento;
      this.sourcePagamentos = new LocalDataSource(this.contaPagar.pagamentos);

    }
    else {
      this.contaPagar.usuarioId = this.appService.retornarUsuarioCorrente().id;
      this.contaPagar.clinicaId = this.appService.retornarClinicaCorrente().id;
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
    var fornecedor = this.fornecedores.find(c => c.razaoSocial === item.item);
    if (fornecedor != null) {
      console.log(fornecedor);
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

  selecionaTipoConta(value: string) {
    this.contaPagar.tipoContaPagar = ETipoContaPagar[value];
  }

  adicionarPagamento()
  {
    this.modalService.open(ModalPagamentoComponent);
  }
  public salvar(): void {
    this.contaPagarService.salvar(this.contaPagar).subscribe(
      data => {
        this.router.navigate(["listagem/listagemcontapagar"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

      }
    )
  }
}
