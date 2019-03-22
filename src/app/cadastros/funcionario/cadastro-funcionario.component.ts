import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Funcionario } from "../../modelos/funcionario";
import { Estados } from "../../enums/estados";
import { FuncionarioService } from "../../services/funcionario.service"
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from '../../uteis/Util';
import { EnderecoService } from '../../services/endereco.service';
import { OficioService } from '../../services/oficio.service';
import { Oficio } from '../../modelos/oficio';
import { Usuario } from '../../modelos/usuario';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


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


  oficioEscolhido: string = '';
  oficios = new Array<Oficio>();
  nomeOficios = new Array<string>();
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
      });
    }

    this.oficioService.Todos().subscribe(c => {
      this.oficios = c;
      c.forEach(d => this.nomeOficios.push(d.descricao));

    })
  }

  constructor(public router: Router, private funcionarioService: FuncionarioService, private enderecoService: EnderecoService, private oficioService: OficioService, private route: ActivatedRoute) {
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
  } s


  procuraOficio = (text$: Observable<string>) => {
    if (this.nomeOficios.length > 0) {
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? []
          : this.oficios.filter(v => v.descricao.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      )
    }
  }

  public onSubmit(): void {
    this.funcionarioService.salvar(this.funcionario).subscribe(
      data => {
        this.router.navigate(["listagem/listagemfuncionario"]);
      },
      error => {
        //show modal erro
      }
    )
  }
}