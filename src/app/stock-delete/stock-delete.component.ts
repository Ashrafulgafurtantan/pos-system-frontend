import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockDeleteService } from '../stock-delete.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StockUpdateService} from '../stock-update.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.css']
})
export class StockDeleteComponent implements OnInit {

  pid : string;
  product : Product = new Product();
  productForm: FormGroup;
  searchForm: FormGroup;
  constructor(private stockDeleteService : StockDeleteService,private _snackBar: MatSnackBar) {
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



  deleteItem () : void {
    this.product = this.productForm.value;
    this.stockDeleteService.deleteItem(this.product).subscribe(
      response => {
        if(response)
          this.openSnackBar("Product deleted successfully",'close');

        this.product = new Product();
      }
    )
  }
  searchItem () : void {
    let temp = this.searchForm.value;
    this.pid = temp.pid;
    this.stockDeleteService.searchItem(this.pid).subscribe(
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
