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
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from 'src/firebase-config';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
    declarations: [
        AppComponent,
        AdminReportComponent,
        AdminVendorsComponent,
        AdminSurveyorsComponent,
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
        AngularFirestoreModule
     
    ],
    exports: [
        RecentVendorsComponent,
        SurveyorsComponent
      ]
})
export class AppModule {
    constructor() {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
       
      }
    
 }

