import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-level-status',
  templateUrl: './level-status.page.html',
  styleUrls: ['./level-status.page.scss'],
})
export class LevelStatusPage implements OnInit {

  user_id: any;
  allsubscription: any[] = [];


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

  getsubscribertotal() {
    this.user_id = localStorage.getItem('user_id');
    const requestData = {
      user_id: this.user_id,
    };
  
    this.http.post(`${this.url.serverUrl}subscriber_and_unsubscriber_and_total`, requestData).subscribe(
      (res: any) => {
        // Assuming res is an array of subscriptions
        this.allsubscription = [res]; // Wrap the response in an array
        console.log(this.allsubscription, 67);
        
      },
      (err) => {
        console.error(err);
      }
    );
  }


}
