import { Component } from '@angular/core';
import { File } from '@ionic-native/file';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-hotel',
  templateUrl: 'add-hotel.html',
})
export class AddHotelPage {
  ThisDir : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File) {


    this.ThisDir = this.file.applicationDirectory;
    this.ThisDir = this.file.listDir('////', 'android_asset');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHotelPage');
  }

}
