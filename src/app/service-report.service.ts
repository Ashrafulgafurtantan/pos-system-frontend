import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceReportService {

  private url="http://localhost:5001/api/service/report";

  constructor(private http : HttpClient) { }

  public GetAllServices() : Observable<Service[]> {
    return this.http.get<Service[]>(this.url);
  }
}
