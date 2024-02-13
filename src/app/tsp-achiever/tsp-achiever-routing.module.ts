import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TspAchieverPage } from './tsp-achiever.page';

const routes: Routes = [
  {
    path: '',
    component: TspAchieverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TspAchieverPageRoutingModule {}
