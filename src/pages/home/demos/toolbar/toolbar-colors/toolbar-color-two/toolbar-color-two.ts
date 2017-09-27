import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar/toolbar-colors/color-two'
})
@Component({
  selector: 'page-toolbar-color-two',
  templateUrl: 'toolbar-color-two.html',
})
export class ToolbarColorTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
