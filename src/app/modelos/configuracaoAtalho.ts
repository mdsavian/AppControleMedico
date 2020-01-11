import { Entidade } from "./entidade";

export class ConfiguracaoAtalho extends Entidade {

  constructor() {
    super();
  }

  descricao: string;
  imagem: string;  
  spanClass: string;
  btnClass: string;
  ativo: boolean;

}
