import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  allgallery: any;
  switchTab: string = 'current';

  segmentChanged(event: any) {
    this.switchTab = event.detail.value;
  }

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
      this.get_notification();
      this.url.dismiss();
  }


  get_notification() {
    const requestData = {};
  
    this.http.post(`${this.url.serverUrl}get_gallery`, requestData).subscribe(
      (res: any) => {
        if (res.status && res.data.length > 0) {
          this.allgallery = res.data;
          console.log(res, 80);
        } else {
          this.url.presentToast('You have no Banner added.');
        }
      },
      (err) => {
        // Handle errors if needed
      }
    );
  }

}
