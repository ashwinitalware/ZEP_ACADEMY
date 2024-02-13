import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelStatusPageRoutingModule } from './level-status-routing.module';

import { LevelStatusPage } from './level-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelStatusPageRoutingModule
  ],
  declarations: [LevelStatusPage]
})
export class LevelStatusPageModule {}
