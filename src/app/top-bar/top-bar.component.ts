import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {CommonService} from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  messageReceived: any;
  private subscriptionName: Subscription | any;

  loggedIn = false ;
  notLoggedIn = true ;
  userName: string | any ;
  user: User | any ;

  constructor(public router: Router, public service: CommonService) {
    this.subscriptionName= this.service.getUpdate().subscribe
    (message => {
      this.messageReceived = message;
      this.ngOnInit() ;
    });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('currentUser') ;
    this.user = JSON.parse(this.user);
    let isLoggedIn = localStorage.getItem('isLogin');
    if(isLoggedIn){
        this.loggedIn = true ;
        this.notLoggedIn = false;
        console.log(this.user);
        this.userName =this.user.username ;
    }
  }

  sign_out(){
    localStorage.removeItem('isLogin') ;
    localStorage.removeItem('currentUser') ;
    this.loggedIn = false ;
    this.notLoggedIn = true ;
    this.router.navigate(['starting-page']) ;

  }

  ngOnDestroy() {
    this.subscriptionName.unsubscribe();
  }

}
