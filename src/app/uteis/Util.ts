import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";
import { Usuario } from "../modelos/usuario";

export class Util {

    formatarDecimal(valor: number, ) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(valor);
    }
    formatarDecimalBlur(valor: number): string {

        let valorString = valor.toString();

        if (valorString.indexOf(',') > 0) {
            if (valorString.substring(valorString.indexOf(',') + 1, valorString.length).length == 0)
                return valorString + "00";
            //quando é digitado com apenas 1 casa decimal ex: 87,9         
            else if (valorString.substring(valorString.indexOf(',') + 1, valorString.length).length == 1)
                return valorString + "0";

            return valor.toString();
        }
        else if (valorString.indexOf('.') > 0 && valorString.indexOf('.') != 3) {
            return valorString + ",00";
        }
        else
            return new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 2 }).format(valor).toString();
    }

    public formatarDataBlur(data: string): string {
        let dataSplit = data.split('/');
        let dataHoje = new Date();

        if (dataSplit.length > 1) { //informado mais do que somente o dia
            var dataString = ("0" + dataSplit[0]).slice(-2) + "/";
            var mes = parseInt(dataSplit[1]);

            if (dataSplit.length == 2) { //data e mes informados
                dataString = dataString + ("0" + mes).slice(-2) + "/" + dataHoje.getFullYear();
                return dataString;
            }
            else if (dataSplit.length == 3) //data mes e ano
            {
                var ano = dataSplit[2];
                var inteiroSubs = 4 - ano.length;

                if (inteiroSubs == 0)
                    return data;
                else {
                    let anoString = dataHoje.getFullYear().toString().substr(0, inteiroSubs) + ano;

                    var dataString = dataString + ("0" + mes).slice(-2) + '/' + anoString;
                    return dataString;
                }
            }
        }
        else { //apenas data informada
            console.log()
            var dataString = ("0" + data).slice(-2) + "/" + ("0" + (dataHoje.getMonth() + 1)).slice(-2) + "/" + dataHoje.getFullYear();
            return dataString;
        }
    }

    public converteData(data: NgbDate): Date {
        var dataNova: Date = new Date(data.year, data.month, data.day);
        return dataNova;
    }

    public concatenaDataHora(dataString: string, horaMinuto: string) {
        var hora = 0, minutos = 0;

        if (horaMinuto.indexOf(":") > 0) {
            var horaSplit = horaMinuto.split(":");
            hora = parseInt(horaSplit[0]);
            minutos = parseInt(horaSplit[1]);
        }
        else {
            hora = parseInt(horaMinuto.substring(0, 2));
            minutos = parseInt(horaMinuto.substring(2, 4));
        }
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
        if (hora == null)
            return "";
        return (hora.substr(0, 2) + ":" + hora.substr(2, 2));
    }

    public formataCnpj(cnpj: string) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");

    }

    public formataCpf(cpf: string) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }

    public validaData(data: string): boolean {

        if (this.isNullOrWhitespace(data))
            return false;

        var date = data;
        var ardt = new Array;
        var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
        var erro = false;
        ardt = date.split("/");

        if (date.search(ExpReg) == -1) {
            erro = true;
        }
        else if (((ardt[1] == 4) || (ardt[1] == 6) || (ardt[1] == 9) || (ardt[1] == 11)) && (ardt[0] > 30))
            erro = true;
        else if (ardt[1] == 2) {

            if ((ardt[0] > 28) && ((ardt[2] % 4) != 0))
                erro = true;
            if ((ardt[0] > 29) && ((ardt[2] % 4) == 0))
                erro = true;
        }

        if (erro)
            return false;

        return true;
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
        if (data == null)
            return "";

        var datepipe: DatePipe = new DatePipe('pt-BR');
        return datepipe.transform(data, "dd/MM/yyyy");
    }

    horaAgoraString(): string {
        var d = new Date();
        return ("0" + d.getHours()).slice(-2) + " " + ("0" + d.getMinutes()).slice(-2);
    }

    public retornarUsuarioAdministradorSistema(usuario:Usuario): boolean {
        return usuario.funcionario == null && usuario.medico == null && usuario.login == "admin";
    }

    retornaUsuarioAdmOuMedico(usuario: Usuario) {
        if (usuario != null) {

            return (usuario.funcionario != null && usuario.funcionario.permissaoAdministrador) || usuario.medico != null;
        }
        else return false;
    }

}