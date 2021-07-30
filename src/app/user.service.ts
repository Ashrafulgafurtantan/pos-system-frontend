import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url="http://localhost:5001/api/user/";

  private isLoggedIn : boolean;
  private currentUser : User;

  constructor(private http : HttpClient) {
    this.isLoggedIn = false;
   }
  onLogin(user: User): Observable<boolean>{
    const tempUrl = this.url + 'login';
    return  this.http.post<boolean>(tempUrl,user);
  }
  setLocalValues(bool:boolean, user:User){
    this.currentUser = user;
    this.isLoggedIn = bool;


  }
  public searchUser(username : string) : Observable<User> {
    const params = new HttpParams().set("username",username);
   return   this.http.get<User>(this.url+"search",{params});
  }

  public updateStaff(user: User) : Observable<User> {
    const tempUrl ='http://localhost:5001/api/admin/update_staff';
    return   this.http.post<User>(tempUrl,user);
  }


  public getCurrentUser() : User {
    return this.currentUser;
  }

  public logoutUser() : void {
    this.isLoggedIn = false;
  }
}
