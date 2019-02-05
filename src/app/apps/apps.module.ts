import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppsRoutes } from './apps.routing';
import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    QuillModule,
    DragulaModule,
    RouterModule.forChild(AppsRoutes)
  ],
  declarations: [EmailComponent, TaskboardComponent, FullcalendarComponent]
})
export class AppsModule {}
