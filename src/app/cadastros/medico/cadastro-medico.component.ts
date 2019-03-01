import { Component, OnInit } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { DragulaService } from 'ng2-dragula';
import { ConvenioMedicoService } from '../../services/convenioMedico.service';
import { ConvenioMedico } from '../../modelos/convenioMedico';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss'],

})

export class CadastroMedicoComponent implements OnInit {
  estados = Estados;
  
  convenios: Array<Convenio> = [];
  conveniosMedico: Array<Convenio> = [];

  public ngOnInit(): void {

    var id = this.route.snapshot.paramMap.get('id');
    
    if (id != null) {
      this.medicoService.buscarPorId(id).subscribe(dado => {
        this.medico = dado;
        this.conveniosMedico = dado.convenios;
        console.log("convenios medico: " + this.conveniosMedico);
      });
    }

    this.convenioService.Todos().subscribe(dados => {
      this.convenios = dados;
      this.tratarConvenio(dados, false);
      console.log("convenios " + this.convenios);
      
    });     
  }

  tratarConvenio(dados,medico:boolean)
  {
    dados.forEach(dado => {
      if (medico)
        this.conveniosMedico.push(dado.nomeConvenio) 
      else
        this.convenios.push(dado.nomeConvenio) ;
    });
  }

  data: NgbDate = new NgbDate(1901, 1, 1);
  public many2: Array<string> = ['Explore', 'them'];
  medicoId: string;

  constructor(private medicoService: MedicoService, dragulaService: DragulaService, private convenioService :ConvenioService,
    private convenioMedicoService: ConvenioMedicoService, private route: ActivatedRoute, private router: Router) {

      dragulaService.createGroup('PERSON', {
        copy: (el, source) => {
          return source.id === 'convenios';
        },
        copyItem: (convenio: Convenio) => {
          return new Convenio(convenio.nomeConvenio,convenio.diasRetorno, convenio.id);          
        },
        accepts: (el, target, source, sibling) => {
          // To avoid dragging from right to left container
          return target.id !== 'conveniosMedico';
        }
      });
  }
  medico: Medico = {
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm: "", convenios: new Array<Convenio>()
  };

  public onSubmit(): void {
    this.medico.dataNascimento = new Util().converteData(this.data);
    console.log("convenios: " + this.convenios);
    console.log("convenios medico: " + this.conveniosMedico);

    // this.medicoService.salvar(this.medico).subscribe(
    //   data => {
    //     this.router.navigate(["listagem/listagemmedico"]);
    //   },
    //   error => {
    //     //show modal erro
    //   }
    // )
  }

  public buscaConvenios() {
    var convenios: ConvenioMedico[];
    //if (this.medico.id != "")
    var xx = this.convenioMedicoService.ConvenioMedico(this.medico.id).subscribe(c => {
      convenios = c;
      console.log("opa " + convenios);
      console.log("OLHA O RETORNO " + c)

      convenios.forEach(element => {
        console.log(element.id);

      });
    }, error => { console.log(error.error) });

  }
}
