import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPresentPage } from './popover-present';

@NgModule({
  declarations: [
    PopoverPresentPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPresentPage),
  ],
})
export class PopoverPresentPageModule {}
