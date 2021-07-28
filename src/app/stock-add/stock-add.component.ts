import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockAddService } from '../stock-add.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit {
  productForm: FormGroup;
  product : Product = new Product();
  constructor(private stockAddService : StockAddService,private _snackBar: MatSnackBar) {
    this.initializeForm();
  }


  ngOnInit(): void {
  }

  initializeForm() {
    this.productForm = new FormGroup({
      pid:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required),
      category:new FormControl('', Validators.required),
      size:new FormControl('', Validators.required),
      color:new FormControl('', Validators.required),
      brand:new FormControl('', Validators.required),
      date_of_entry:new FormControl('', Validators.required),
    });
  }

  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action,{
      duration: 2000
    });
  }
  addItem() : void {
    this.product = this.productForm.value;
    console.log(this.product);
    this.stockAddService.addItem(this.product).subscribe (
      response => {
        if(response == true){
          this.openSnackBar("Item added successfully",'close')
        }else{
          this.openSnackBar("Product id already exists",'close');
        }
        this.product = new Product();
      }
    );
  }
}
