import { Component, OnInit } from '@angular/core';
import { Paciente } from "../../modelos/paciente";
import { Estados } from "../../enums/estados";
import { UsuarioService } from "../../services/usuario.service"

@Component({
  templateUrl: './cadastro-paciente.component.html'
})
export class CadastroPacienteComponent implements OnInit {
  estados = Estados;
  public ngOnInit(): void {
  }

  constructor(private usuarioService: UsuarioService) {
    this.buscaUsuarios();
  }
  paciente: Paciente = {
    id : "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, nomeConjugue: "", nomeMae: "",
    nomePai: "", ocupacao: "", tipoSanguineo: 1, telefone: "", celular: "", email: "", aceitaReceberSms: true, responsavel: "",
    cep: "", endereco: "", numero: "", estadoCivil: 0, complemento: "", bairro: "", cidade: "", uf: "", convenio: "",
    numeroCartao: 1, cartaoNacionalSaude: 1, dataValidadeCartao: new Date('01/01/0001'), imagem: ""
  };

  public onSubmit(): void {
    console.log(this.paciente.nomeCompleto);

  }

  buscaUsuarios() {
    var usuariosData: Array<any>;
    this.usuarioService.get().subscribe((data: any) => {
      usuariosData = data;
      console.log(usuariosData)
    })
    //  let promise = new Promise((resolve, reject) => {
    //    this.usuarioService.get().toPromise().then(
    //      (data:any) => {
    //       usuariosData = data;
    //        console.log(usuariosData);
    //        resolve();
    //   } )
    //  })
  }


}
