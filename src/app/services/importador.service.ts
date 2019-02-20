import { Injectable } from "@angular/core";
import { DadosRelatorioUnimed } from "../modelos/dados_relatorio_unimed";

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