import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {NativeServiceProvider} from "../../../../providers/native-service/native-service";

/**
 * Generated class for the ActionSheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'demos/action-sheets'
})
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheetsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeServiceProvider,
              public actionSheetCtrl: ActionSheetController,
              public platform: Platform) {}

  ionViewDidLoad() {}

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.nativeService.showToast('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.nativeService.showToast('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            this.nativeService.showToast('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            this.nativeService.showToast('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            this.nativeService.showToast('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
