/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform, ToastController } from '@ionic/angular';
import { DataService } from './data.service';

import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_id: any;
  customer_name: any;
  whatsapp_number: any;
  public hasSubscription: boolean = false;
  sponcer_code:any;
  // hasSubscription: boolean = false;

  constructor(
    public nav: NavController,
    public http: HttpClient,
    public url: DataService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.get_profile();
    // this.sponcer_code = localStorage.getItem('sponcer_code');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      color: "light",
      message: message,
      position: "bottom",
      duration: 3500
    });
    toast.present();
  }


  get_profile() {
    this.user_id = localStorage.getItem('user_id');
    this.sponcer_code = localStorage.getItem('sponcer_code');
    // alert(this.sponcer_code);

    this.http.get(`${this.url.serverUrl}get_user?id=${this.user_id}`).subscribe(
      (response: any) => {
        if (response.status === true) {
          // this.sponcer_code = response.data.sponcer_code;
          // sessionStorage.setItem('sponcer_code', this.sponcer_code); 
          this.sponcer_code = response.data.sponcer_code;
          sessionStorage.setItem('sponcer_code', this.sponcer_code);

          if (response.data.validity && response.data.remaining_validity_days) {
            this.hasSubscription = true;
          }
          // localStorage.setItem('sponcer_code', response.data.sponcer_code);
        } else {
          this.hasSubscription = false;
          // Handle case when response status is not true
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // get_profile() {
  //   this.user_id = localStorage.getItem('user_id');
  //   console.log(this.user_id, 55);

  //   this.http
  //     .get(`${this.url.serverUrl}get_user?id=${this.user_id}`)
  //     .subscribe(
  //       (response: any) => {
  //         alert
  //         console.log(response, 78);
  //         if (response.status == true) {
  //           console.log(response.data);
  //           this.customer_name = response.data.customer_name;
  //           this.whatsapp_number = response.data.whatsapp_number;
  //           console.log(this.customer_name);
  //         } else {
  //           // Handle case when response status is not true
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }

}
