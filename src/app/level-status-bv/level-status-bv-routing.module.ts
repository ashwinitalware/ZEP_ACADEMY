import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelStatusBVPage } from './level-status-bv.page';

const routes: Routes = [
  {
    path: '',
    component: LevelStatusBVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelStatusBVPageRoutingModule {}
