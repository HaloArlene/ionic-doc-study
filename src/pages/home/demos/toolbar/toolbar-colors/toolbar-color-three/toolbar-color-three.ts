import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToolbarPage} from "../../toolbar";

@IonicPage({
  segment: 'demos/toolbar/toolbar-colors/color-three'
})
@Component({
  selector: 'page-toolbar-color-three',
  templateUrl: 'toolbar-color-three.html',
})
export class ToolbarColorThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  goBackToBeginning() {
    this.navCtrl.popTo(ToolbarPage);
  }

}
