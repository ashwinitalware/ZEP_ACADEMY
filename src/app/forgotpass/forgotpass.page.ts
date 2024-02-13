import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  newpassword:any;
  confirm_password:any;
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

    this.route.params.subscribe(params => {
      this.mobileNumber = params['mobile'];
    });
  }




  changepass(f: NgForm) {
  const update_data = {
    confirm_password: f.value.confirm_password,
    mobile:this.mobileNumber,
  };
  this.url.presentLoading();
  this.url.dismiss();
  console.log(update_data);

  this.http
    .post(`${this.url.serverUrl}forget_change_password`, update_data)
    .subscribe(
      (res: any) => {
        this.url.dismiss();
        console.log(res);
        this.url.presentToast('Your password has been change Successfully');
        f.resetForm();
        this.router.navigate(['/login']);
      },
      (err) => {
        this.url.dismiss();
      }
    );
}


}
