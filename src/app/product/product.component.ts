import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  stock : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.loadStock();
  }

  loadStock() : void {
    this.productService.getStockReport().subscribe(
      response => {
        this.stock = response ;
      }
    )
  }

}
