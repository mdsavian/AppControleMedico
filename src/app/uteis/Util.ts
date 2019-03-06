import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";

export class Util {

    public converteData(data: NgbDate): Date {
        var dataNova: Date = new Date(data.year, data.month, data.day);
        return dataNova;
    }

    public stringParaData(dataString: string): Date {

        var dataPartes = dataString.split("/");
        var horaPartes = dataString.split(":");

        if (horaPartes.length > 1) {
            var data = new Date(parseInt(dataPartes[2], 10),
                parseInt(dataPartes[1], 10) - 1,
                parseInt(dataPartes[0], 10),
                parseInt(horaPartes[0], 10),
                parseInt(horaPartes[1], 10));
        }
        else {
            var data = new Date(parseInt(dataPartes[2], 10),
                parseInt(dataPartes[1], 10) - 1,
                parseInt(dataPartes[0], 10));
        }
        return data;
    }

    public dataParaString(data:Date):string{
        var datepipe :DatePipe = new DatePipe('pt-BR');

        return datepipe.transform(data,"dd/MM/yyyy");
        
    }
}