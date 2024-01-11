import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminSurveyorsComponent } from './admin-surveyors/admin-surveyors.component';
import { RecentVendorsComponent } from './recent-vendors/recent-vendors.component';
import { SurveyorsComponent } from './surveyors/surveyors.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminReportComponent,
        AdminVendorsComponent,
        AdminSurveyorsComponent,
        SurveyorsComponent,
        AdminDashboardComponent,
        RecentVendorsComponent,
        SurveyorsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
    ],
    exports: [
        RecentVendorsComponent,
        SurveyorsComponent
      ]
})
export class AppModule { }
