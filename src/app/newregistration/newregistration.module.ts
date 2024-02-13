import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewregistrationPageRoutingModule } from './newregistration-routing.module';

import { NewregistrationPage } from './newregistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewregistrationPageRoutingModule
  ],
  declarations: [NewregistrationPage]
})
export class NewregistrationPageModule {}
