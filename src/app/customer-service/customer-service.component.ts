import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }

}
