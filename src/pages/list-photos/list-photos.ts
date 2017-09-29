import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AddHotelPage} from '../add-hotel/add-hotel'

@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-photos.html',
})
export class ListPhotosPage {
  ListPhoto:String [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController) {
    //this.ListPhoto = ['Египет','Украина'];
    //this.storage.set('ListPhoto', this.ListPhoto);
    this.storage.get('ListPhoto').then((val)=>{
      this.ListPhoto = val;
    })
  }
  addPhoto() {
    let modal: Modal = this.modalCtrl.create(AddHotelPage);
    //Откріваем модальное окно
    modal.present();
    //получаем список стран из модального окна
    modal.onDidDismiss((data)=>{this.ListPhoto =data;})
  }
  itemSelected() {
    console.log('addPhoto()');
  }

}
