import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';

interface Level {
  levelname: string;
  name: string;
  parent_id_count: string | number;
}

@Component({
  selector: 'app-royalty-graph',
  templateUrl: './royalty-graph.page.html',
  styleUrls: ['./royalty-graph.page.scss'],
})
export class RoyaltyGraphPage implements OnInit {


  // staticLevels: Level[] = [
  //   { levelname: 'Bronze', name: '', parent_id_count: '' },
  //   { levelname: 'Silver', name: '', parent_id_count: '' },
  //   { levelname: 'Gold', name: '', parent_id_count: '' },
  //   { levelname: 'Platinum', name: '', parent_id_count: '' },
  //   { levelname: 'Diamond', name: '', parent_id_count: '' },
  //   { levelname: 'Royal Star', name: '', parent_id_count: '' },
  //   { levelname: 'Crown Star', name: '', parent_id_count: '' },
  //   { levelname: 'Crown Ambassador', name: '', parent_id_count: '' }
  // ];

  dynamicLevels: Level[] = [];
  staticLevels: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    public url: DataService,
    private modalCtrl: ModalController,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getCategoryData();
  }


  getCategoryData() {
    const requestData = {};

    this.http.post(`${this.url.serverUrl}fetch_top_10_users_with_multiple_parent_ids`, requestData).subscribe(
      (res: any) => {
        this.staticLevels = res.top_10_users;
        // const top10Users = res.top_10_users;
        // this.dynamicLevels = top10Users.map((user: any) => ({
        //   levelname: user.name,
        //   name: user.name,
        //   parent_id_count: user.parent_id_count
        // }));
      },
      (err) => {
        console.error(err);
      }
    );
  }

  // getTop10Users() {
  //   this.http.get<any>('YOUR_API_ENDPOINT_HERE').subscribe(
  //     (res: any) => {
  //       const top10Users = res.top_10_users;
  //       top10Users.forEach(user => {
  //         const levelIndex = this.alllevel.findIndex(level => level.levelname === user.name);
  //         if (levelIndex !== -1) {
  //           this.alllevel[levelIndex].name = user.name;
  //           this.alllevel[levelIndex].parent_id_count = user.parent_id_count;
  //         }
  //       });
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }


}
