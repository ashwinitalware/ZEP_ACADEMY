import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

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

  mobileNumber: any;

  user_id1: any;
  mobile: any;

  constructor(
    public url: DataService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private alertController: AlertController,
    private navCtrl: NavController,
  ) { }  

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.user_registration_get();

    this.route.params.subscribe(params => {
      this.mobileNumber = params['mobile'];
    });
  }


user_registration_get() {
  const requestData = {};

  this.http.post(`${this.url.serverUrl}user_registration_fetch`, requestData).subscribe(
    (res: any) => {
      if (res.success) {
        this.zep_id = res.data.zep_id;
        this.sponcer_code = res.data.sponcer_code;
      } else {
        console.error('Error: Registration data retrieval failed.');
      }
    },
    (err) => {
      console.error('Error during registration data retrieval:', err);
    }
  );
}

register_user(f: NgForm) {
  const update_data = {
    zep_id: f.value.zep_id,
    sponcer_code: f.value.sponcer_code,
    email: f.value.email,
    name: f.value.name,
    address: f.value.address,
    pincode: f.value.pincode,
    area: f.value.area,
    city: f.value.city,
    state: f.value.state,
    password: f.value.password,
    mobile:this.mobileNumber,
  };

  this.url.presentLoading();
  this.url.dismiss();
  console.log(update_data);

  this.http
    .post(`${this.url.serverUrl}user_registration`, update_data)
    .subscribe(
      (res: any) => {
        this.url.dismiss();
        console.log(res);
        this.url.presentToast('Your Account Successfully Registered');
        f.resetForm();
        this.router.navigate(['/login']);
      },
      (err) => {
        this.url.dismiss();
      }
    );
}




}
