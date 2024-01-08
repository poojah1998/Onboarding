import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTvcRoutingModule } from './admin-tvc-routing.module';
import { AdminTvcComponent } from './admin-tvc/admin-tvc.component';


@NgModule({
  declarations: [
    AdminTvcComponent
  ],
  imports: [
    CommonModule,
    AdminTvcRoutingModule
  ]
})
export class AdminTvcModule { }
