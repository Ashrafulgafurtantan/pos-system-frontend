import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RegisterServiceService } from '../register-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  user1 : User = new User();
  registerForm: FormGroup;

  constructor(private userService : RegisterServiceService,private _snackBar: MatSnackBar) {
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }
  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
  }
  addUser() : void {
    this.user = this.registerForm.value;
    this.userService.registerUser(this.user).subscribe (
      response => {
        if(response == true){
          this.openSnackBar('Registration successful','close')
          //alert("Registration successful");
        } else{
        //  alert("Username already exists");
          this.openSnackBar('Username already exists','close')
        }

        this.user=new User();
      }
    );
  }


}
