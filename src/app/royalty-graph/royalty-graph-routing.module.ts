import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoyaltyGraphPage } from './royalty-graph.page';

const routes: Routes = [
  {
    path: '',
    component: RoyaltyGraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyaltyGraphPageRoutingModule {}
