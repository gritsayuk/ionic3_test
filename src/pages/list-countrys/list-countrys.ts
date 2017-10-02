import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddCountryPage } from '../add-country/add-country';
import {ListPhotosPage} from '../list-photos/list-photos'
import { ListHotelPage } from '../list-hotel/list-hotel';

@IonicPage()
@Component({
  selector: 'page-list-photo',
  templateUrl: 'list-countrys.html',
})
export class ListCountrysPage {
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
    //this.navCtrl.push(ListPhotosPage);
    this.navCtrl.push(ListHotelPage,{Country : item});
  }
  addCountry(){
    let modal: Modal = this.modalCtrl.create(AddCountryPage);
    //Откріваем модальное окно
    modal.present();
    //получаем список стран из модального окна
    modal.onDidDismiss((data)=> {
        this.Countrys =data;
    })
 }
  itemTrash(item){
    const index: number = this.Countrys.indexOf(item);
    if (index !== -1) {
      this.Countrys.splice(index, 1);
      this.storage.set('Countrys', this.Countrys);
    }
  }
}
