import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from './models/sales';
import { Service } from './models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAddService {

  private urlSearch = "http://localhost:5001/api/sale/search";
  private urlAdd = "http://localhost:5001/api/staff/service/add";

  constructor(private http : HttpClient) { }

  public addService(service : Service) : Observable<boolean> {
    return this.http.post<boolean>(this.urlAdd , service);
  }

  public searchItem (pid : string) : Observable<Sale> {
    const params = new HttpParams().set("pid", pid);
    return this.http.get<Sale>(this.urlSearch, {params});
  }
}
