import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class StaffGuardService implements CanActivate{

  current_user:User | any;
  constructor(private router : Router,
              private userService : UserService) { }

  canActivate(route : ActivatedRouteSnapshot, snap : RouterStateSnapshot) {

      // if(! this.userService.isStaffUser()) {
      //    this.router.navigate(["starting-page"], {queryParams : {retUrl : route.url}});
      //    return false;
      // }
      //
      // return true;


    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.current_user.role);
    if(this.current_user.role.toUpperCase() == 'ADMIN' ) {
      this.router.navigate(["starting-page"], );//{queryParams : {retUrl : route.url}}
      return false;
    }
    return true;
  }
}
