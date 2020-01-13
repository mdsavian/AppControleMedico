import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { SharedModalModule } from '../shared/modal/shared-modal.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SharedModalModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent, 
  ]
})
export class HomeModule { }
