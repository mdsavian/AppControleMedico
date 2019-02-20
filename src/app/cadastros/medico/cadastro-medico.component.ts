import { Component, OnInit } from '@angular/core';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';

@Component({
  templateUrl: './cadastro-medico.component.html'
})
export class CadastroMedicoComponent implements OnInit {
  estados = Estados;
  public ngOnInit(): void {
  }

  constructor(private medicoService: MedicoService) {
  }
  medico: Medico = {
    id : "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "",
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm : "" 
  };

  public onSubmit(): void {
    this.medicoService.salvar(medico);
  }


}
