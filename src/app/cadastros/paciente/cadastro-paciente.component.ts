import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Paciente } from "../../modelos/paciente";
import { Estados } from "../../enums/estados";
import { PacienteService } from "../../services/paciente.service"
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from '../../uteis/Util';
import { EnderecoService } from '../../services/endereco.service';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';

@Component({
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroPacienteComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto') private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;

  paciente: Paciente = {
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, nomeConjugue: "", nomeMae: "",
    nomePai: "", ocupacao: "", tipoSanguineo: 1, telefone: "", celular: "", email: "", aceitaReceberSms: true, responsavel: "",
    cep: "", endereco: "", numero: "", estadoCivil: 0, complemento: "", bairro: "", cidade: "", uf: "", convenio: new Convenio("", 0, ""),
    numeroCartao: 1, cartaoNacionalSaude: 1, dataValidadeCartao: new Date('01/01/0001'), imagem: "", tipoPlano:""
  };

  convenioId:string;
  convenios: Array<Convenio> = [];
  util = new Util();
  estados = Estados;
  dataNasci: string = "01/01/1901"
  dataValidade: string = "01/01/1901"

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
        this.convenioId = this.paciente.convenio.id;
      });
    }

    this.convenioService.Todos().subscribe(dados => {
      this.convenios = dados;
    });

  }

  constructor(public router: Router, private pacienteService: PacienteService, private enderecoService: EnderecoService,
    private convenioService: ConvenioService, private route: ActivatedRoute) {
  }

  public trocaConvenio(e) {

    this.paciente.convenio = this.convenios.find(c=> c.id === this.convenioId);   
    
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
        //show modal erro
      }
    )
  }
}