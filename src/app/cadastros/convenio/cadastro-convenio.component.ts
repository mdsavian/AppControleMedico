import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../modelos/convenio';
import { ConvenioService } from '../../services/convenio.service';

@Component({
  templateUrl: './cadastro-convenio.component.html',
  styleUrls: ['./cadastro-convenio.component.scss'],

})


export class CadastroConvenioComponent implements OnInit {
  public ngOnInit(): void {

  }
  constructor(private convenioService: ConvenioService) {
  }

  convenio: Convenio = {
    id: "", nomeConvenio: "", diasRetorno: 0, medicoId: ""
  };

  public onSubmit(): void {
    this.convenioService.salvar(this.convenio).subscribe(
      data => {
        console.log("id = " + data.id);
        // this.router.navigate(["cadastros/cadastropaciente"]);
      },
      error => {

      }
    )
  }

}
