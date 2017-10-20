import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListCountrysPage } from '../pages/list-countrys/list-countrys';
import { AddCountryPage } from '../pages/add-country/add-country';
import { AddItemPage } from '../pages/add-item/add-item';

import { ListHotelPage } from '../pages/list-hotel/list-hotel';

import { ListPhotosPage } from '../pages/list-photos/list-photos';
import { AddHotelPage } from '../pages/add-hotel/add-hotel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import {Camera} from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	  ListCountrysPage,
    AddCountryPage,
    ListHotelPage,
    AddItemPage,
    ListPhotosPage,
    AddHotelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  ListCountrysPage,
    AddCountryPage,
    ListHotelPage,
    AddItemPage,
    ListPhotosPage,
    AddHotelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
