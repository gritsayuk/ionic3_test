import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPhotosPage } from './list-photos';

@NgModule({
  declarations: [
    ListPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPhotosPage),
  ],
})
export class ListHotelPageModule {}
