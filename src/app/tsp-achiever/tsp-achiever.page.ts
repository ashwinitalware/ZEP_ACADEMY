import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tsp-achiever',
  templateUrl: './tsp-achiever.page.html',
  styleUrls: ['./tsp-achiever.page.scss'],
})
export class TspAchieverPage implements OnInit {
  alldata: any;


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
    this.fetchData();
  }


  fetchData() {
    const start_date = (document.getElementById('start_date') as HTMLInputElement).value;
    const end_date = (document.getElementById('end_date') as HTMLInputElement).value;

    const requestData = {
      start_date: start_date,
      end_date: end_date
    };

    this.http.post(`${this.url.serverUrl}searchusers`, requestData).subscribe(
      (res: any) => {
        this.alldata = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

 

}


