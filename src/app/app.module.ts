import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminSurveyorsComponent } from './admin-surveyors/admin-surveyors.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from 'src/firebase-config';
import { AngularFireModule } from '@angular/fire/compat';
import { ApiService } from './api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        AdminReportComponent,
        AdminVendorsComponent,
        AdminSurveyorsComponent,
        AdminDashboardComponent,
        
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        NgbModule,
        FormsModule,
        
    ],
    exports: [
        
      ]
})
export class AppModule {
    constructor() {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
       
      }
    
 }

