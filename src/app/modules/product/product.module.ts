import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './component/product-list/product-list.component';
import {RouterModule} from "@angular/router";
import {PRODUCT_ROUTE} from "./product.route";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([PRODUCT_ROUTE])
  ]
})
export class ProductModule {
}
