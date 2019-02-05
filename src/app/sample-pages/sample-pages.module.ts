import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SamplePagesRoutes } from './sample-pages.routing';
import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SamplePagesRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HelperclassesComponent,
    InvoiceComponent,
    ProfileComponent,
    PricingComponent,
    TimelineComponent
  ]
})
export class SamplePagesModule {}
