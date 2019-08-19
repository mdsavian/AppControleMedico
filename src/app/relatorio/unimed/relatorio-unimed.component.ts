import { Component, ViewChild } from '@angular/core';
import { ImportadorService } from '../../services/importador.service';

@Component({
  selector: 'app-relatorio-unimed',
  templateUrl: './relatorio-unimed.component.html',
  styleUrls: ['./relatorio-unimed.css']
})
export class RelatorioUnimedComponent {
    
  table: RelatorioUnimedComponent;

  loadingIndicator = true;
  reorderable = true;

  rows = [];
  columns = [{ name: 'Data' },{name:'Beneficiário', prop:'beneficiario' }, { name:"Código Movimento", prop: 'codigoMovimento' }, 
             { name: 'Servico'}, {name:"Valor Produto", prop:"valorProduto"},{name:"Valor Participação", prop:"valorParticipacao"}];

  constructor(private importadorService:ImportadorService) {   
    var data  = this.importadorService.RetornaDados();
    this.rows = JSON.parse(data);  
  }
  
}
