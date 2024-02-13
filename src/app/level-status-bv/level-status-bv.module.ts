import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelStatusBVPageRoutingModule } from './level-status-bv-routing.module';

import { LevelStatusBVPage } from './level-status-bv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelStatusBVPageRoutingModule
  ],
  declarations: [LevelStatusBVPage]
})
export class LevelStatusBVPageModule {}
