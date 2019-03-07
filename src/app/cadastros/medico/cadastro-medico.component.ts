import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';
import { Util } from '../../uteis/Util';
import { EnderecoService } from '../../services/endereco.service';


@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss', '../../cadastros/cadastros.scss'],

})

export class CadastroMedicoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('nomeCompleto') private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;
  
  estados = Estados;
  data: string = "01/01/1901"
  util = new Util();
  medico: Medico = {
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm: "", convenios: new Array<Convenio>()
  };

  public formataData(e): void {
    this.medico.dataNascimento = this.util.stringParaData(e.target.value);
  }
  convenios: Array<Convenio> = [];

  public ngAfterViewInit(): void {
    
    this.nomeCompleto.nativeElement.focus();

  }
  public ngOnDestroy(): void {
    this.dragulaService.destroy("CONVENIOS");
  }

  public ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.medicoService.buscarPorId(id).subscribe(dado => {
        this.medico = dado;
        this.data = this.util.dataParaString(dado.dataNascimento);
      });

      this.convenioService.TodosFiltrandoMedico(id).subscribe(dados => {
        this.convenios = dados;
      });
    }
    else {
      this.convenioService.Todos().subscribe(dados => {
        this.convenios = dados;
      });
    }
  }

  constructor(private medicoService: MedicoService, private enderecoService:EnderecoService, private dragulaService: DragulaService, private convenioService: ConvenioService,
    private route: ActivatedRoute, private router: Router) {

    this.dragulaService.createGroup('CONVENIOS', {
      copy: (el, source) => {
        console.log("opa copiando");
        return source.id === 'convenios';
      },
      copyItem: (convenio: Convenio) => {
        console.log("opa copiando");
        return new Convenio(convenio.nomeConvenio, convenio.diasRetorno, convenio.id);
      },
      accepts: (el, target, source, sibling) => {
        console.log(target.id, source.id, sibling.id)
        return target.id !== 'conveniosMedico';
      }
    });
  }

  public buscaCep()
  {
    this.enderecoService.buscarEndereco(this.medico.cep).subscribe(c=> {

      this.medico.cep = c.cep;
      this.medico.bairro = c.bairro;
      this.medico.endereco = c.rua;
      this.medico.complemento = c.complemento;
      this.medico.uf = c.uf;
      this.medico.cidade = c.cidade;

      this.numero.nativeElement.focus();

      console.log(c);
    })
  }

  public onSubmit(): void {
    console.log();
    this.medicoService.salvar(this.medico).subscribe(
      data => {
        this.router.navigate(["listagem/listagemmedico"]);
      },
      error => {
        //show modal erro
      }
    )
  }
}
