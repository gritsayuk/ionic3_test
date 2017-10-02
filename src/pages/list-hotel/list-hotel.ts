import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AddItemPage} from '../add-item/add-item';

@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html',
})
export class ListHotelPage {
  ListHotel:JSON[];
  ThisCountry:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public modalCtrl: ModalController) {
    this.ListPhoto = JSON.parse('[{"Country":"Украина","Hotel":"Тута"},{"Country":"Египет","Hotel":"Здеся"}]');
    this.storage.set('ListPhoto', this.ListPhoto);

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
      NewHotel  = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel:"'+data+'"}');
      alert(NewHotel);
      //this.ListHotel = [];
      this.ListHotel.push(NewHotel);
    })
  }

  itemSelected() {
    console.log('addPhoto()');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListHotelPage');
  }

}
