import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceUpdateService } from '../service-update.service';
import {Sale} from '../models/sales';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceAddService} from '../service-add.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {

  pid : string;
  service : Service = new Service();
  serviceForm: FormGroup;
  constructor(private serviceUpdateService : ServiceUpdateService,
              private serviceAddService : ServiceAddService,private router:Router,
              private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.service = JSON.parse(localStorage.getItem('updateReport'));
    this.initializeForm();
  }
  initializeForm() {
    this.serviceForm = new FormGroup({
      customer_name:new FormControl(this.service.customer_name, Validators.required),
      address:new FormControl(this.service.address, Validators.required),
      phone:new FormControl(this.service.phone, Validators.required),
      service_date:new FormControl(this.service.service_date, Validators.required),
      return_date:new FormControl(this.service.return_date,),
      service_charge:new FormControl(this.service.service_charge, Validators.required),
      pid:new FormControl(this.service.pid, Validators.required),
      price:new FormControl(this.service.price, Validators.required),
      category:new FormControl(this.service.category, Validators.required),
      size:new FormControl(this.service.size, Validators.required),
      color:new FormControl(this.service.color, Validators.required),
      brand:new FormControl(this.service.brand, Validators.required),
      date_of_purchase:new FormControl(this.service.date_of_purchase, Validators.required),
    });

  }
  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
  }
  updateService() : void {
    this.service = this.serviceForm.value;
    this.serviceUpdateService.updateService(this.service).subscribe(
      response => {
        if(response)
        {
          this.openSnackBar("service updated successfully",'close');
          this.router.navigate(['services-report'])
          this.service=new Service();
          this.pid=null;
        }
      }
    )
  }
}
