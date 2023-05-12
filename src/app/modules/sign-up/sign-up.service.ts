import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user.model";
import {SIGN_UP_API} from "../../app.constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {
  }

  signUp(user: User): Observable<any> {
    return this.http.post(SIGN_UP_API, user, {observe: 'response', responseType: 'json'});
  }
}
