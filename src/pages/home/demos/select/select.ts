import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeServiceProvider} from "../../../../providers/native-service/native-service";

@IonicPage({
  segment: 'demos/select'
})
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  gaming: string = 'n64';
  gender: string = 'f';
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: {title: string, subTitle: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nativeService: NativeServiceProvider) {
    this.musicAlertOpts = {
      title: '1994 music',
      subTitle: 'Select your favorite'
    };
  }

  ionViewDidLoad() {}

  stpSelect() {
    this.nativeService.showToast('STP Selected');
  }

}
