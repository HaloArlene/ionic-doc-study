import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos'
})
@Component({
  selector: 'page-demos',
  templateUrl: 'demos.html',
})
export class DemosPage {
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
    },
    {
      text: 'Loading',
      page: 'LoadingPage'
    },
    {
      text: 'Menus',
      page: 'MenusPage'
    },
    {
      text: 'Modals',
      page: 'ModalsPage'
    },
    {
      text: 'Navigation',
      page: 'NavigationPage'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

}
