import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpassverifyPage } from './forgotpassverify.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpassverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpassverifyPageRoutingModule {}
