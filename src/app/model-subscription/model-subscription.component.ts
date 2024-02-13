import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-model-subscription',
  templateUrl: './model-subscription.component.html',
  styleUrls: ['./model-subscription.component.scss'],
})
export class ModelSubscriptionComponent  implements OnInit {

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
