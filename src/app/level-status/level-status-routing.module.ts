import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelStatusPage } from './level-status.page';

const routes: Routes = [
  {
    path: '',
    component: LevelStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelStatusPageRoutingModule {}
