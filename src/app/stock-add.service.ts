import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class StockAddService {

  private url= "http://localhost:5001/api/admin/stock/add";

  constructor(private http : HttpClient) { }

  public addItem(product : Product) : Observable<boolean> {
    return this.http.post<boolean>(this.url , product);
  }
}
