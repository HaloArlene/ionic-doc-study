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
    },{
      text: 'Alerts',
      page: 'AlertsPage'
    },{
      text: 'Badges',
      page: 'BadgesPage'
    },{
      text: 'Buttons',
      page: 'ButtonsPage'
    },{
      text: 'Cards',
      page: 'CardsPage'
    },{
      text: 'Checkbox',
      page: 'CheckboxPage'
    },{
      text: 'DateTime',
      page: 'DatetimePage'
    },{
      text: 'FABs',
      page: 'FabsPage'
    },{
      text: 'Gestures',
      page: 'GesturesPage'
    },{
      text: 'Grid',
      page: 'GridPage'
    },{
      text: 'Icons',
      page: 'IconsPage'
    },{
      text: 'Inputs',
      page: 'InputsPage'
    },{
      text: 'Lists',
      page: 'ListsPage'
    },{
      text: 'Loading',
      page: 'LoadingPage'
    },{
      text: 'Menus',
      page: 'MenusPage'
    },{
      text: 'Modals',
      page: 'ModalsPage'
    },{
      text: 'Navigation',
      page: 'NavigationPage'
    },{
      text: 'Popovers',
      page: 'PopoversPage'
    },{
      text: 'Radios',
      page: 'RadioPage'
    },{
      text: 'Ranges',
      page: 'RangesPage'
    },{
      text: 'Searchbars',
      page: 'SearchbarsPage'
    },{
      text: 'Segment',
      page: 'SegmentPage'
    },{
      text: 'Select',
      page: 'SelectPage'
    },{
      text: 'Slides',
      page: 'SlidesPage'
    },{
      text: 'Toast',
      page: 'ToastPage'
    },{
      text: 'Toggles',
      page: 'TogglesPage'
    },{
      text: 'Toolbar',
      page: 'ToolbarPage'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

}
