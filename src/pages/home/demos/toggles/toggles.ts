import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/toggles'
})
@Component({
  selector: 'page-toggles',
  templateUrl: 'toggles.html',
})
export class TogglesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
