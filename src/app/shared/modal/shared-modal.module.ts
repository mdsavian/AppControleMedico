import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionaModeloDescricaoComponent } from './modal-adiciona-modelo-descricao.component';
import { ModalAlteraSenhaComponent } from './modal-altera-senha.component';
import { ModalSucessoComponent } from './modal-sucesso.component';
import { ModalWebcamComponent } from './modal-webcam.component';
import { ModalPagamentoComponent } from './modal-pagamento.component';
import { ModalExcluirRegistroComponent } from './modal-excluir-registro.component';
import { ModalDetalhesAgendamentoComponent } from '../../agenda/modal-detalhes-agendamento.component';
import { ModalDetalheContaReceberComponent } from '../../cadastros/conta-receber/modal-detalhe-conta-receber.component';
import { NgxMaskModule } from 'ngx-mask';
import { WebcamModule } from 'ngx-webcam';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BotaoDownloadComponent } from '../components/botao-download-component';
import { BotaoImprimirComponent } from '../components/botao-imprimir-component';
import { CorComponent } from '../components/cor-component';
import { ModalAberturaCaixaComponent } from '../../cadastros/caixa/modal-abertura-caixa.component';
import { ModalFechamentoCaixaComponent } from '../../cadastros/caixa/modal-fechamento-caixa.component';


@NgModule({
  imports: [Ng2SmartTableModule, CommonModule, WebcamModule, NgbModule, RouterModule, FormsModule, NgxMaskModule.forRoot()],
  declarations: [BotaoImprimirComponent, CorComponent, BotaoDownloadComponent, ModalDetalheContaReceberComponent,ModalAberturaCaixaComponent, ModalFechamentoCaixaComponent, ModalDetalhesAgendamentoComponent, ModalWebcamComponent, ModalExcluirRegistroComponent, ModalPagamentoComponent, ModalAdicionaModeloDescricaoComponent, ModalAlteraSenhaComponent, ModalSucessoComponent],
  entryComponents: [BotaoImprimirComponent, CorComponent, BotaoDownloadComponent, ModalDetalheContaReceberComponent, ModalAberturaCaixaComponent, ModalFechamentoCaixaComponent,ModalDetalhesAgendamentoComponent, ModalWebcamComponent, ModalExcluirRegistroComponent, ModalPagamentoComponent, ModalAdicionaModeloDescricaoComponent, ModalAlteraSenhaComponent, ModalSucessoComponent]
})
export class SharedModalModule { }
