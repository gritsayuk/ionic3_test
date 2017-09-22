import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHotelPage } from './add-hotel';

@NgModule({
  declarations: [
    AddHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHotelPage),
  ],
})
export class AddHotelPageModule {}
