import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from  "@angular/router";
import {CommonService} from '../common.service';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = new User();
  user1 : User = new User();
  loginForm: FormGroup;
  public error : boolean = false;
  retUrl : string = "home";

  constructor(private userService : UserService,
              private router : Router,
              private commonService:CommonService,
              private activatedRoute : ActivatedRoute) {
    this.initializeForm();
  }



  ngOnInit(): void {
    let isLoggedIn = localStorage.getItem('isLogin');
    if(isLoggedIn){
      this.router.navigate(["starting-page"]);
    }
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.retUrl = params.get('retUrl');
    });

  }


  initializeForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }



  login() : void {
    this.user1 = this.loginForm.value;
    this.userService.onLogin(this.user1).subscribe(response=>{
      // @ts-ignore
      localStorage.setItem("isLogin",response);
      if(response){
        this.userService.searchUser(this.user1.username).subscribe(response1=>{
          console.log(response1);
          this.userService.setLocalValues(response,response1);
          localStorage.setItem("currentUser",JSON.stringify(response1));
          this.commonService.sendUpdate('wwdqwd');
          if(response1.role.toUpperCase()==="ADMIN"){
            this.router.navigate(["admin-panel"])
          }else  if(response1.role.toUpperCase()==="STAFF"){
            this.router.navigate(["staff-panel"])
          }

        });
      } else {
        alert("Username or Password does not match");
        this.router.navigate(["login"])
      }
      this.user1=new User();
    });
  }

}
