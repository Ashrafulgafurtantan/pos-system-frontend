import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { StaffGuardService } from './staff-guard.service';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { StockAddComponent } from './stock-add/stock-add.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockUpdateComponent } from './stock-update/stock-update.component'
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesAddComponent } from './sales-add/sales-add.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceReportComponent } from './service-report/service-report.component';
import { ServiceViewComponent } from './service-view/service-view.component';
import { ServiceUpdateComponent } from './service-update/service-update.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { ReportComponent } from './report/report.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StaffPanelComponent } from './staff-panel/staff-panel.component';
import { ProfileComponent } from './profile/profile.component';
import {StartingPageComponent} from './starting-page/starting-page.component';

const appRoutes: Routes = [

    { path: '', redirectTo: 'starting-page', pathMatch: 'full' },
    { path: 'starting-page', component: StartingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: UserComponent },
    { path: 'manage-stock', component: ManageStockComponent, canActivate : [AuthGuardService,AdminGuardService] },
    { path: 'register', component: RegisterComponent, canActivate : [AuthGuardService,AdminGuardService] },
    { path: 'add-stock', component: StockAddComponent, canActivate : [AuthGuardService,AdminGuardService] },
    { path: 'update-stock', component: StockUpdateComponent, canActivate : [AuthGuardService,AdminGuardService] },
    { path: 'delete-stock', component: StockDeleteComponent, canActivate : [AuthGuardService,AdminGuardService] },
    { path: 'stock-report', component: StockReportComponent, canActivate : [AuthGuardService] },
    { path: 'sales-add', component: SalesAddComponent, canActivate : [AuthGuardService,StaffGuardService] },
    { path: 'customer-service', component: CustomerServiceComponent, canActivate : [AuthGuardService] },
    { path: 'services-add', component: ServiceAddComponent, canActivate : [AuthGuardService] },
    { path: 'services-update', component: ServiceUpdateComponent, canActivate : [AuthGuardService] },
    { path: 'services-view', component: ServiceViewComponent, canActivate : [AuthGuardService] },
    { path: 'reports', component: ReportComponent, canActivate : [AuthGuardService] },
    { path: 'services-report', component: ServiceReportComponent, canActivate : [AuthGuardService] },
    { path: 'sales-report', component: SalesReportComponent, canActivate : [AuthGuardService] },
    { path: 'admin-panel', component: AdminPanelComponent, canActivate : [AuthGuardService,AdminGuardService]},
    { path: 'staff-panel', component: StaffPanelComponent, canActivate : [AuthGuardService,StaffGuardService] },
    { path: 'profile', component: ProfileComponent, canActivate : [AuthGuardService] }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
})


export class AppRoutesModule { }
