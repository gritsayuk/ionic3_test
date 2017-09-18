import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCountryPage } from './add-country';

@NgModule({
  declarations: [
    AddCountryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCountryPage),
  ],
})
export class AddCountryPageModule {}
