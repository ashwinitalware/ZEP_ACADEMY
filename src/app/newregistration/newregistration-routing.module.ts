import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewregistrationPage } from './newregistration.page';

const routes: Routes = [
  {
    path: '',
    component: NewregistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewregistrationPageRoutingModule {}
