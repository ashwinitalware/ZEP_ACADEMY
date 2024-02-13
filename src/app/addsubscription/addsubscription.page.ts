import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addsubscription',
  templateUrl: './addsubscription.page.html',
  styleUrls: ['./addsubscription.page.scss'],
})
export class AddsubscriptionPage implements OnInit {
  
  user_id: any;
  allsubscriptions: any;


  constructor(
    private router: Router,
    private http: HttpClient,
    public url: DataService,
  ) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  
  ionViewWillEnter() {    
      this.url.presentLoading();
      this.getsubscribertotal();
      this.url.dismiss();
  }

  // getsubscribertotal() {
  //   this.user_id = localStorage.getItem('user_id');
  //   const requestData = {
  //     user_id: this.user_id,
  //   };
  
  //   this.http.post(`${this.url.serverUrl}get_subscriber_by_id`, requestData).subscribe(
  //     (res: any) => {
  //       console.log(res , 66);
  //       this.allsubscriptions = res.data.subscriber; // Wrap the response in an array
  //       console.log(this.allsubscriptions, 67);
        
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }

  getsubscribertotal() {
    this.user_id = localStorage.getItem('user_id');
    const requestData = {
      user_id: this.user_id,
    };
  
    this.http.post(`${this.url.serverUrl}get_subscriber_by_id`, requestData).subscribe(
      (res: any) => {
        console.log(res, 66);
        // Check if res.data is an array, if not, wrap it in an array
        this.allsubscriptions = Array.isArray(res.data.subscriber) ? res.data.subscriber : [res.data.subscriber];
        console.log(this.allsubscriptions, 67);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  

}
