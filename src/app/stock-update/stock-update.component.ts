import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockUpdateService } from '../stock-update.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent implements OnInit {

  pid : string;
  product : Product = new Product();

  constructor(private stockUpdateService : StockUpdateService) { }

  ngOnInit(): void {
  }

  updateItem () : void {
    this.stockUpdateService.updateItem(this.product).subscribe(
      response => {
        if(response)
          alert("Product updated successfully");
        
        this.product = new Product();
        this.pid=null;
      }
    )
  }

  searchItem () : void {
    this.stockUpdateService.searchItem(this.pid).subscribe(
      response => {
        if(response == null)
        {
          alert("Product with this id not found");
          return ;
        }
        this.product= response;
      }
    )
  }
}
