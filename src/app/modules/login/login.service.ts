import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService, UserCredentials} from "../../core/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {HttpResponse} from "@angular/common/http";
import {ACCESS_TOKEN} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {
  }

  login(userCredentials: UserCredentials) {
    this.authService.getAccessToken(userCredentials).subscribe({
      next: (value: HttpResponse<any>) =>  {
        this.successfulLogin(value.body);
        this.toastrService.success("Login successful.");
        this.router.navigate(['']).then();
      },
      error:(error: any) => {
        this.toastrService.error(error.message);
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']).then();
  }

  successfulLogin(token: string) {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

}
