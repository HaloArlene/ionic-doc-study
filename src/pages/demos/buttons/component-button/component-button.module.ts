import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentButtonPage } from './component-button';

@NgModule({
  declarations: [
    ComponentButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentButtonPage),
  ],
})
export class ComponentButtonPageModule {}
