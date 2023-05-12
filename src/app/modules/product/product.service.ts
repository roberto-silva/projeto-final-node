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
  getProductById(id: any): Observable<any>{
    return this.http.get(`${PRODUCTS_API}/${id}`);
  }

  postProduct(body: any): Observable<any> {
    return this.http.post(PRODUCTS_API, body);
  }

  putProduct(body: any): Observable<any>{
    return this.http.put(`${PRODUCTS_API}/${body?.id}`, body);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${PRODUCTS_API}/${id}`);
  }
}
