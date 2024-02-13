import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassverifyPageRoutingModule } from './forgotpassverify-routing.module';

import { ForgotpassverifyPage } from './forgotpassverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassverifyPageRoutingModule
  ],
  declarations: [ForgotpassverifyPage]
})
export class ForgotpassverifyPageModule {}
