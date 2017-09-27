import { Injectable } from '@angular/core';
import {ToastController} from "ionic-angular";

/*
  Generated class for the NativeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeServiceProvider {

  constructor(private toastCtrl: ToastController) {}

  showToast(message:string, duration:number = 1000, callBack?:Function, position:string = 'bottom'):void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      showCloseButton: false
    });
    toast.present();
    toast.onDidDismiss(() => {
      if(callBack) callBack();
    });
  }
}
