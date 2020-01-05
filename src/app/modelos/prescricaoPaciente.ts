import { Entidade } from "./entidade";

export class PrescricaoPaciente extends Entidade {

    constructor() {
        super();
        this.pacienteId = this.descricao = this.usuarioId = this.medicoId = "";
        this.data = new Date();
    }

    pacienteId: string;
    descricao: string;
    data: Date;
    usuarioId: string;
    medicoId: string;

}