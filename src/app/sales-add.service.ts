import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { Sale } from './models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesAddService {

  private url ="http://localhost:5001/api/staff/sale/purchase";
  private urlSearch ="http://localhost:5001/api/product/search";

  constructor(private http : HttpClient) { }

  public addItem(product : Sale) : Observable<boolean> {
    return this.http.post<boolean>(this.url , product);
  }

  public searchItem (pid : string) : Observable<Product> {
    const params = new HttpParams().set("pid", pid);
    return this.http.get<Product>(this.urlSearch, {params});
  }
}
