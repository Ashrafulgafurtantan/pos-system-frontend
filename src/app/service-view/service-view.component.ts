import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceViewService } from '../service-view.service';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {

  pid : string;
  service : Service = new Service();
  constructor(private serviceViewService : ServiceViewService) { }

  ngOnInit(): void {
  }

  searchService() : void {
    this.serviceViewService.searchService(this.pid).subscribe(
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

}
