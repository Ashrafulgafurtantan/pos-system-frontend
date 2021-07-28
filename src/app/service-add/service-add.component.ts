import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sales';
import { Service } from '../models/service';
import { ServiceAddService } from '../service-add.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  sale : Sale = new Sale();
  service : Service = new Service();
  pid : string;

  constructor(private serviceAddService : ServiceAddService) { }

  ngOnInit(): void {
  }

  addService() : void {
    this.serviceAddService.addService(this.service).subscribe(
      response => {
        if(response)
          alert("Service Added Successfully");
        else
          alert("Product is under servicing");

        this.service=new Service();
        this.sale=new Sale();
        this.pid=null;
      }
    )
  }

  searchSale() : void {
    this.serviceAddService.searchItem(this.pid).subscribe(
      response => {
        if(response == null)
        {
          alert("Product with this id not sold yet");
          return ;
        }

        this.sale = response;

        this.service.pid= this.sale.pid;
        this.service.price=this.sale.price;
        this.service.color=this.sale.color;
        this.service.category=this.sale.category;
        this.service.size=this.sale.size;
        this.service.brand=this.sale.brand;
        this.service.date_of_purchase=this.sale.date_of_purchase;

      }
    )
  }
}
