import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListHotelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html',
})
export class ListHotelPage {
  ListPhoto:String [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.ListPhoto = ['Египет','Украина'];
    this.storage.set('ListPhoto', this.ListPhoto);
    this.storage.get('ListPhoto').then((val)=>{
      this.ListPhoto = val;
    })
  }
  addPhoto() {
    console.log('addPhoto()');
  }
  itemSelected() {
    console.log('addPhoto()');
  }

}
