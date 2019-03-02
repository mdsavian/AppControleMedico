import { Component, OnInit, OnDestroy } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss'],

})

export class CadastroMedicoComponent implements OnInit {
  estados = Estados;
  data: NgbDate = new NgbDate(1901, 1, 1);

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
        // To avoid dragging from right to left container
        return target.id !== 'conveniosMedico';
      }
    });
  }

  public onSubmit(): void {
    this.medico.dataNascimento = new Util().converteData(this.data);
    console.log("convenios: " + this.convenios);
    console.log("convenios medico: " + this.medico.convenios);

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
