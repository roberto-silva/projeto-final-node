import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Injectable} from "@angular/core";
import {LoginService} from '../../modules/login/login.service';
import {AuthService} from '../services/auth.service';
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly loginService: LoginService,
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error: any) => {

      if (error.status === 401) {
        this.loginService.logout();
        this.toastrService.warning("Unauthenticated user, to continue using the app, login again by entering login and password.");
      }

      if (error.status === 403) {
        this.toastrService.warning("The logged user does not have permission to access this resource.");
      }

      throw new Error(error);
    }));
  }

}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
