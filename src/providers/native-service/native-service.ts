import { Injectable } from '@angular/core';
import {Loading, LoadingController, ToastController} from "ionic-angular";

/*
  Generated class for the NativeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeServiceProvider {
  loading: Loading;

  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

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

  showLoading(content: string = 'Loading...') {
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: 'bubbles'
    });
    this.loading.present();
  }

  hideLoading(message?: string) {
    this.loading.dismiss({}, '', {
      animate: true,
      animation: 'slide',
      duration: 0.5
    });
    this.loading.onDidDismiss(() => {
      if(message) this.showToast(message, 1000);
    });
  }
}
