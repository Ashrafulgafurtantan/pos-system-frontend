import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockDeleteService } from '../stock-delete.service';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.css']
})
export class StockDeleteComponent implements OnInit {

  pid : string;
  product : Product = new Product();
  constructor(private stockDeleteService : StockDeleteService) { }

  ngOnInit(): void {
  }

  deleteItem () : void {
    this.stockDeleteService.deleteItem(this.product).subscribe(
      response => {
        if(response)
          alert("Product deleted successfully");
        
        this.product = new Product();
      }
    )
  }
  searchItem () : void {
    this.stockDeleteService.searchItem(this.pid).subscribe(
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
