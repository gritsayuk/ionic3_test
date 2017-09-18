import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddCountryPage } from '../add-country/add-country';

/**
 * Generated class for the ListPhotoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-photo',
  templateUrl: 'list-photo.html',
})
export class ListPhotoPage {
  Countrys:String [];
  Hotels:Array<{Id: string, Country: string, Name: string, Photo: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public storage: Storage) {
    //this.Countrys = ['Египет','Украина'];
    //this.storage.set('Countrys', this.Countrys);
    this.storage.get('Countrys').then((val)=>{
      this.Countrys = val;
    })
    /*this.Hotels = [];
    this.Hotels.push({
      Id:'1',
      Country: 'Египет',
      Name: 'Придорожный',
      Photo: '\\qq'
    });
    this.Hotels.push({
      Id:'1',
      Country: 'Египет',
      Name: 'Придорожный1',
      Photo: '\\qq1'
    });
    this.Hotels.push({
      Id:'1',
      Country: 'Украина',
      Name: 'Semena',
      Photo: '\\qq'
    });*/

  }

  itemSelected(item) {
    alert(item);
  }
  addCountry(){
    let modal = this.modalCtrl.create(AddCountryPage);
    modal.present();
 }
}
