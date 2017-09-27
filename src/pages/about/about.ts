import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  details: Array<any> = [
    {
      name: 'Author',
      value: 'Halor'
    },{
      name: 'Version',
      value: '0.0.1'
    },{
      name: 'Create Date',
      value: '2017/9'
    }
  ];
  dependencies: Array<any> = [
    {
      name: '@angular/common',
      value: '4.1.3'
    },{
      name: '@angular/compiler',
      value: '4.1.3'
    },{
      name: '@angular/compiler-cli',
      value: '4.1.3'
    },{
      name: '@angular/core',
      value: '4.1.3'
    },{
      name: '@angular/forms',
      value: '4.1.3'
    },{
      name: '@angular/http',
      value: '4.1.3'
    },{
      name: '@angular/platform-browser',
      value: '4.1.3'
    },{
      name: '@angular/platform-browser-dynamic',
      value: '4.1.3'
    },{
      name: '@ionic-native/core',
      value: '3.12.1'
    },{
      name: '@ionic-native/splash-screen',
      value: '3.12.1'
    },{
      name: '@ionic-native/status-bar',
      value: '3.12.1'
    },{
      name: '@ionic/storage',
      value: '2.0.1'
    },{
      name: 'ionic-angular',
      value: '3.6.1'
    },{
      name: 'ionicons',
      value: '3.0.0'
    },{
      name: 'rxjs',
      value: '5.4.0'
    },{
      name: 'sw-toolbox',
      value: '3.6.0'
    },{
      name: 'zone.js',
      value: '0.8.12'
    }
  ];
  devDependencies: Array<any> = [
    {
      name: '@ionic/app-scripts',
      value: '2.1.4'
    },{
      name: 'typescript',
      value: '2.3.4'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
