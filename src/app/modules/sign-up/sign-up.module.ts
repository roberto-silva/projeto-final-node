import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {RouterModule} from "@angular/router";
import {SIGN_UP_ROUTE} from "./sign-up.route";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {animate, state, style, transition, trigger} from "@angular/animations";


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([SIGN_UP_ROUTE]),
    ReactiveFormsModule
  ]
})
export class SignUpModule {
}
