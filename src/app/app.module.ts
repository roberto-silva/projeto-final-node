import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptorProvider} from "./core/interceptors/auth-interceptor";
import {ErrorInterceptorProvider} from "./core/interceptors/error-interceptor";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserAuthenticated} from "./core/services/user-authenticated";
import {HttpClientModule} from "@angular/common/http";
import { ModalActionAdapterComponent } from './core/component/modal-action-adapter/modal-action-adapter.component';
import {provideEnvironmentNgxMask} from "ngx-mask";

export const TOAST_PROVIDER = {provide: ToastrService, useClass: ToastrService};

@NgModule({
  declarations: [
    AppComponent,
    ModalActionAdapterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    HttpClientModule,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    TOAST_PROVIDER,
    UserAuthenticated,
    provideEnvironmentNgxMask()
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
