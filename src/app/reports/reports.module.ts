import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReportsComponent } from './reports.component';
import { NgChartsModule } from 'ng2-charts';

// In your App's module:
imports: [NgChartsModule];
@NgModule({
  declarations: [
    // ReportsComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
})
export class ReportsModule { }
