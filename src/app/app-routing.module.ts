import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then(
        (m) => m.SignUpModule

      ),
  },

  {
    path: 'trading-bot',
    loadChildren: () =>
      import('./trading-bot/trading-bot.module').then(
        (m) => m.TradingBotModule

      ),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
