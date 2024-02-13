import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsubscriptionPage } from './addsubscription.page';

const routes: Routes = [
  {
    path: '',
    component: AddsubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsubscriptionPageRoutingModule {}
