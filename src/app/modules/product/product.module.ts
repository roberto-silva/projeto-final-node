import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './component/product-list/product-list.component';
import {RouterModule} from "@angular/router";
import {PRODUCT_ROUTE} from "./product.route";
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([PRODUCT_ROUTE]),
    ReactiveFormsModule,
    NgxMaskDirective
  ]
})
export class ProductModule {
}
