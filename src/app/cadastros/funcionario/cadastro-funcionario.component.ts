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

import { Util } from '../../uteis/Util';
import { Oficio } from '../../modelos/oficio';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaOficioComponent } from '../../shared/modal/modal-adiciona-oficio.component';

@Component({
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroFuncionarioComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef }) private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;

  funcionario: Funcionario = {
    id: "", nomeCompleto: "", cpf: "", dataAdmissao: new Date('01/01/0001'), dataDemissao: new Date('01/01/0001'), dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1,
    celular: "", email: "", cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", oficio: new Oficio(), imagem: "", usuario: new Usuario(), permissaoAdministrador: false, visualizaValoresRelatorios: false
  };

  oficios = new Array<Oficio>();
  nomeOficios: Array<string>;
  falhaNaBusca: boolean;
  oficioSelecionado: string;
  util = new Util();
  estados = Estados;
  dataNasci: string = "01/01/1901"
  dataAdmis: string = "01/01/1901"
  dataDemis: string = "01/01/1901"

  public ngAfterViewInit(): void {
    this.nomeCompleto.nativeElement.focus();
  }

  public ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.funcionarioService.buscarPorId(id).subscribe(dado => {
        this.funcionario = dado;
        this.dataNasci = this.util.dataParaString(dado.dataNascimento);
        this.dataAdmis = this.util.dataParaString(dado.dataAdmissao);
        this.dataDemis = this.util.dataParaString(dado.dataDemissao);
        this.oficioSelecionado = this.funcionario.oficio.descricao;
      });
    }

    this.oficioService.Todos().subscribe(c => {
      this.oficios = c;
      this.nomeOficios = new Array<string>();
      c.forEach(d => {
        this.nomeOficios.push(d.descricao);
      });
    })
  }

  constructor(public router: Router, private funcionarioService: FuncionarioService, private enderecoService: EnderecoService,
    private oficioService: OficioService, private route: ActivatedRoute, private modalService: NgbModal) {
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
    this.funcionario.oficio = this.oficios.find(c => c.descricao === item.item);
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

    var modal = this.modalService.open(ModalAdicionaOficioComponent, { windowClass: "modal-holder" });

    modal.result.then((oficio) => {
      if (oficio != '') {
        
        var oficioExistente = this.oficios.find(c => c.descricao == oficio.descricao);
        if (oficioExistente != null) {
          this.funcionario.oficio = oficioExistente;
          this.oficioSelecionado = oficioExistente.descricao;
        }
        else {
          this.oficioService.salvar(oficio).subscribe(oficioCadastrado => {
            this.funcionario.oficio = oficioCadastrado;
            this.oficioSelecionado = oficioCadastrado.descricao;
          })
        }
      }
    });    
  }

  public onSubmit(): void {
    this.funcionarioService.salvar(this.funcionario).subscribe(
      data => {
        this.router.navigate(["listagem/listagemfuncionario"]);
      },
      error => {
        console.log(error);
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }
}