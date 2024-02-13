import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-level-status-bv',
  templateUrl: './level-status-bv.page.html',
  styleUrls: ['./level-status-bv.page.scss'],
})
export class LevelStatusBVPage implements OnInit {

  
  selectedLevel: any;
  requestedUser: any;
  // usersWithRequestedLevel: any[];
  usersWithRequestedLevel: any[] = [];

  constructor(
    private http: HttpClient,
    public url: DataService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  fetchUsersWithRequestedLevel(selectedLevel: number) {
    const requestData = {
      user_id: localStorage.getItem('user_id'),
      level: selectedLevel
    };
  
    this.http.post(`${this.url.serverUrl}level_against_user_id`, requestData).subscribe(
      (res: any) => {
        this.usersWithRequestedLevel=res.users_with_requested_level;
        console.log(res); // Log the entire response
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onLevelChange(event: any) {
    this.selectedLevel = event.detail.value;
    this.fetchUsersWithRequestedLevel(this.selectedLevel);
  }

}
