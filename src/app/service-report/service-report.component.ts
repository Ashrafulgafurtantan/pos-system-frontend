import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../models/service';
import { ServiceReportService } from '../service-report.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.component.html',
  styleUrls: ['./service-report.component.css']
})
export class ServiceReportComponent implements OnInit {

  services : Service [] = [];
  displayedColumns: string[] = [
    'pid',
   'price',
   'category',
   'size',
    'color',
   'brand',
   'date_of_purchase',
   'customer_name',
   'address',
   'phone',
  'service_date',
   'return_date',
   'service_charge',
  ];
  constructor(private serviceReportService : ServiceReportService,private router:Router,
              public userService : UserService) { }

  ngOnInit(): void {
    this.getReport();
  }
  onDoubleClick(element:Service){
    console.log(element);
    localStorage.setItem("updateReport",JSON.stringify(element));
    this.router.navigate(["services-update"], );
  }

  getReport() : void {
    this.serviceReportService.GetAllServices().subscribe(
      response => {
        this.services=response;
      }
    )
  }
}
