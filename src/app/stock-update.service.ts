import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class StockUpdateService {

  private urlUpdate="http://localhost:5001/api/admin/stock/update";
  private urlSearch ="http://localhost:5001/api/product/search";

  constructor(private http : HttpClient) { }

  public updateItem (product : Product) : Observable<boolean> {
    return this.http.post<boolean>(this.urlUpdate, product);
  }

  public searchItem (pid : string) : Observable<Product> {
    const params = new HttpParams().set("pid", pid);
    return this.http.get<Product>(this.urlSearch, {params});
  }
}
