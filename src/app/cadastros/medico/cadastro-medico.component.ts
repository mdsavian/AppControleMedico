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

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss'],

})


export class CadastroMedicoComponent implements OnInit {
  estados = Estados;
  public ngOnInit(): void {    

    this.route.params.subscribe(params=> {
      if(params['id'] != ""){
        this.medicoService.buscarPorId(params['id']).subscribe(dado=> {
          this.medico = dado;
        });
      }
    });

    
  }
  data : NgbDate = new NgbDate(1901,1,1);  
  public many2: Array<string> = ['Explore', 'them'];
  medicoId:string;

  constructor(private medicoService: MedicoService, private dragulaService : DragulaService, 
    private convenioMedicoService:ConvenioMedicoService,private route: ActivatedRoute, private router :Router) {
    
  }
  medico: Medico = {
    id : "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm : "", convenios: new Array<ConvenioMedico>()
  };

  public onSubmit(): void {
    this.medico.dataNascimento = new Util().converteData(this.data);
    this.medicoService.salvar(this.medico).subscribe(
      data=> {
        this.router.navigate(["listagem/listagemmedico"]);
      },
      error=>
      {
        //show modal erro
      }
    )
  }

  public buscaConvenios()
  {
    var convenios :ConvenioMedico[];
    //if (this.medico.id != "")
      var xx = this.convenioMedicoService.ConvenioMedico(this.medico.id).subscribe(c=> {convenios = c;
        console.log("opa " + convenios);
        console.log("OLHA O RETORNO " + c)
      
        convenios.forEach(element => {
          console.log(element.id);
          
        });
      },error=> {console.log(error.error)});

      
      
  }

  

}
