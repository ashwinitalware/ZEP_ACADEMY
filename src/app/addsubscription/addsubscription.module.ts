import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsubscriptionPageRoutingModule } from './addsubscription-routing.module';

import { AddsubscriptionPage } from './addsubscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsubscriptionPageRoutingModule
  ],
  declarations: [AddsubscriptionPage]
})
export class AddsubscriptionPageModule {}
