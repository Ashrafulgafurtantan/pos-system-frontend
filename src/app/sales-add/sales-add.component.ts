import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Sale } from '../models/sales';
import { SalesAddService } from '../sales-add.service';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent implements OnInit {

  pid : string ;
  product : Product = new Product ();
  sale : Sale = new Sale();

  constructor(private salesAddService : SalesAddService) { }

  ngOnInit(): void {
  }

  addSale() : void {
    this.salesAddService.addItem(this.sale).subscribe(
      response => {
        if(response)
          alert("Product purchased successfully");
        else
          alert("Product purchase unsuccessful");

        this.sale=new Sale();
        this.product=new Product();
        this.pid=null;
      }
    )
  }

  searchItem () : void {
    this.salesAddService.searchItem(this.pid).subscribe(
      response => {
        if(response == null)
        {
          alert("Product with this id not found");
          return ;
        }
        this.product= response;

        this.sale.pid=this.product.pid;
        this.sale.price=this.product.price;
        this.sale.color=this.product.color;
        this.sale.category=this.product.category;
        this.sale.size=this.product.size;
        this.sale.brand=this.product.brand;
        this.sale.date_of_purchase="30-3-2021";
      }
    )
  }
}
