import { Pessoa } from "./pessoa";
import { Convenio } from "./convenio";
import { Usuario } from "./usuario";
import { Especialidade } from "./especialidade";
import { ConfiguracaoAgenda } from "./configuracaoAgenda";
import { Clinica } from "./clinica";

export class Medico extends Pessoa {

  constructor() {    
    super();
    this.conveniosId = new Array<string>();
    this.convenios = new Array<Convenio>();    
  }
  
  crm : string;  
  conveniosId:string[];
  usuarioId:string;
  especialidadeId:string;
  configuracaoAgendaId:string;
  administrador:boolean;
  clinicasId:string[];

  clinicas:Clinica[];
  convenios :Convenio[];
  usuario:Usuario;  
  especialidade:Especialidade;
  configuracaoAgenda:ConfiguracaoAgenda;
  
}
