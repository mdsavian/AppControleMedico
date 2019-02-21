import { Component, OnInit } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { first } from 'rxjs/operators';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-medico.component.html'
})


export class CadastroMedicoComponent implements OnInit {
  estados = Estados;
  public ngOnInit(): void {
  }
  data : NgbDate = new NgbDate(1901,1,1);  


  constructor(private medicoService: MedicoService) {
  }
  medico: Medico = {
    id : "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm : "" 
  };

  public onSubmit(): void {
    console.log("data" + this.medico.dataNascimento);
    this.medico.dataNascimento = this.converteData(this.data);
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

  public converteData(data : NgbDate): Date
  {
    var dataNova:Date = new Date(data.year, data.month, data.day);

    return dataNova;
    

  }

}
