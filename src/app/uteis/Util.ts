import { NgbDate } from "@ng-bootstrap/ng-bootstrap";


export class Util {

    public converteData(data: NgbDate): Date {
        var dataNova: Date = new Date(data.year, data.month, data.day);
        return dataNova;
        }

        public stringParaData(dataString:string): Date{

            var dataPartes = dataString.split("/");
            var horaPartes = dataString.split(":");

            console.log(dataString + "opppaa" + dataPartes + "opa" + horaPartes);

            var data = new Date(parseInt(dataPartes[2], 10),
                                parseInt(dataPartes[1], 10) - 1,
                                parseInt(dataPartes[0], 10),
                                parseInt(horaPartes[0],10),
                                parseInt(horaPartes[1],10));
                  return data;
        }
}