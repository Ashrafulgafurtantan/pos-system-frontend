import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceUpdateService {

  private urlSearch = "http://localhost:5001/api/service/view";
  private urlUpdate = "http://localhost:5001/api/staff/service/update";

  constructor(private http : HttpClient) { }

  public searchService(pid : string) : Observable<Service> {
    const params=new HttpParams().set("pid",pid);
    return this.http.get<Service>(this.urlSearch, {params});
  }

  public updateService(service  : Service) : Observable<boolean> {
    return this.http.post<boolean>(this.urlUpdate, service);
  }
}
