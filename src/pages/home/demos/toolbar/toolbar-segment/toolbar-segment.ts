import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar/toolbar-segment'
})
@Component({
  selector: 'page-toolbar-segment',
  templateUrl: 'toolbar-segment.html',
})
export class ToolbarSegmentPage {
  isAndroid: boolean = false;
  selectedSegment: string = 'hot';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform) {
  }

  ionViewDidLoad() {
    this.isAndroid = this.platform.is('android');
  }

}
