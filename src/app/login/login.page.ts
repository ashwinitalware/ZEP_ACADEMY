import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user_id: any;
  s: any;
  mobile: any;
  user_id1: any;
  sponcer_code:any;

  constructor(
    public nav: NavController,
    public http: HttpClient,
    public url: DataService,
    public toastController: ToastController
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      color: "dark",
      message: message,
      position: "bottom",
      duration: 3500
    });
    toast.present();
  }

  login_submit(formData: NgForm) {
    if (formData.value.mobile && formData.value.password) {
      console.log(formData.value);
      this.http
        .post(`${this.url.serverUrl}user_login`, formData.value)
        .subscribe(
          async (response: any) => {
            if (response.status) {
              console.log(response);
              localStorage.setItem('user_id', response.data.id);
              this.user_id = localStorage.getItem('user_id');
              console.log(this.user_id, 66);

              localStorage.setItem('sponcer_code', response.data.sponcer_code);
              this.sponcer_code = localStorage.getItem('sponcer_code');
              console.log(this.sponcer_code, 66);
              this.nav.navigateForward("dashboard");
              this.presentToast('Login successful!');
            } else {
              if (response.message === 'Password is incorrect') {
                this.presentToast('Password is incorrect');
              } else {
                this.presentToast(response.message);
                console.log(response.message);
              }
            }
          },
          (err) => {
            console.error(err);
            this.presentToast('An error occurred. Please try again.');
          }
        );
    } else {
      this.presentToast('Please enter valid username and password!');
    }
  }
  
  // async presentSuccessToast(message: string) {
  //   const toast = await this.toastController.create({
  //     message: message,
  //     duration: 2000,
  //     color: 'success'
  //   });
  //   toast.present();
  // }
  
  // async presentSuccessToast(message: string) {
  //   const toast = await this.toastController.create({
  //     message: message,
  //     duration: 2000,
  //     color: 'success'
  //   });
  //   toast.present();
  // }

  // user_id: any;
  // s: any;
  // mobile: any;
  // user_id1: any;

  // constructor(
  //   public nav: NavController,
  //   public http: HttpClient,
  //   public url: DataService,
  //   public toastController: ToastController
  // ) {}

  // // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  // ngOnInit() {
  // }

  // async presentToast(message: string) {
  //   const toast = await this.toastController.create({
  //     color: "light",
  //     message: message,
  //     position: "bottom",
  //     duration: 3500
  //   });
  //   toast.present();
  // }

  // login_submit(formData: NgForm) {
  //   if (formData.value.mobile && formData.value.password) {
  //     console.log(formData.value);
  //     this.http
  //       .post(`${this.url.serverUrl}user_login`, formData.value)
  //       .subscribe(
  //         async (response: any) => {
  //           if (response.status) {
  //             console.log(response);
  //             localStorage.setItem('user_id', response.data.id);
  //             this.user_id = localStorage.getItem('user_id');
  //             console.log(this.user_id, 66);
  //             this.nav.navigateForward("dashboard");
  //           } else {
  //             this.presentToast(response.message);
  //             console.log(response.message);
  //           }
  //         },
  //         (err) => {
  //           console.error(err);
  //           this.presentToast('An error occurred. Please try again.');
  //         }
  //       );
  //   } else {
  //     this.presentToast('Please enter valid username and password!');
  //   }
  // }
}
