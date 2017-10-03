import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AddItemPage} from '../add-item/add-item';
import {ListPhotosPage} from '../list-photos/list-photos'


@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html',
})
export class ListHotelPage {
  ListHotel:JSON[];
  ThisCountry:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public modalCtrl: ModalController) {
    //this.ListHotel = JSON.parse('[{"Country":"Украина","Hotel":"Тута"},{"Country":"Египет","Hotel":"Здеся"}]');
    //this.storage.set('ListHotel', this.ListHotel);

    this.storage.get('ListHotel').then((val)=>{
      this.ListHotel = val;
      this.ThisCountry = this.navParams.get("Country");
    })
  }
  addHotel() {
    let modal: Modal = this.modalCtrl.create(AddItemPage,{Title:'Отель'});
    let NewHotel:JSON;
    //Откріваем модальное окно
    modal.present();

    //получаем список стран из модального окна
    modal.onDidDismiss((data)=>{
        //NewHotel  = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel:"'+data+'"}');
      NewHotel  = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel":"'+data+'"}');
      if(!this.ListHotel) {
        this.ListHotel = [];
      }
      this.ListHotel.push(NewHotel);
      this.storage.set('ListHotel', this.ListHotel);
    });
  }

  itemSelected(item) {
    this.navCtrl.push(ListPhotosPage,{Hotel : item, Country : this.ThisCountry});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListHotelPage');
  }

}
