import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuFirstPage } from './menu-first';

@NgModule({
  declarations: [
    MenuFirstPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuFirstPage),
  ],
})
export class MenuFirstPageModule {}
