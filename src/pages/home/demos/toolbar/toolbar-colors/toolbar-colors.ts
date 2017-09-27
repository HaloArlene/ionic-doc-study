import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar/toolbar-colors'
})
@Component({
  selector: 'page-toolbar-colors',
  templateUrl: 'toolbar-colors.html',
})
export class ToolbarColorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
