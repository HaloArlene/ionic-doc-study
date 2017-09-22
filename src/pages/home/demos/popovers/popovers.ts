import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';

@IonicPage({
  segment: 'demos/popovers'
})
@Component({
  selector: 'page-popovers',
  templateUrl: 'popovers.html',
})
export class PopoversPage {

  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController) {}

  ionViewDidLoad() {}

  presentPopover(ev) {
    let popover = this.popoverCtrl.create('PopoverPresentPage', {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });
    popover.present({ev: ev});
  }

}
