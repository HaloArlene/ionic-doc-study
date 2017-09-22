import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/navigation-detail'
})
@Component({
  selector: 'page-navigation-detail',
  templateUrl: 'navigation-detail.html',
})
export class NavigationDetailPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {}

}
