import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.page.html',
  styleUrls: ['./newregistration.page.scss'],
})
export class NewregistrationPage implements OnInit {

  zep_id: any;
  sponcer_code: any;
  name: any;
  email: any;
  address: any;
  pincode: any;
  area: any;
  city: any;
  state: any;
  password: any;

  mobileNumber: any;
  sponser_code:any;
  user_id1: any;
  mobile: any;
  user_id: any;
  allspa: any;

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
    this.get_sponsor_by_user_id();
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
        } else {
          console.error('Error: Registration data retrieval failed.');
        }
      },
      (err) => {
        console.error('Error during registration data retrieval:', err);
      }
    );
  }

  get_sponsor_by_user_id() {
    this.user_id = localStorage.getItem('user_id');
    const requestData = {
      user_id: this.user_id,
    };
    this.http.post(`${this.url.serverUrl}get_sponsor_by_user_id`, requestData).subscribe(
      (res: any) => {
        alert(res);
        console.log(res.data, 77);
        this.allspa = res.data;
        console.log(this.allspa, 77);
        
        this.sponcer_code = res.data.sponcer_code; // Assign the sponsor's code to the sponcer_code variable
      },
      (err) => {
        console.error('Error during registration data retrieval:', err);
      }
    );
  }
  

  register_user(f: NgForm) {
    this.user_id = localStorage.getItem('user_id');
    const update_data = {
      user_id: this.user_id,
      zep_id: f.value.zep_id,
      sponcer_code: this.user_id,
      email: f.value.email,
      name: f.value.name,
      address: f.value.address,
      pincode: f.value.pincode,
      area: f.value.area,
      city: f.value.city,
      state: f.value.state,
      password: f.value.password,
      mobile: f.value.mobile,
    };

    this.url.presentLoading();
    this.url.dismiss();
    console.log(update_data);

    this.http
      .post(`${this.url.serverUrl}refer_user_registration`, update_data)
      .subscribe(
        (res: any) => {
          this.url.dismiss();
          console.log(res, 89);
          this.url.presentToast('You have Registered Member Successfully !');
          f.resetForm();
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          this.url.dismiss();
        }
      );
  }

}
