import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/gestures'
})
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  pressEvent(e) {
    this.press++;
  }
  panEvent(e){
    this.pan++;
  }
  swipeEvent(e){
    this.swipe++;
  }
  tapEvent(e){
    this.tap++;
  }

}
