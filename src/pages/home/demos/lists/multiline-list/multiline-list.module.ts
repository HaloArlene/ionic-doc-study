import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultilineListPage } from './multiline-list';

@NgModule({
  declarations: [
    MultilineListPage,
  ],
  imports: [
    IonicPageModule.forChild(MultilineListPage),
  ],
})
export class MultilineListPageModule {}
