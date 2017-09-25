import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/searchbars'
})
@Component({
  selector: 'page-searchbars',
  templateUrl: 'searchbars.html',
})
export class SearchbarsPage {
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {}

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(event) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the event target
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if(val && val.trim() != ''){
      this.items = this.items.filter(item => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
