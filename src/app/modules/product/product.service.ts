import { Injectable } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PRODUCTS_API} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) {
  }

  getAllProduct(): Observable<any>{
    return this.http.get(PRODUCTS_API);
  }
}
