import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetsComponent } from './widgets.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Widgets Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Widgets Page' }
      ]
    },
    component: WidgetsComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WidgetsComponent]
})
export class WidgetsModule {}
