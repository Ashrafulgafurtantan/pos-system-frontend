import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceUpdateService } from '../service-update.service';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {

  pid : string;
  service : Service = new Service();

  constructor(private serviceUpdateService : ServiceUpdateService) { }

  ngOnInit(): void {
  }

  searchService() : void {
    this.serviceUpdateService.searchService(this.pid).subscribe(
      response => {
        if(response == null)
        {
          alert("product with this id not found");
          return ;
        }
        this.service = response;
      }
    )
  }

  updateService() : void {
    this.serviceUpdateService.updateService(this.service).subscribe(
      response => {
        if(response)
        {
          alert("service updated successfully");
          this.service=new Service();
          this.pid=null;
        }
      }
    )
  }
}
