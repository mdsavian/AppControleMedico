import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";

export class Paciente extends Pessoa {

  constructor() {
    super();

    this.id = ""; this.nomeCompleto = ""; this.convenioId = ""; this.cpfCnpj = ""; this.dataUltimaMenstruacao = this.dataNascimento = new Date('01/01/1901'); this.rg = ""; this.ativo = true; this.genero = 1; this.nomeConjugue = ""; this.nomeMae = "";
    this.nomePai = ""; this.ocupacao = ""; this.tipoSanguineo = 1; this.telefone = ""; this.celular = ""; this.email = ""; this.aceitaReceberSms = true; this.responsavel = "";
    this.cep = ""; this.endereco = ""; this.numero = ""; this.estadoCivil = 0; this.complemento = ""; this.bairro = ""; this.cidade = ""; this.uf = ""; this.convenio = new Convenio();
    this.numeroCartao = 1; this.cartaoNacionalSaude = 1; this.fotoId = ""; this.dataCadastro = this.dataValidadeCartao = new Date('01/01/1901'); this.tipoPlano = ""; this.diaGestacao = ''; this.semanaGestacao = ''
  }


  nomeConjugue: string;
  nomePai: string;
  nomeMae: string;
  estadoCivil: number;
  tipoSanguineo: number;
  ocupacao: string;
  telefone: string;
  aceitaReceberSms: boolean;
  responsavel: string;
  numeroCartao: number;
  cartaoNacionalSaude: number;
  dataValidadeCartao: Date;
  dataCadastro: Date;
  dataUltimaMenstruacao: Date;
  tipoPlano: string;
  semanaGestacao: string;
  diaGestacao: string;
  convenioId: string;
  convenio: Convenio;
  fotoId: string;

  prontuario:any;

  // não mapeadas
  foto: any;



}
