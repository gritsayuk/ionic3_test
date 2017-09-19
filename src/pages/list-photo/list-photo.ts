import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddCountryPage } from '../add-country/add-country';


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


  }

  itemSelected(item) {
    alert(item);
  }
  addCountry(){
    let modal: Modal = this.modalCtrl.create(AddCountryPage);
    //Откріваем модальное окно
    modal.present();
    //получаем список стран из модального окна
    modal.onDidDismiss((data)=>{this.Countrys =data;})
 }

}
