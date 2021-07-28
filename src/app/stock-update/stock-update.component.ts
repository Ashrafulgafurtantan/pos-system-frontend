import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockUpdateService } from '../stock-update.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent implements OnInit {

  pid : string;
  productForm: FormGroup;
  searchForm: FormGroup;
  product : Product = new Product();

  constructor(private stockUpdateService : StockUpdateService,private _snackBar: MatSnackBar) {
this.initializeForm();
  }

  ngOnInit(): void {
  }
   initializeForm() {
    this.productForm = new FormGroup({
      pid:new FormControl("", Validators.required),
      price:new FormControl("", Validators.required),
      category:new FormControl("", Validators.required),
      size:new FormControl("", Validators.required),
      color:new FormControl("", Validators.required),
      brand:new FormControl("", Validators.required),
      date_of_entry:new FormControl("", Validators.required),
    });

    this.searchForm = new FormGroup({
      pid:new FormControl('', Validators.required),
    });
  }

  setFormData() {
    this.productForm = new FormGroup({
      pid:new FormControl(this.product.pid, Validators.required),
      price:new FormControl(this.product.price, Validators.required),
      category:new FormControl(this.product.category, Validators.required),
      size:new FormControl(this.product.size, Validators.required),
      color:new FormControl(this.product.color, Validators.required),
      brand:new FormControl(this.product.brand, Validators.required),
      date_of_entry:new FormControl(this.product.date_of_entry, Validators.required),
    });
  }

  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
  }

  updateItem () : void {
    this.product = this.productForm.value;
    this.stockUpdateService.updateItem(this.product).subscribe(
      response => {
        if(response)
          this.openSnackBar("Product updated successfully",'close')
        this.product = new Product();
        this.pid=null;
      }
    )
  }

  searchItem () : void {
   let temp = this.searchForm.value;
    this.pid = temp.pid;
    this.stockUpdateService.searchItem(this.pid).subscribe(
      response => {
        if(response == null)
        {
          alert("No Product Found");
          return ;
        }
        this.product= response;
        this.setFormData();
      }
    )
  }
}
