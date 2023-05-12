import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserAuthenticated} from "./core/services/user-authenticated";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((mod) => mod.HomeModule),
    canActivate: [UserAuthenticated]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((mod) => mod.LoginModule),
    canActivate: []
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./modules/sign-up/sign-up.module').then((mod) => mod.SignUpModule),
    canActivate: []
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
