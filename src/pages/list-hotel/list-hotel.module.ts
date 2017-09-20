import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListHotelPage } from './list-hotel';

@NgModule({
  declarations: [
    ListHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(ListHotelPage),
  ],
})
export class ListHotelPageModule {}
