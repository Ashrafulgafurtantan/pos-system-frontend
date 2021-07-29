import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Sale } from '../models/sales';
import { SalesAddService } from '../sales-add.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StockUpdateService} from '../stock-update.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import {Service} from '../models/service';
import {ServiceAddService} from '../service-add.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css'],
  providers: [DatePipe]
})
export class SalesAddComponent implements OnInit {

  pid : string ;
  temp:Sale[]= [];
  product : Product = new Product ();
  sale : Sale = new Sale();
  searchForm: FormGroup;
  showSaleTable:boolean =false;
  showServiceForm:boolean = false;
  displayedColumns: string[] = ["pid", "price", "category",
    "size", "color", "brand", "date_of_purchase","sold"

  ];
  service : Service = new Service();
  serviceForm: FormGroup;

  currentDate:string;

  constructor(private serviceAddService : ServiceAddService,private router:Router,private salesAddService : SalesAddService,private datePipe: DatePipe,private _snackBar: MatSnackBar) {
    this.initializeForm();
   let myDate = new Date();
    this.currentDate = this.datePipe.transform(myDate, 'dd-MM-yyyy').toString();

  }

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

    this.searchForm = new FormGroup({
      pid:new FormControl('', Validators.required),
    });

  }

  setFormData() {
    this.sale.pid =this.product.pid;
    this.sale.price =this.product.price;
    this.sale.category =this.product.category;
    this.sale.size =this.product.size;
    this.sale.color =this.product.color;
    this.sale.brand =this.product.brand;
    this.sale.date_of_purchase = this.currentDate;
    this.temp.push(this.sale);
    this.showSaleTable = true;

    this.serviceForm = new FormGroup({
      customer_name:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      service_date:new FormControl('', Validators.required),
      return_date:new FormControl('', ),
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
    this.service = this.serviceForm.value;

    this.serviceAddService.addService(this.service).subscribe(
      response => {
        if(response){
          this.openSnackBar("Service Added Successfully",'close');
          this.router.navigate(["starting-page"], );
        }

        else{
          this.openSnackBar("Product is under servicing",'close');
        }

        this.service=new Service();
        this.sale=new Sale();
        this.pid=null;
      }
    )
  }

  addSale(temp:Sale) : void {
    this.salesAddService.addItem(temp).subscribe(
      response => {
        if(response){
          this.openSnackBar("Product Sold successfully",'close');
          this.showSaleTable = false;
          this.showServiceForm = true;
        }

        else{
          this.openSnackBar("Product Sold unsuccessful",'close');

        }

        // this.product=new Product();
        // this.pid=null;
      }
    )
  }

  searchItem () : void {
    let temp = this.searchForm.value;
    this.pid = temp.pid;
    this.salesAddService.searchItem(this.pid).subscribe(
      response => {
        if(response == null)
        {
          alert("Product with this id not found");
          return ;
        }
        this.product= response;
        this.setFormData();


      }
    )
  }
}
