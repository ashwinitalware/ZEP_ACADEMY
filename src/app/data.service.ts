import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
   // code for sidemenu start
   private fooSubject = new Subject<any>();
   publishSomeData(data: any) {
     this.fooSubject.next(data);
   }
   getObservable(): Subject<any> {
     return this.fooSubject;
   }
   // code for sidemenu End
   
  contact_no: any;
  isLoading: any;
  str: any;
  
  serverUrl = 'https://demo.lakshitsolution.com/Zep_Academy_new/public/api/';
    imageUrl ='https://demo.lakshitsolution.com/Zep_Academy_new/public/images/slider/'
    imageUrl1 ='https://demo.lakshitsolution.com/Zep_Academy_new/public/images/'
    imageUrl2 ='https://demo.lakshitsolution.com/Zep_Academy_new/public/images/gallery'

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController
  ) {}

  async presentToast(str: string) {
    const toast = await this.toastCtrl.create({
      message: str,
      cssClass: 'toast-scheme',
      duration: 3000,
    });
    toast.present();
  }
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        // duration: 5000,
      })
      .then((a) => {
        a.present().then(() => {
          console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }
}
