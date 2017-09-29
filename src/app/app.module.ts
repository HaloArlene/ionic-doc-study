import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeServiceProvider } from '../providers/native-service/native-service';
import {MenuFirstPage} from "../pages/home/demos/menus/menu-first/menu-first";
import {MenuSecondPage} from "../pages/home/demos/menus/menu-second/menu-second";
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuFirstPage,
    MenuSecondPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuFirstPage,
    MenuSecondPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeServiceProvider,
    HttpServiceProvider

  ]
})
export class AppModule {}
