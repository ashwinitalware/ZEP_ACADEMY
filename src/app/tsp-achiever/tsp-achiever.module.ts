import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TspAchieverPageRoutingModule } from './tsp-achiever-routing.module';

import { TspAchieverPage } from './tsp-achiever.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TspAchieverPageRoutingModule
  ],
  declarations: [TspAchieverPage]
})
export class TspAchieverPageModule {}
