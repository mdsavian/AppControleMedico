import * as $ from 'jquery';
import localept from '@angular/common/locales/pt';
registerLocaleData(localept, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy,
  registerLocaleData
} from '@angular/common';

import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './shared/spinner.component';

import { ModalErrorComponent } from './shared/modal/modal-error.component';
import { environment } from '../environments/environment';
import { UsuarioService } from './services/usuario.service';
import { SharedModalModule } from './shared/modal/shared-modal.module';
import { ModalTrocaClinicaComponent } from './shared/modal/modal-troca-clinica.component';


import { NgxMaskModule } from 'ngx-mask'
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { JwtInterceptor } from './uteis/jwt.interceptor';
import { ErrorInterceptor } from './uteis/error.interceptor';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxMaskModule.forRoot(),
    PerfectScrollbarModule,
    SharedModalModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    ModalErrorComponent,
    ModalTrocaClinicaComponent
  ],

  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    UsuarioService
  ],
  entryComponents: [ModalErrorComponent, ModalTrocaClinicaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  env = environment;
}

export function getBaseUrl() {
  return environment.apiUrl;
}
