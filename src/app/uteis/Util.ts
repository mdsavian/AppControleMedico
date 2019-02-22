import { NgbDate } from "@ng-bootstrap/ng-bootstrap";


export class Util {

    public converteData(data: NgbDate): Date {
        var dataNova: Date = new Date(data.year, data.month, data.day);
        return dataNova;
        }
}