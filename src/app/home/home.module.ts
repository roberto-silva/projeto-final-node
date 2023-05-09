import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HOME_ROUTE} from "./home.route";
import {HomeComponent} from "./component/home.component";
import {NavbarComponent} from "../core/component/navbar/navbar.component";
import {SidebarComponent} from "../core/component/sidebar/sidebar.component";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([HOME_ROUTE])
  ]
})
export class HomeModule {
}
