import { Component, OnInit, OnDestroy } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss'],

})

export class CadastroMedicoComponent implements OnInit,OnDestroy {
  estados = Estados;

  medico: Medico = {
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm: "", convenios: new Array<Convenio>()
  };

  convenios: Array<Convenio> = [];

  public ngOnDestroy(): void {
    this.dragulaService.destroy("CONVENIOS");
  }

  public ngOnInit(): void {

    var id = this.route.snapshot.paramMap.get('id');

    
    if (id != null) {
      this.medicoService.buscarPorId(id).subscribe(dado => {
        this.medico = dado;
      });

      this.convenioService.TodosFiltrandoMedico(id).subscribe(dados => {
        this.convenios = dados;
      });
    }
    else
    {
      this.convenioService.Todos().subscribe(dados => {
        this.convenios = dados;
      });
    }

    console.log(this.medico.dataNascimento)
  }

  constructor(private medicoService: MedicoService, private dragulaService: DragulaService, private convenioService: ConvenioService,
    private route: ActivatedRoute, private router: Router) {

    this.dragulaService.createGroup('CONVENIOS', {
      copy: (el, source) => {
        return source.id === 'convenios';
      },
      copyItem: (convenio: Convenio) => {
        return new Convenio(convenio.nomeConvenio, convenio.diasRetorno, convenio.id);
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'conveniosMedico';
      }
    });
  }

  public onSubmit(): void {

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
