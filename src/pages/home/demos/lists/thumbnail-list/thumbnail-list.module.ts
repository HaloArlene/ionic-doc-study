import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThumbnailListPage } from './thumbnail-list';

@NgModule({
  declarations: [
    ThumbnailListPage,
  ],
  imports: [
    IonicPageModule.forChild(ThumbnailListPage),
  ],
})
export class ThumbnailListPageModule {}
