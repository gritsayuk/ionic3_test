import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AddItemPage} from '../add-item/add-item';

@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html',
})
//class Hotel {constructor(public Country:string,public Hotel:string);};
export class ListHotelPage {
  ListHotel:Hotel[];
  ThisCountry:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public modalCtrl: ModalController) {
    //this.ListPhoto = ['Египет','Украина'];
    //this.storage.set('ListPhoto', this.ListPhoto);

    this.storage.get('ListHotel').then((val)=>{
      this.ListHotel = val;
      this.ThisCountry = this.navParams.get("Country");
    })
  }
  addHotel() {
    let modal: Modal = this.modalCtrl.create(AddItemPage,{Title:'Отель'});
    //Откріваем модальное окно
    modal.present();
    //получаем список стран из модального окна
    modal.onDidDismiss((data)=>{
      NewHotel : Hotel = new Hotel(this.ThisCountry,data);
      alert(NewHotel);
      this.ListHotel = [];
      this.ListHotel.push(NewHotel);
      alert(this.ListHotel);
    })
  }

  itemSelected() {
    console.log('addPhoto()');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListHotelPage');
  }

}
