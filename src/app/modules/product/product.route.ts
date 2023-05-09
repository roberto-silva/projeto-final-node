import {Route} from '@angular/router';
import {ProductListComponent} from "./component/product-list/product-list.component";

export const PRODUCT_ROUTE: Route = {
  path: '',
  component: ProductListComponent,
  data: {
    authorities: [],
    pageTitle: 'Product',
  },
  children: []
};
