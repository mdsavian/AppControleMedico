import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";
import { Usuario } from "./usuario";
import { Especialidade } from "./especialidade";
import { ConfiguracaoAgenda } from "./configuracaoAgenda";
import { Clinica } from "./clinica";

export class Medico extends Pessoa {

  constructor() {
    super();
    this.clinicasId = new Array<string>()
    this.clinicas = new Array<Clinica>(); this.usuarioId = ""; this.conveniosId = new Array<string>();
    this.id = ""; this.nomeCompleto = ""; this.cpfCnpj = ""; this.dataNascimento = new Date('01/01/0001'); this.rg = ""; this.ativo = true;
    this.genero = 1; this.celular = ""; this.email = ""; this.usuario = new Usuario(); this.administrador = false; this.cep = ""; this.endereco = "";
    this.numero = ""; this.complemento = ""; this.bairro = ""; this.cidade = ""; this.uf = ""; this.crm = "";
    this.convenios = new Array<Convenio>(); this.foto = '../../assets/images/fotoCadastro.jpg', this.tempoRenovarSessao = 4, this.especialidade = new Especialidade(); this.especialidadeId = "";
    this.configuracaoAgenda = new ConfiguracaoAgenda();

  }

  crm: string;
  conveniosId: string[];
  usuarioId: string;
  especialidadeId: string;
  administrador: boolean;
  clinicasId: string[];
  clinicas: Clinica[];
  convenios: Convenio[];
  usuario: Usuario;
  especialidade: Especialidade;
  configuracaoAgenda: ConfiguracaoAgenda;
  tempoRenovarSessao:number;
  fotoId:string;

  foto :any;


}
