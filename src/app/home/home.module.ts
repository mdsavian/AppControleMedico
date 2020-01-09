import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';



@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
   HomeComponent
  ]
})
export class HomeModule { }
