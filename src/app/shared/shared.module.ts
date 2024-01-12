import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SurveyorsComponent } from './surveyors/surveyors.component';
import { RecentVendorsComponent } from './recent-vendors/recent-vendors.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SurveyorsComponent,
    RecentVendorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SurveyorsComponent,
    RecentVendorsComponent
  ]
})
export class SharedModule { }
