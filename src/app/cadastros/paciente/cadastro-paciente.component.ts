import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ɵCodegenComponentFactoryResolver } from '@angular/core';

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
import { LoginService } from '../../services/login.service';
import { MedicoService } from '../../services/medico.service';

import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { ModalAdicionaConvenioComponent } from '../../shared/modal/modal-adiciona-convenio.component';

import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroPacienteComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef }) private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;

  paciente: Paciente = {
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, nomeConjugue: "", nomeMae: "",
    nomePai: "", ocupacao: "", tipoSanguineo: 1, telefone: "", celular: "", email: "", aceitaReceberSms: true, responsavel: "",
    cep: "", endereco: "", numero: "", estadoCivil: 0, complemento: "", bairro: "", cidade: "", uf: "", convenio: new Convenio("", 0, ""),
    numeroCartao: 1, cartaoNacionalSaude: 1, dataValidadeCartao: new Date('01/01/0001'), imagem: "", tipoPlano: "", diaGestacao: '', semanaGestacao: ''
  };

  semanasGestacao = ESemanasGestacao;
  diasGestacao = EDiasGestacao;
  convenioId: string;
  convenios: Array<Convenio> = [];
  util = new Util();
  estados = Estados;
  dataNasci: string = "01/01/1901"
  dataValidade: string = "01/01/1901"
  nomeConvenios: Array<string>;
  falhaNaBusca: boolean;
  convenioSelecionado: string;
  medico: Medico;

  constructor(public router: Router, private pacienteService: PacienteService, private enderecoService: EnderecoService,
    private convenioService: ConvenioService, private route: ActivatedRoute, private modalService: NgbModal,

    private loginService: LoginService, private medicoService: MedicoService) {
  }

  public ngAfterViewInit(): void {
    this.nomeCompleto.nativeElement.focus();
  }

  public ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.pacienteService.buscarPorId(id).subscribe(dado => {
        this.paciente = dado;
        this.dataNasci = this.util.dataParaString(dado.dataNascimento);
        this.dataValidade = this.util.dataParaString(dado.dataValidadeCartao);

        if (this.paciente.convenio != null) {
          this.convenioId = this.paciente.convenio.id;
          this.convenioSelecionado = this.paciente.convenio.nomeConvenio;
        }
      });
    }

    var usuario = this.loginService.usuarioCorrenteValor;

    if (usuario.medicoId != "") {
      this.medicoService.buscarMedicoUsuario(usuario).subscribe(medicoRetorno => this.medico = medicoRetorno);
    }

    this.convenioService.Todos().subscribe(dados => {
      this.convenios = dados;
      this.nomeConvenios = new Array<string>();
      dados.forEach(d => {
        this.nomeConvenios.push(d.nomeConvenio);
      });
    });
  }

  public adicionaConvenio(): void {

    var modal = this.modalService.open(ModalAdicionaConvenioComponent, { windowClass: "modal-holder" });

    modal.result.then((convenio) => {
      if (convenio != undefined && convenio.descricao != '') {

        var convenioExistente = this.convenios.find(c => c.nomeConvenio == convenio.descricao);
        if (convenioExistente != null) {
          this.paciente.convenio = convenioExistente;
          this.convenioSelecionado = convenioExistente.nomeConvenio;
        }
        else {
          this.convenioService.salvar(convenio).subscribe(conenioCadastrado => {
            this.paciente.convenio = conenioCadastrado;
            this.convenioSelecionado = conenioCadastrado.nomeConvenio;
          })
        }
      }
    }).catch((error) => { })
  }

  public trocaConvenio(e) {
    this.paciente.convenio = this.convenios.find(c => c.id === this.convenioId);
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

  ExibeAbaEspecialidade(especialidade: string): boolean {

    if (this.medico != null && this.medico.especialidade != null) {
      return this.medico.especialidade.descricao.includes(especialidade);
    }

    return false;
  }
  buscaConvenio = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.falhaNaBusca = this.nomeConvenios.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.nomeConvenios.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  selecionaConvenio(item) {
    var convenio = this.convenios.find(c => c.nomeConvenio === item.item);
    if (convenio != null)
      this.paciente.convenio = convenio;
  }

  public formataData(e): void {
    if (e.target.id == "dataNascimento")
      this.paciente.dataNascimento = this.util.stringParaData(e.target.value);
    else
      this.paciente.dataValidadeCartao = this.util.stringParaData(e.target.value);
  }

  public onSubmit(): void {
    this.pacienteService.salvar(this.paciente).subscribe(
      data => {
        this.router.navigate(["listagem/listagempaciente"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }
}