import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public url: DataService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private alertController: AlertController,
    public nav: NavController,
    private toastController: ToastController
  ) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

 // Logout function
async logOut() {
  localStorage.removeItem('userId');
  this.nav.navigateForward("login");
  await this.presentToast('Logged out successfully!');
}

// Toast function
async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000, // Set duration as needed
    color: 'dark' // Set color as needed
  });
  toast.present();
}

  // logout() {
  //   this.storage.remove('member').then(() => {
  //     this.router.navigateByUrl('/login');
  //   });
  //   localStorage.clear();
  //   this.url.presentToast('Logout Successfully.');
  // }

}
