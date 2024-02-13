import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  allsubscription: any;
  user_id: any;
  subscriber_name:any;
  value: any;
  validity: any;
  subscriber_image:any;
  toastController: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    public url: DataService,
    private modalCtrl: ModalController,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  ionViewWillEnter() {    
      this.url.presentLoading();
      this.get_subscriber_plans();
      this.url.dismiss();
  }
 
  
  get_subscriber_plans() {
    const requestData = {};
    this.http.post(`${this.url.serverUrl}get_subscriber_plans`, requestData).subscribe(
      (res: any) => {
               if (res.status && res.data.length > 0) {
          this.allsubscription = res.data;
          console.log(res, 80);
        } else {
          this.url.presentToast('You have no Banner added.');
        }
      },
      (err) => {
        console.error(err);
        this.url.presentToast('An error occurred.');
      },
      () => {
        this.url.dismiss();
      }
    );
  }

  addsubscription(subscriptionId: string) {
    this.user_id = localStorage.getItem('user_id'); 
    const requestData = {
        user_id: this.user_id,
        subscription_id: subscriptionId, 
    };

    this.http.post(`${this.url.serverUrl}subscriber_plan_post_by_user`, requestData).subscribe(
        (res: any) => {
            if (res.success) { // Check if the success field is true
                console.log(res.message);
                this.router.navigate(['/addsubscription']);
            } else {
                console.error(res.message);
                // Handle the error here or show an appropriate message
            }
        },
        (err) => {
            console.error(err);
            // Handle the error here or show an appropriate message
        }
    );
}

// Toast method
async presentToast(message: string) {
    const toast = await this.toastController.create({
        color: 'dark',
        message: message,
        position: 'bottom',
        duration: 3500
    });
    toast.present();
}

  }
