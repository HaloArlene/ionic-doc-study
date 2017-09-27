import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar'
})
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html',
})
export class ToolbarPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
