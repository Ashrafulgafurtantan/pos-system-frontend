import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class StockDeleteService {

  private urlDelete="http://localhost:5001/api/admin/stock/delete";
  private urlSearch ="http://localhost:5001/api/product/search";

  constructor(private http : HttpClient) { }

  public deleteItem (product : Product) : Observable<boolean> {
    return this.http.post<boolean>(this.urlDelete, product);
  }

  public searchItem (pid : string) : Observable<Product> {
    const params = new HttpParams().set("pid", pid);
    return this.http.get<Product>(this.urlSearch, {params});
  }
}
