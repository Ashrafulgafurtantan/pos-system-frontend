import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { StockAddComponent } from './stock-add/stock-add.component';
import { StockAddService } from './stock-add.service';
import { StockReportComponent } from './stock-report/stock-report.component';
import { StockReportService } from './stock-report.service';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockDeleteService } from './stock-delete.service';
import { StockUpdateComponent } from './stock-update/stock-update.component'
import { StockUpdateService } from './stock-update.service';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesReportService } from './sales-report.service';
import { SalesAddComponent } from './sales-add/sales-add.component';
import { SalesAddService } from './sales-add.service';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceAddService } from './service-add.service';
import { ServiceReportComponent } from './service-report/service-report.component';
import { ServiceReportService } from './service-report.service';
import { ServiceViewComponent } from './service-view/service-view.component';
import { ServiceViewService } from './service-view.service';
import { ServiceUpdateComponent } from './service-update/service-update.component';
import { ServiceUpdateService } from './service-update.service';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { ReportComponent } from './report/report.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { RegisterComponent } from './register/register.component';
import { RegisterServiceService } from './register-service.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StaffPanelComponent } from './staff-panel/staff-panel.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AdminGuardService } from './admin-guard.service';
import { StaffGuardService } from './staff-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StockAddComponent,
    StockReportComponent,
    StockDeleteComponent,
    StockUpdateComponent,
    SalesReportComponent,
    SalesAddComponent,
    ServiceAddComponent,
    ServiceReportComponent,
    ServiceViewComponent,
    ServiceUpdateComponent,
    CustomerServiceComponent,
    ReportComponent,
    ManageStockComponent,
    RegisterComponent,
    AdminPanelComponent,
    StaffPanelComponent,
    HomeComponent,
    ProfileComponent,
    StartingPageComponent,
    TopBarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [
    UserService,
    StockAddService,
    StockReportService,
    StockDeleteService,
    StockUpdateService,
    SalesReportService,
    SalesAddService,
    ServiceAddService,
    ServiceReportService,
    ServiceViewService,
    ServiceUpdateService,
    RegisterServiceService,
    AuthGuardService,
    AdminGuardService,
    StaffGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
