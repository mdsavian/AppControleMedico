import { Component, ViewChild } from '@angular/core';
import { UploadService } from '../../services/upload.service';

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

  constructor(private uploadService:UploadService) {   
    var data  = this.uploadService.RetornaDados();
    this.rows = JSON.parse(data);  
  }
  
}
