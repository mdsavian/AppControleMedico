import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";
import { compileInjectable } from "@angular/compiler";

export class Util {

    formatarDecimal(valor: number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(valor);
    }

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

    public dataURIparaBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[0]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
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
        else if (dataString.length == 8) //data string 22082019
        {
            var data = new Date(parseInt(dataString.substr(4, 4), 10),
                parseInt(dataString.substr(2, 2), 10),
                parseInt(dataString.substr(0, 2), 10));
        }
        return data;
    }

    public formatarData(data: string) {
        return (data.substr(0, 2) + "/" + data.substr(2, 2) + "/" + data.substr(4, 4));
    }

    public formatarHora(hora: string) {
        return (hora.substr(0, 2) + ":" + hora.substr(2, 2));
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

    horaAgoraString(): string {
        var d = new Date();
        return ("0" + d.getHours()).slice(-2) + " " + ("0" + d.getMinutes()).slice(-2);
    }
}