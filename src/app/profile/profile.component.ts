import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userService  : UserService) { }

  currentUser : User | any;

  ngOnInit(): void {

 //   this.currentUser = this.userService.getCurrentUser();
    this.currentUser = localStorage.getItem('currentUser') ;
    this.currentUser = JSON.parse(this.currentUser);
  }

}
