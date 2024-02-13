import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyaltyGraphPageRoutingModule } from './royalty-graph-routing.module';

import { RoyaltyGraphPage } from './royalty-graph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyaltyGraphPageRoutingModule
  ],
  declarations: [RoyaltyGraphPage]
})
export class RoyaltyGraphPageModule {}
