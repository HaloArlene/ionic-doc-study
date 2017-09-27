import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar/toolbar-buttons'
})
@Component({
  selector: 'page-toolbar-buttons',
  templateUrl: 'toolbar-buttons.html',
})
export class ToolbarButtonsPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform) {
  }

  ionViewDidLoad() {
    this.isAndroid = this.platform.is('android');
  }

}
