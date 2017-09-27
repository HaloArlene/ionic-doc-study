import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar/toolbar-colors/color-one'
})
@Component({
  selector: 'page-toolbar-color-one',
  templateUrl: 'toolbar-color-one.html',
})
export class ToolbarColorOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
