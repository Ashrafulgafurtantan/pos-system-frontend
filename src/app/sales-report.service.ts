import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Sale } from './models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {

  private url = "http://localhost:5001/api/sale/report";

  constructor(private http : HttpClient) { }

  public getReport() : Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url);
  }
}
