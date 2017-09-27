import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarColorOnePage } from './toolbar-color-one';

@NgModule({
  declarations: [
    ToolbarColorOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ToolbarColorOnePage),
  ],
})
export class ToolbarColorOnePageModule {}
