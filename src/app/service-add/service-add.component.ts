import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sales';
import { Service } from '../models/service';
import { ServiceAddService } from '../service-add.service';
import {Product} from '../models/product';
import {StockAddService} from '../stock-add.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  sale : Sale = new Sale();
  service : Service = new Service();
  pid : string;
  serviceForm: FormGroup;

  constructor(private serviceAddService : ServiceAddService,private _snackBar: MatSnackBar) {  this.initializeForm();}

  ngOnInit(): void {
  }
  initializeForm() {
    this.serviceForm = new FormGroup({
      customer_name:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      service_date:new FormControl('', Validators.required),
      return_date:new FormControl('', Validators.required),
      service_charge:new FormControl('', Validators.required),
      pid:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required),
      category:new FormControl('', Validators.required),
      size:new FormControl('', Validators.required),
      color:new FormControl('', Validators.required),
      brand:new FormControl('', Validators.required),
      date_of_purchase:new FormControl('', Validators.required),
    });

  }


  setServiceValue(){
      this.serviceForm = new FormGroup({
        customer_name:new FormControl('', Validators.required),
        address:new FormControl('', Validators.required),
        phone:new FormControl('', Validators.required),
        service_date:new FormControl('', Validators.required),
        return_date:new FormControl('', Validators.required),
        service_charge:new FormControl('', Validators.required),
        pid:new FormControl(this.sale.pid, Validators.required),
        price:new FormControl(this.sale.price, Validators.required),
        category:new FormControl(this.sale.category, Validators.required),
        size:new FormControl(this.sale.size, Validators.required),
        color:new FormControl(this.sale.color, Validators.required),
        brand:new FormControl(this.sale.brand, Validators.required),
        date_of_purchase:new FormControl(this.sale.date_of_purchase, Validators.required),
      });

    }


  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
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
        this.setServiceValue();

      }
    )
  }
}
