import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'point-of-sale';

  constructor (private  userService : UserService,
               private router : Router ) {}
  
  logout() {
    this.userService.logoutUser();
    this.router.navigate(['home']);
  }
}
