import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/menus/menu-second'
})
@Component({
  selector: 'page-menu-second',
  templateUrl: 'menu-second.html',
})
export class MenuSecondPage {
  selectedItem: any;
  icons:Array<string>;
  items:Array<{title:string, note:string, icon:string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
    for(let i = 0; i < 11; i++){
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ionViewDidLoad() {}

  itemTapped(event:Event, item:any) {
    this.navCtrl.push(MenuSecondPage, {item: item});
  }

}
