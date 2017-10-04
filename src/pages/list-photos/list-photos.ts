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
  ThisCountry:string;
  ThisHotel:string;
  str:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController) {
    //this.ListPhoto = JSON.parse('[{"Country":"Египет","Hotel":"Придорожная","PhotoPath":"sss"},{"Country":"украина","Hotel":"Придорожная1","PhotoPath":"qqsss11"}]');
    //this.storage.set('ListPhoto', this.ListPhoto);
    this.ThisCountry = this.navParams.get("Country");
    this.ThisHotel = this.navParams.get("Hotel");
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
    modal.onDidDismiss((data)=>{
      //this.ListPhoto =data;
    //NewFile = JSON.parse('{"fullPath":"'+data.fullPath+'","name","'+data.name+'","nativeURL":"'+data.nativeURL+'","Hotel":"'+this.navParams.Hotel+'","Country":"'+this.navParams.Country+'"}');
      //alert(data.fullPath);
      //NewFile = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel":"'+this.ThisHotel+'","fullPath":"'+data.fullPath+'","name","'+data.name+'","nativeURL":"'+data.nativeURL+'"}');
      NewFile = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel":"'+this.ThisHotel+'","fullPath":"'+data.fullPath+'"}');
    //console.log(data);
      //alert(NewFile);
    if(!this.ListPhoto) {
      this.ListPhoto = [];
    }
      //alert(this.ListPhoto);
     //this.storage.set('ListPhoto',NewFile);
      //alert(JSON.stringify(this.ListPhoto));
      try{
        //this.ListPhoto = [];
        this.ListPhoto.push(NewFile);
        this.storage.set("ListPhoto",this.ListPhoto);
        //alert(JSON.stringify(this.ListPhoto));
      }

      catch (e){
        alert(e.toString());}
    })

  }
  itemSelected() {
    console.log('addPhoto()');
  }

}
