import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-route.module';
import { NgChartsModule } from 'ng2-charts';
import { ReportsComponent } from '../reports/reports.component';
import { TradingBotComponent } from '../trading-bot/trading-bot.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
DashboardComponent,
ReportsComponent,
TradingBotComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#000000",
      "backgroundOpacity": 0.9,
      "backgroundStroke": "#030303",
      "backgroundStrokeWidth": 39,
      "radius": 80,
      "space": -10,
      "unitsColor": "#4d2828",
      "outerStrokeGradient": true,
      "outerStrokeWidth": 11,
      "outerStrokeColor": "#f86060",
      "outerStrokeGradientStopColor": "#fa8686",
      "innerStrokeColor": "#f3f4f7",
      "innerStrokeWidth": 9,
      "title": "UI",
      "titleColor": "#FFFFFF",
      "subtitleColor": "#5a597d",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true})

  ],
})
export class DashboardModule { }
