import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { RecentVendorsComponent } from '../recent-vendors/recent-vendors.component';
import { SurveyorsComponent } from '../surveyors/surveyors.component';



@NgModule({
  declarations: [
    RecentVendorsComponent,
    SurveyorsComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
  ]
})
export class AdminDashboardModule { }
