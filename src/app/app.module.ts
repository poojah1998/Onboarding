import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminSurveyorsComponent } from './admin-surveyors/admin-surveyors.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminReportComponent,
        AdminVendorsComponent,
        AdminSurveyorsComponent,
        SidebarComponent,
        HeaderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminDashboardComponent
    ]
})
export class AppModule { }
