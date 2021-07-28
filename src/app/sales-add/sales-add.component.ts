import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Sale } from '../models/sales';
import { SalesAddService } from '../sales-add.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StockUpdateService} from '../stock-update.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css'],
  providers: [DatePipe]
})
export class SalesAddComponent implements OnInit {

  pid : string ;
  product : Product = new Product ();
  sale : Sale = new Sale();
 // productForm: FormGroup;
  searchForm: FormGroup;
  saleForm:FormGroup;

  currentDate:string;

  constructor(private salesAddService : SalesAddService,private datePipe: DatePipe,private _snackBar: MatSnackBar) {
    this.initializeForm();
   let myDate = new Date();
    this.currentDate = this.datePipe.transform(myDate, 'dd-MM-yyyy').toString();

  }

  ngOnInit(): void {
  }

  initializeForm() {
    this.saleForm = new FormGroup({
      pid:new FormControl("", Validators.required),
      price:new FormControl("", Validators.required),
      category:new FormControl("", Validators.required),
      size:new FormControl("", Validators.required),
      color:new FormControl("", Validators.required),
      brand:new FormControl("", Validators.required),
      date_of_purchase:new FormControl("", Validators.required),
    });

    this.searchForm = new FormGroup({
      pid:new FormControl('', Validators.required),
    });



  }

  setFormData() {
    this.saleForm = new FormGroup({
      pid:new FormControl(this.product.pid, Validators.required),
      price:new FormControl(this.product.price, Validators.required),
      category:new FormControl(this.product.category, Validators.required),
      size:new FormControl(this.product.size, Validators.required),
      color:new FormControl(this.product.color, Validators.required),
      brand:new FormControl(this.product.brand, Validators.required),
      date_of_purchase:new FormControl(this.currentDate, Validators.required),
    });
  }

  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
  }


  addSale() : void {
    this.sale = this.saleForm.value;
    this.salesAddService.addItem(this.sale).subscribe(
      response => {
        if(response)
          this.openSnackBar("Product purchased successfully",'close');
        else
          this.openSnackBar("Product purchase unsuccessful",'close');

        this.sale=new Sale();
        this.product=new Product();
        this.pid=null;
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
