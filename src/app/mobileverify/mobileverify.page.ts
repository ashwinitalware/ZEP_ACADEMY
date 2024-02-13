import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mobileverify',
  templateUrl: './mobileverify.page.html',
  styleUrls: ['./mobileverify.page.scss'],
})
export class MobileverifyPage implements OnInit {

  showOTP: boolean = false;
  showSecondDiv: boolean = false;
  otp: any;
  mobile: any;
  mobileNumber: any;

  zep_id:any;
  sponcer_code:any;

  name:any;
  email:any;
  address:any;
  pincode:any;
  area:any;
  city:any;
  state:any;
  password:any;

  session_data = {
    user_id: '',
    mobile: '',
  };
  t1: any;
  user_id1: any;
  type_otp: any;
 
  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    public url: DataService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  generateUniqueId(): void {
    const randomDigits = Math.floor(100 + Math.random() * 900).toString();
    this.zep_id = 'ZEP' + randomDigits;
  }

  showOTPInput(f: NgForm){
    if (f.value.mobile !== '') {
      if (String(f.value.mobile).length !== 10) {
        this.url.presentToast('Please Fill 10 digit mobile Number.');
        return false;
      }
      this.url.presentLoading();
      this.session_data['mobile'] = f.value.mobile;
      this.mobile = f.value.mobile;
      this.http
        .post(`${this.url.serverUrl}send_mobile_verify_otp`, f.value)
        .subscribe(
          (res: any) => {
            console.log(res);
            {
              if (res.data == 'please register yourself') {
                this.url.presentToast(
                  'Please register yourself first from admin panel.'
                );
              } else {
                this.showOTP = true;
                this.otp = res;
                this.mobileNumber = f.value.mobile;
              }
            }
            this.url.dismiss();
          },
          (err) => {
            this.url.dismiss();
          }
        );
    } else {
      this.url.presentToast('Please Fill All Data.');
    }
    return true;
  }

  verify_submit(form: NgForm) {
    let enteredOTP = form.value.otp;
    if (enteredOTP === this.otp) {
      console.log('OTP is correct. Navigating to registration page...');
      // this.router.navigate(['/registration']);
      this.router.navigate(['/registration', { mobile: this.mobile }]);
    } else {
      console.log('Incorrect OTP. Please try again.');
      this.presentToast('Incorrect OTP. Please try again.');
    }
  }

  // verify_submit(form: NgForm) {
  //   // let enteredOTP = form.value.otp.trim(); // Trim whitespace characters

  //   let enteredOTP = form.value.otp;
  //   console.log('Type of entered OTP:', typeof enteredOTP);
  //   console.log('Entered OTP:', enteredOTP);
    
  //   // Check if entered OTP is empty or undefined
  //   if (!enteredOTP) {
  //     console.log('No OTP entered. Using default OTP: 1234');
  //     enteredOTP = '1234'; // Set default OTP
  //   }
  
  //   console.log('Entered OTP:', enteredOTP);
  
  //   if (enteredOTP === '1234') { // Check if entered OTP is the default OTP
  //     console.log('OTP is correct. Navigating to registration page...');
  //     // this.router.navigate(['/registration']);
  //     this.router.navigate(['/registration', { mobile: this.mobile }]);
  //   } else {
  //     console.log('Entered OTP does not match default OTP.');
  //     console.log('Incorrect OTP. Please try again.');
  //     this.presentToast('Incorrect OTP. Please try again.');
  //   }
  // }
  
  

  // verify_submit(form: NgForm) {
  //   let enteredOTP = form.value.otp;
    
  //   // Check if entered OTP is empty or undefined
  //   if (!enteredOTP) {
  //     console.log('No OTP entered. Using default OTP: 1234');
  //     enteredOTP = '1234'; // Set default OTP
  //   }
  
  //   console.log('Entered OTP:', enteredOTP);
  
  //   if (enteredOTP === '1234') { 
  //     console.log('OTP is correct. Navigating to registration page...');
  //     this.router.navigate(['/registration', { mobile: this.mobile }]);
  //   } else {
  //     console.log('Incorrect OTP. Please try again.');
  //     this.presentToast('Incorrect OTP. Please try again.');
  //   }
  // }

  // verify_submit1(form: NgForm) {
  //   let enteredOTP = form.value.otp.trim(); // Trim the input
  //   if (enteredOTP === '1234') { 
  //     console.log('OTP is correct. Navigating to registration page...');
  //     this.router.navigate(['/registration', { mobile: this.mobile }]);
  //   } else {
  //     console.log('Incorrect OTP. Please try again.');
  //     this.presentToast('Incorrect OTP. Please try again.');
  //   }
  // }
  
  
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom'
    });
    toast.present();
  }
  
}
