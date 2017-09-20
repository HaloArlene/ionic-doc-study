import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/modals'
})
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {}

  openModal(chrNum:any) {
    this.modalCtrl.create('ModalContentPage', chrNum).present();
  }

}
