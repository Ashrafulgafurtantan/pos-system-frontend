import { Component, OnInit } from '@angular/core';
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

  constructor(private serviceReportService : ServiceReportService,
              public userService : UserService) { }

  ngOnInit(): void {
    this.getReport();
  }

  getReport() : void {
    this.serviceReportService.GetAllServices().subscribe(
      response => {
        this.services=response;
      }
    )
  }
}
