import { NgModule } from '@angular/core';
import { TradingBotComponent } from './trading-bot.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TradingBotRoutingModule } from './trading-bot-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
// TradingBotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TradingBotRoutingModule,
    // NgCircleProgressModule.forRoot(),
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
        "outerStrokeColor": "#1f5289",
        "outerStrokeGradientStopColor": "#60a8f0",
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
export class TradingBotModule { }
