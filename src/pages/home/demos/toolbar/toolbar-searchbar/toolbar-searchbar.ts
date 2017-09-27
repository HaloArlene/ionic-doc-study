import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/toolbar/boolbar-searchbar'
})
@Component({
  selector: 'page-toolbar-searchbar',
  templateUrl: 'toolbar-searchbar.html',
})
export class ToolbarSearchbarPage {
  items: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {}

  initializeItems() {
    this.items = [
      'Angular 1.x',
      'Angular 2',
      'ReactJS',
      'EmberJS',
      'Meteor',
      'Typescript',
      'Dart',
      'CoffeeScript'
    ];
  }

  getItems(event) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if(val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
