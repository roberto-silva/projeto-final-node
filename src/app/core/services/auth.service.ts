import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ACCESS_TOKEN, AUTH_API} from '../../app.constants';
import {Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) {
  }

  getAccessToken(userCredentials: UserCredentials): Observable<any> {
    return this.http.post(AUTH_API, userCredentials, {observe: 'response', responseType: 'json'});
  }

  getAccessTokenInStorage() {
    return localStorage.getItem(ACCESS_TOKEN) || '';
  }

}

export class UserCredentials {
  constructor(login: string, senha: string) {
  }
}
