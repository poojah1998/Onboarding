import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminSurveyorsComponent } from './admin-surveyors/admin-surveyors.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminTvcComponent } from './admin-tvc/admin-tvc/admin-tvc.component';
import { RecentVendorsComponent } from './shared/recent-vendors/recent-vendors.component';
import { LoginComponent } from './login/login.component';
import { VendorsInformationComponent } from './vendors-information/vendors-information.component';



const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
  },
  
  {
    path:'report',
    component: AdminReportComponent
  },
  {
    path:'admin-surveyor',
    component: AdminSurveyorsComponent
  },
  {
    path:'tvc',
    component: AdminTvcComponent
  },
  {
    path:'vendors',
    component: AdminVendorsComponent
  },
  {
    path:'recent-vendors',
    component: RecentVendorsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'vendor-info',
    component: VendorsInformationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
