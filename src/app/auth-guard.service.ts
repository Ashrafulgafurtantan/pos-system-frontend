import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private router : Router,
              private userService : UserService) { }

  canActivate(route : ActivatedRouteSnapshot, snap : RouterStateSnapshot) {
   let isLogin =localStorage.getItem('isLogin');
    console.log("isLogin= ",isLogin);
    if(! isLogin) {
      this.router.navigate(["starting-page"]);
      return false;
    }

    return true;
  }
}
