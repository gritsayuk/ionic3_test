import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPhotoPage } from './list-photo';

@NgModule({
  declarations: [
    ListPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPhotoPage),
  ],
})
export class ListPhotoPageModule {}
