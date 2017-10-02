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
  ListPhoto:JSON[];
  str:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController) {
    this.ListPhoto = JSON.parse('[{"Country":"Египет","Hotel":"Придорожная","PhotoPath":"sss"},{"Country":"украина","Hotel":"Придорожная1","PhotoPath":"qqsss11"}]');
    this.storage.set('ListPhoto', this.ListPhoto);
    this.storage.get('ListPhoto').then((val)=>{
      this.ListPhoto = val;
    })
  }
  addPhoto() {
    let NewFile: JSON;
    let modal: Modal = this.modalCtrl.create(AddHotelPage);
    //Откріваем модальное окно
    modal.present();
    //получаем список стран из модального окна
    modal.onDidDismiss((data)=>{this.ListPhoto =data;
    //NewFile = JSON.parse('{"fullPath":"'+data.fullPath+'","name","'+data.name+'","nativeURL":"'+data.nativeURL+'","Hotel":"'+this.navParams.Hotel+'","Country":"'+this.navParams.Country+'"}');
      alert(data.fullPath);
      alert(data.name);
      alert(data.nativeURL);
      NewFile = JSON.parse('{"fullPath":"'+data.fullPath+'","name","'+data.name+'","nativeURL":"'+data.nativeURL+'"}');
    //console.log(data);
      alert("1");
    this.ListPhoto.push(NewFile);
      alert("2");
    alert(JSON.stringify(this.ListPhoto));
    })

  }
  itemSelected() {
    console.log('addPhoto()');
  }

}
