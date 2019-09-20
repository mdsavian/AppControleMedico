import { Pessoa } from "./pessoa";
import { Oficio } from "./oficio";
import { Usuario } from "./usuario";
import { Clinica } from "./clinica";
import { Medico } from "./medico";

export class Funcionario extends Pessoa {

  constructor() {
    super();

    this.id = ""; this.nomeCompleto = ""; this.cpf = ""; this.dataAdmissao = new Date('01/01/0001'); this.dataDemissao = new Date('01/01/0001');
    this.dataNascimento = new Date('01/01/0001'); this.rg = ""; this.ativo = true; this.genero = 1; this.celular = ""; this.email = "";
    this.cep = ""; this.endereco = ""; this.oficioId = ""; this.usuarioId = "";
    this.numero = ""; this.complemento = ""; this.bairro = ""; this.cidade = ""; this.uf = ""; this.oficio = new Oficio(); this.
      imagem = ""; this.usuario = new Usuario(); this.permissaoAdministrador = false; this.visualizaAgenda = false;
  }

  oficioId: string;
  usuarioId: string;
  oficio: Oficio;
  usuario: Usuario;
  dataAdmissao: Date;
  dataDemissao: Date;
  permissaoAdministrador: boolean;
  visualizaAgenda: boolean;
  clinicasId: string[];
  clinicas: Clinica[];
  medicosId: string[];
  medicos: Medico[];
  fotoId:string;

}
