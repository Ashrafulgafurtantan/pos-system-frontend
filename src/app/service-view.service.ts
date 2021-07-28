import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceViewService {

  private url="http://localhost:5001/api/service/view";
  constructor(private http : HttpClient) { }

  public searchService(pid : string) : Observable<Service> {
    const params=new HttpParams().set("pid",pid);
    return this.http.get<Service>(this.url, {params});
  }
}
