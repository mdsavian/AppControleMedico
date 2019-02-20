import { Entidade } from "./entidade";

export class DadosRelatorioUnimed {

    data: Date;
    documento: number;
    carteira: number;
    beneficiario: string;
    tipoPlano: string;
    codigoMovimento: number;
    servico: string;
    quantidade: number;
    valorProduto: number;
    valorParticipacao: number;
    prevPagamento: number;
    convenio:string;

    fillFromJSON(json: string) {
        var jsonObj = JSON.parse(json);
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
}