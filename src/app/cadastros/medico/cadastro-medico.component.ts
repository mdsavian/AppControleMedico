import { Component, OnInit } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { DragulaService } from 'ng2-dragula';
import { ConvenioMedicoService } from '../../services/convenioMedico.service';
import { ConvenioMedico } from '../../modelos/convenioMedico';

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss'],

})


export class CadastroMedicoComponent implements OnInit {
  estados = Estados;
  public ngOnInit(): void {

  }
  data : NgbDate = new NgbDate(1901,1,1);  
  public many2: Array<string> = ['Explore', 'them'];


  constructor(private medicoService: MedicoService, private dragulaService : DragulaService, private convenioMedicoService:ConvenioMedicoService) {
    this.buscaConvenios();
  }
  medico: Medico = {
    id : "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm : "", convenios: new Array<ConvenioMedico>
  };

  public onSubmit(): void {
    console.log("data" + this.medico.dataNascimento);
    this.medico.dataNascimento = new Util().converteData(this.data);
    this.medicoService.salvar(this.medico).subscribe(
      data=> {
        console.log("id = " + data.id);
        // this.router.navigate(["cadastros/cadastropaciente"]);
      },
      error=>
      {
        
      }
    )
  }

  public buscaConvenios()
  {
    var xx = this.convenioMedicoService.ConvenioMedico(this.medico.id).subscribe(c=> console.log(c));
    console.log(xx);
  }

  

}
