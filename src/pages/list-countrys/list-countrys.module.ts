import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCountrysPage } from './list-countrys';

@NgModule({
  declarations: [
    ListCountrysPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCountrysPage),
  ],
})
export class ListPhotoPageModule {}
