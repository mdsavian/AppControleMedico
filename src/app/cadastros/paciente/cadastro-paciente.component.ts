import { Component, OnInit } from '@angular/core';
import { Paciente } from "../../modelos/paciente";
import { Estados } from "../../enums/estados";
import { PacienteService } from "../../services/paciente.service"
import { Router } from '@angular/router';

@Component({
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})
export class CadastroPacienteComponent implements OnInit {
  
  estados = Estados;
  public ngOnInit(): void {
  }

  constructor(public router: Router, private pacienteService: PacienteService) {
  }

  paciente: Paciente = {
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, nomeConjugue: "", nomeMae: "",
    nomePai: "", ocupacao: "", tipoSanguineo: 1, telefone: "", celular: "", email: "", aceitaReceberSms: true, responsavel: "",
    cep: "", endereco: "", numero: "", estadoCivil: 0, complemento: "", bairro: "", cidade: "", uf: "", convenio: "",
    numeroCartao: 1, cartaoNacionalSaude: 1, dataValidadeCartao: new Date('01/01/0001'), imagem: ""
  };

  public onSubmit(): void {
    console.log("antes");
    var salvo = this.pacienteService.salvar(this.paciente).subscribe(data => {
      // console.log(data.id);
      // this.router.navigate(["cadastros/cadastropaciente"]);
    },
      erro => {
        // console.log("Ocorreu um erro");
      });
    }
}