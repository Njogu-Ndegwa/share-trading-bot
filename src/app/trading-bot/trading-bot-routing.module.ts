import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradingBotComponent } from './trading-bot.component';

const routes: Routes = [
  {
    path: '',
    component: TradingBotComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingBotRoutingModule { }
