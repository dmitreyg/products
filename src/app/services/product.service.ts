import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'https://dummyjson.com/products';
  private productByIdUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    console.log('get products');
    return this.http.get<any>(this.productsUrl);
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
