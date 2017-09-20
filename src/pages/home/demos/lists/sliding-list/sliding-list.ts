import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/lists/sliding-list'
})
@Component({
  selector: 'page-sliding-list',
  templateUrl: 'sliding-list.html',
})
export class SlidingListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
