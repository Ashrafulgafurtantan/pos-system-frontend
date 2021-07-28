import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.css']
})
export class StartingPageComponent implements OnInit {
  user:User |any;

  constructor(public  router:Router) {

  }

  ngOnInit(): void {
    this.user = localStorage.getItem('currentUser') ;
    this.user = JSON.parse(this.user);
    let isLoggedIn = localStorage.getItem('isLogin');
    console.log(isLoggedIn)
    console.log(this.user)
    if(isLoggedIn){
      console.log('vitore');
      if(this.user.role.toUpperCase() == "ADMIN"){
        console.log('vitore 2');
        this.router.navigate(["admin-panel"]);
      }else{
        console.log('vitore 3');
        this.router.navigate(["staff-panel"]);
      }
    }
  }

}
