import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { ModelSubscriptionComponent } from '../model-subscription/model-subscription.component';
import { ModalController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
// import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
// import { CustomDialogModalComponent } from '../custom-dialog-modal/custom-dialog-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('modal') modal: any;
  allslider: any;
  user_id1: any;
  hasSubscription: any;

  rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(90deg, #ffda22 0%, #fabc2b 100%)',
  };

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];
  modalController: any;
  user_id: any;
  sponcer_code: any;
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    public url: DataService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private appComponent: AppComponent,
    // private socialSharing: SocialSharing
  ) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    // this.hasSubscription = this.appComponent.hasSubscription;
    this.hasSubscription = this.appComponent.hasSubscription;
    console.log(this.appComponent.hasSubscription);
  }

  ionViewWillEnter() {
    this.url.presentLoading();
    this.getslider();
    this.get_profile();
    this.openModal();
    this.url.dismiss();
    //  this.openCustomDialogModal(); // Call the method to open the modal
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModelSubscriptionComponent, 
      cssClass: 'your-modal-css-class', 
    });
    return await modal.present();
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
          // sessionStorage.setItem('sponcer_code', this.sponcer_code);
          if (response.data.validity && response.data.remaining_validity_days) {
            this.hasSubscription = true;
          }
        } else {
          this.hasSubscription = false;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }


  getslider() {
    const requestData = {};
    this.http.post(`${this.url.serverUrl}get_slider`, requestData).subscribe(
      (res: any) => {
        if (res.status && res.data.length > 0) {
          this.allslider = res.data;
          console.log(res, 80);
        } else {
          this.url.presentToast('You have no Banner added.');
        }
      },
      (err) => {
      }
    );
  }

  socialshare() {
    const options = {
      message: 'share this', // not supported on some apps (Facebook, Instagram)
      url: 'https://play.google.com/store/apps/details?id=io.zepacademy.com',
    };
    // this.socialSharing.shareWithOptions(options);
  }
  
  
  // get_user() {
  //   this.storage.get('member').then((res1: { id: string; }) => {
  //     this.user_id1 = parseInt(res1.id, 10);
  //     this.http
  //       .get(
  //         `${this.url.serverUrl}get_user?id=${this.user_id1}`
  //       )
  //       .subscribe(
  //         (res: any) => {
  //           if (res === 0) {
  //             this.url.presentToast('You Have no Profile.');
  //           } else {
  //             console.log(res, 0);
  //             this.url.publishSomeData({
  //               name: res.user.name,
  //               mobile_number: res.user.mobile_number,
  //             });
  //           }
  //         },
  //         (err) => {
  //         }
  //       );
  //   });
  // }


}
