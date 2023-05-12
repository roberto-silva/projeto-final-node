import {Route} from '@angular/router';
import {SignUpComponent} from "./component/sign-up/sign-up.component";

export const SIGN_UP_ROUTE: Route = {
  path: '',
  component: SignUpComponent,
  data: {
    authorities: [],
    pageTitle: 'Product',
  },
  children: []
};
