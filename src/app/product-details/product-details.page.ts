import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  courseid: any;
  allcourses: any;
  quantity: number = 1;
  allproduct: any;
  user_id: any;

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  constructor(
    private modalCtrl: ModalController,
    public modalController: ModalController,
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    private route: ActivatedRoute,
    public url: DataService,
    private alertController: AlertController
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe((params) => {
      if (params && params['id']) {
        this.courseid = JSON.parse(params['id']);
        console.log('Course ID:', this.courseid);
        this.getproduct(this.courseid);
      }
    });
    this.url.presentLoading();
  }

  getproduct(courseid: string) {
    const requestData = { id: courseid };

    this.http.post(`${this.url.serverUrl}get_courses_against_course_id`, requestData).subscribe(
      (res: any) => {
        console.log('API Response:', res);
        if (res.status && res.data) {
          this.allcourses = res.data;  // Assuming the data is an object
          console.log('All Courses:', this.allcourses);
        } else {
          this.url.presentToast('No product found for this ID.');
        }
        this.url.dismiss();
      },
      (err) => {
        // Handle errors if needed
        this.url.dismiss();
      }
    );
  }


  getTotalItems(): number {
    // Return the total quantity
    return this.quantity;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


  // redirectrestro() {
  //   const cartArray = Array.from(this.cart);
  //   const navigationExtras: NavigationExtras = {
  //     state: { cart: cartArray }
  //   };
  //   this.router.navigate(['cart'], navigationExtras);
  // }



  addCart() {
    this.user_id = localStorage.getItem('user_id'); // Corrected key
    // alert(this.user_id)
    console.log(this.user_id, 90);
    const requestData = {
      user_id: this.user_id,
      course_id: this.courseid,
      quantity: this.quantity,
    };

    this.http.post(`${this.url.serverUrl}addToCart`, requestData).subscribe(
      (res: any) => {
        if (res.status) {
          console.log(res.message);
          this.router.navigate(['addtocart']);
        } else {
          console.error(res.message);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }


}
