import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sales';
import { SalesReportService } from '../sales-report.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  sales : Sale [] = [];
  displayedColumns: string[] = ["pid", "price", "category", "size", "color", "brand", "date_of_purchase"];

  constructor(private salesReportService : SalesReportService,
              public userService : UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.salesReportService.getReport().subscribe(
      response => {
        this.sales=response;
      }
    );
  }

}
