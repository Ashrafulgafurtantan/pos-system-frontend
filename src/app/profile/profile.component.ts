import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterServiceService} from '../register-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  currentUser : User | any;
  updateForm: FormGroup;

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser') ;
    this.currentUser = JSON.parse(this.currentUser);
    this.initializeForm();
  }



  constructor(public userService  : UserService,private _snackBar: MatSnackBar) {

  }


  initializeForm() {
    this.updateForm = new FormGroup({
      username: new FormControl(this.currentUser.username, Validators.required),
      password: new FormControl(this.currentUser.password, Validators.required),
      role: new FormControl(this.currentUser.role, Validators.required),
    });
  }
  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
  }

  updateUserProfile(){
    this.currentUser = this.updateForm.value;
    console.log(this.currentUser);
    this.userService.updateStaff(this.currentUser).subscribe(response=>{
      this.openSnackBar('User Profile Update successful','close')
      localStorage.setItem("currentUser",JSON.stringify(response));
    });
  }


}
