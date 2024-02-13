import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpClientModule, IonicStorageModule.forRoot(),FormsModule ],
  providers: [HttpClient, HttpClientModule,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
