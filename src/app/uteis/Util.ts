import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";
import { Usuario } from "../modelos/usuario";
import { LoginService } from "../services/login.service";

export class Util {

    public converteData(data: NgbDate): Date {
        var dataNova: Date = new Date(data.year, data.month, data.day);
        return dataNova;
    }

    public concatenaDataHora(dataString: string, horaMinuto: string) {
        var hora = parseInt(horaMinuto.substring(0, 2));
        var minutos = parseInt(horaMinuto.substring(2, 4));

        var data = this.stringParaData(dataString);
        var novaData = new Date(data.getFullYear(), data.getMonth(), data.getDate(), hora, minutos, 0);
        return novaData;
    }

    public isNullOrWhitespace(texto) {
        return !texto || !texto.trim();
    }

    public hasItems(lista) {

        return lista != null && lista.length > 0;
    }

    public retornarUsuarioAdministrador(): boolean {
        var usuario = new LoginService(null, null).usuarioCorrenteValor;
        return ((usuario.medicoId == "" || usuario.medicoId == null) && (usuario.funcionarioId == null || usuario.funcionarioId == ""));
    }

    public retornarUsuarioCorrente(): Usuario {
        var usuario = new LoginService(null, null).usuarioCorrenteValor;
        return usuario;
    }

    public stringParaData(dataString: string): Date {

        if (dataString.length > 8) {
            var dataPartes = dataString.split("/");
            var horaPartes = dataString.split(":");

            if (horaPartes.length > 1) {
                var data = new Date(parseInt(dataPartes[2], 10),
                    parseInt(dataPartes[1], 10) - 1,
                    parseInt(dataPartes[0], 10),
                    parseInt(horaPartes[0], 10),
                    parseInt(horaPartes[1], 10));
            }
            else if (dataPartes.length > 1) {
                var data = new Date(parseInt(dataPartes[2], 10),
                    parseInt(dataPartes[1], 10) - 1,
                    parseInt(dataPartes[0], 10));
            }
        }
        else {

        }
        return data;
    }

    public formataCnpj(cnpj: string) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");

    }

    public formataCpf(cpf: string) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }



    public formataTelefone(telefone: string) {
        telefone = telefone.replace(/\D/g, "");             //Remove tudo o que não é dígito
        telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2");
        return telefone;
    }

    public formataCelular(celular: string) {
        celular = celular.replace(/\D/g, "");             //Remove tudo o que não é dígito
        celular = celular.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        celular = celular.replace(/(\d)(\d{4})$/, "$1-$2");
        return celular;
    }

    public dataParaString(data: Date): string {
        var datepipe: DatePipe = new DatePipe('pt-BR');
        return datepipe.transform(data, "dd/MM/yyyy");
    }


    public dataHoraParaString(data: Date, ): string {
        var datepipe: DatePipe = new DatePipe('pt-BR');
        return datepipe.transform(data, "dd/MM/yyyy");
    }
}