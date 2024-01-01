import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { NgChartsModule } from 'ng2-charts';
import { SignUpRoutingModule } from './sign-up-routing.module';
// In your App's module:
imports: [NgChartsModule];
@NgModule({
  declarations: [
SignUpComponent
  ],
  imports: [
    SignUpRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
})
export class SignUpModule { }
