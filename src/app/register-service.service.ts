import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url="http://localhost:5001/api/user/";

  constructor(private http : HttpClient) { }

  public registerUser (user : User) : Observable<boolean> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*');
    return this.http.post<boolean>(this.url + "register",user , {headers});
  }

  public searchUser(username : string) : Observable<User> {

    const params = new HttpParams().set("username",username);
    return this.http.get<User>(this.url+"search",{params});

  }

}
