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
import { ModalAgendamentosMedicoComponent } from '../../agenda/modal-agendamentos-medico.component';
import { ModalDetalheContaReceberComponent } from '../../cadastros/conta-receber/modal-detalhe-conta-receber.component';
import { NgxMaskModule } from 'ngx-mask';
import { WebcamModule } from 'ngx-webcam';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BotaoDownloadComponent } from '../components/botao-download-component';
import { BotaoImprimirComponent } from '../components/botao-imprimir-component';
import { BotaoImprimirAgendamentoMedicosComponent } from '../components/botao-imprimir-agendamento-medicos-component';
import { BotaoImprimirReciboComponent } from '../components/botao-imprimir-recibo-component';
import { CorComponent } from '../components/cor-component';
import { ModalAberturaCaixaComponent } from '../../cadastros/caixa/modal-abertura-caixa.component';
import { ModalFechamentoCaixaComponent } from '../../cadastros/caixa/modal-fechamento-caixa.component';
import { ModalPagamentoAgendamentoComponent } from '../../cadastros/agendamento-pagamento/modal-pagamento-agendamento.component';
import { EnumToArrayPipe } from '../../uteis/enumToArray.pipe'
import { QuillModule } from 'ngx-quill';
import { ModalExtraCaixaComponent } from '../../cadastros/extra-caixa/modal-extra-caixa.component';
import { BotaoAdicionarPagamentoComponent } from '../components/botao-adicionar-pagamento-component';
import { ValidaCpfDirective } from '../../validadores/valida-cpf.directive';


@NgModule({
  imports: [Ng2SmartTableModule, QuillModule.forRoot(), CommonModule, WebcamModule, NgbModule, RouterModule, FormsModule, NgxMaskModule.forRoot()],

  declarations: [BotaoImprimirComponent, BotaoImprimirAgendamentoMedicosComponent, BotaoImprimirReciboComponent, EnumToArrayPipe, CorComponent, ModalPagamentoAgendamentoComponent, ModalExtraCaixaComponent, BotaoDownloadComponent,
    ModalDetalheContaReceberComponent, ModalAberturaCaixaComponent, ModalFechamentoCaixaComponent, ModalDetalhesAgendamentoComponent, ModalAgendamentosMedicoComponent,
    ModalWebcamComponent, ModalExcluirRegistroComponent, ModalPagamentoComponent, ValidaCpfDirective, ModalAdicionaModeloDescricaoComponent, ModalAlteraSenhaComponent, ModalSucessoComponent, BotaoAdicionarPagamentoComponent],

  entryComponents: [ModalPagamentoAgendamentoComponent, BotaoImprimirComponent, BotaoImprimirAgendamentoMedicosComponent, BotaoImprimirReciboComponent, ModalExtraCaixaComponent, CorComponent, BotaoDownloadComponent,
    ModalDetalheContaReceberComponent, ModalAberturaCaixaComponent, ModalFechamentoCaixaComponent, ModalDetalhesAgendamentoComponent, ModalAgendamentosMedicoComponent, ModalWebcamComponent,
    ModalExcluirRegistroComponent, ModalPagamentoComponent, ModalAdicionaModeloDescricaoComponent, ModalAlteraSenhaComponent, ModalSucessoComponent,
    BotaoAdicionarPagamentoComponent],

  exports: [EnumToArrayPipe, ValidaCpfDirective]
})
export class SharedModalModule { }
