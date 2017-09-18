import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:Array<{text:string, page:string}> = [
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
    },
    {
      text: 'Cards',
      page: 'CardsPage'
    },
    {
      text: 'Checkbox',
      page: 'CheckboxPage'
    },
    {
      text: 'DateTime',
      page: 'DatetimePage'
    },
    {
      text: 'FABs',
      page: 'FabsPage'
    },
    {
      text: 'Gestures',
      page: 'GesturesPage'
    },
    {
      text: 'Grid',
      page: 'GridPage'
    },
    {
      text: 'Icons',
      page: 'IconsPage'
    },
    {
      text: 'Inputs',
      page: 'InputsPage'
    },
    {
      text: 'Lists',
      page: 'ListsPage'
    }
  ];

  constructor(public navCtrl: NavController) {}

}
