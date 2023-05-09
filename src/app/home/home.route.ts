import {Route} from '@angular/router';
import {HomeComponent} from "./component/home.component";

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'Home',
  },
  children: [

  ]
};
