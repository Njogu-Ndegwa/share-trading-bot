import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-route.module';
import { NgChartsModule } from 'ng2-charts';

// In your App's module:
imports: [NgChartsModule];
@NgModule({
  declarations: [
DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
})
export class DashboardModule { }
