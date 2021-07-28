import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockReportService } from '../stock-report.service';
import { UserService } from '../user.service';
import {StockDeleteService} from '../stock-delete.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {

  stock : Product [] = [];
  displayedColumns: string[] = ["pid", "price", "category", "size", "color", "brand", "date_of_entry","delete"];
  constructor(private stockReportService : StockReportService,private stockDeleteService : StockDeleteService,private _snackBar: MatSnackBar,
              public userService : UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.stockReportService.getReport().subscribe(
      response => {
        this.stock=response;
      }
    );
  }

  addDataToSock(){
    console.log("hello");
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 2000
    });
  }

  deleteDataFromSock(product:Product){
    console.log(product);
    this.stockDeleteService.deleteItem(product).subscribe(
      response => {
        if(response){
          this.openSnackBar("Product deleted successfully",'close');
          this.loadData();
        }

      }
    )
  }

}
