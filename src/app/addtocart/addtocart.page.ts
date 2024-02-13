import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.page.html',
  styleUrls: ['./addtocart.page.scss'],
})
export class AddtocartPage implements OnInit {

  rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(90deg, #d00681 0%, hsl(242deg 81.37% 71.23%) 100%)',
  };
  allcartdata: any;
  grandTotal: number = 0; 

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];
  user_id1: any;
  user_id: any;

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
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
      this.getcart();
      this.url.dismiss();
  }

  
  getcart() {
    this.user_id = localStorage.getItem('user_id');
    const requestData = {
      user_id: this.user_id,
    };
  
    this.http.post(`${this.url.serverUrl}get_cart_by_userId`, requestData).subscribe(
      (res: any) => {
        this.allcartdata = res.data.cartItems.map((item: any) => {
          const courseDetail = res.data.courseDetails.find((course: any) => course.id === item.course_id);
          item.completeImageUrl = this.url.imageUrl1 + item.thumbnail;
          item.sellingPrice = courseDetail ? courseDetail.selling_price : item.course_price;
          return item;
        });

        // Calculate grand total after updating allcartdata
        this.calculateGrandTotal();
      },
      (err) => {
        console.error(err);
        // Handle errors if needed
      }
    );
  }

  removeCartItem(cartItem: any) {
    const requestData = {
      user_id: this.user_id,
      course_id: cartItem.course_id,
    };
  
    this.http.post(`${this.url.serverUrl}deleteCourseFromCart`, requestData).subscribe(
      (res: any) => {
        if (res.status) {
          // Remove the cart item from the array
          this.allcartdata = this.allcartdata.filter((item: any) => item.id !== cartItem.id);
          // Recalculate grand total after removing the item
          this.calculateGrandTotal();
          console.log('Course deleted from cart successfully');
        } else {
          console.error(res.message);
          // Handle error message display or other actions if needed
        }
      },
      (err) => {
        console.error(err);
        // Handle errors if needed
      }
    );
  }

  // Method to calculate grand total
  calculateGrandTotal() {
    this.grandTotal = this.allcartdata.reduce((total: number, item: any) => {
      return total + parseFloat(item.course_price);
    }, 0);
  }

  // removeCartItem1(cartItem: any) {
  //   const requestData = {
  //     user_id: this.user_id,
  //     course_id: cartItem.course_id,
  //   };
  
  //   this.http.post(`${this.url.serverUrl}deleteCourseFromCart`, requestData).subscribe(
  //     (res: any) => {
  //       if (res.status) {
  //         // Remove the cart item from the array
  //         this.allcartdata = this.allcartdata.filter(item => item.id !== cartItem.id);
  //         console.log('Course deleted from cart successfully');
  //       } else {
  //         console.error(res.message);
  //         // Handle error message display or other actions if needed
  //       }
  //     },
  //     (err) => {
  //       console.error(err);
  //       // Handle errors if needed
  //     }
  //   );
  // }
  

}
