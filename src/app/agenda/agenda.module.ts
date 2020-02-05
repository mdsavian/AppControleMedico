import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter, DateFormatterParams, CalendarDateFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { AgendaComponent } from './agenda.component';
import { AgendaRoutes } from './agenda.routing';
import { RouterModule } from '@angular/router';
import { ModalAdicionaAgendamentoComponent } from './modal-adiciona-agendamento.component'
import { SharedModalModule } from '../shared/modal/shared-modal.module';
import { ModalCadastroPacienteComponent } from '../cadastros/paciente/modal-cadastro-paciente.component';
import { ModalExtraCaixaComponent } from '../cadastros/extra-caixa/modal-extra-caixa.component';
import { ModalAcoesAgendamentoComponent } from './modal-acoes-agendamento.component';
import { AtendimentoAgendamentoComponent } from './atendimento-agendamento.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


export class CustomDateFormatter extends CalendarDateFormatter {

  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat('ca', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }

  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat('ca', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }

}

@NgModule({
  imports: [SharedModalModule, NgbModule, NgxMaskModule.forRoot(), Ng2SmartTableModule, CommonModule, FormsModule, NgbModalModule, FlatpickrModule.forRoot(), RouterModule.forChild(AgendaRoutes),
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: adapterFactory
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CustomDateFormatter
        }
      })],
  declarations: [AgendaComponent,  ModalExtraCaixaComponent, AtendimentoAgendamentoComponent, ModalAcoesAgendamentoComponent, 
    ModalAdicionaAgendamentoComponent, ModalCadastroPacienteComponent],
  exports: [AgendaComponent],
  entryComponents: [ ModalExtraCaixaComponent, ModalAdicionaAgendamentoComponent, ModalCadastroPacienteComponent, ModalAcoesAgendamentoComponent]
})

export class AgendaModule { }


