import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LOGIN_ROUTE} from "./login.route";
import { LoginComponent } from './component/login.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([LOGIN_ROUTE]),
        ReactiveFormsModule
    ]
})
export class LoginModule {
}
