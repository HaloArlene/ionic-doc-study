import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Nav} from 'ionic-angular';
import { MenuFirstPage } from "./menu-first/menu-first";
import { MenuSecondPage } from "./menu-second/menu-second";

@IonicPage({
  segment: 'demos/menus'
})
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {

  @ViewChild(Nav) nav: Nav;
  homePage:any = MenuFirstPage;
  pages:Array<{title:string, component:any}>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {
    this.pages = [{
      title: 'First Page',
      component: MenuFirstPage
    },{
      title: 'Second Page',
      component: MenuSecondPage
    }];
    //this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {}

  openPage(page:any) {
    this.navCtrl.push(page.component);
  }
}
