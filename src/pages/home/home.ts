import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:any = [
    {
      text: 'Action Sheets',
      page: 'ActionSheetsPage'
    },
    {
      text: 'Alerts',
      page: 'AlertsPage'
    },
    {
      text: 'Badges',
      page: 'BadgesPage'
    },
    {
      text: 'Buttons',
      page: 'ButtonsPage'
    }
  ];

  constructor(public navCtrl: NavController) {}

}
