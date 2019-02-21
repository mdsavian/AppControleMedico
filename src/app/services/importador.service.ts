import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
  
  
  export class ImportadorService {

    dadosRelatorio : string;

    public ArmazenaDados (objeto : string)
    {
        this.dadosRelatorio = objeto;
    }

    public RetornaDados() : string{
        return this.dadosRelatorio;
    }
  }