import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginPageRoutingModule } from './login-page-routing.module';
// In your App's module:
imports: [NgChartsModule];
@NgModule({
  declarations: [
LoginPageComponent
  ],
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
})
export class LoginPageModule { }
