import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter, DateFormatterParams, CalendarDateFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaComponent } from './agenda.component';
import { AgendaRoutes } from './agenda.routing';
import { RouterModule } from '@angular/router';


class CustomDateFormatter extends CalendarDateFormatter {

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
  imports: [CommonModule, FormsModule, NgbModalModule, FlatpickrModule.forRoot(), RouterModule.forChild(AgendaRoutes),
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: adapterFactory
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CustomDateFormatter}
      })],
  // CalendarModule.forRoot({
  //   provide: CalendarDateFormatter,
  //   useFactory: adapterFactory,
  //   useClass: CustomDateFormatter

  // })],
  declarations: [AgendaComponent],
  exports: [AgendaComponent]
})

export class AgendaModule { }


