import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AddHotelPage} from '../add-hotel/add-hotel'
import {Camera, CameraOptions} from '@ionic-native/camera';
//import {Camera} from '@ionic-native/camera';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController,public camera: Camera) {
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
      //NewFile = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel":"'+this.ThisHotel+'","fullPath":"'+data.fullPath+'","name":"'+data.name+'","nativeURL":"'+data.nativeURL+'"}');
      NewFile = JSON.parse('{"Country":"'+this.ThisCountry+'","Hotel":"'+this.ThisHotel+'","fullPath":"'+data.fullPath+'","name":"'+data.name+'","nativeURL":"'+data.nativeURL+'"}');
    if(!this.ListPhoto) {
      this.ListPhoto = [];
    }
      try{
        //this.ListPhoto = [];
        this.ListPhoto.push(NewFile);
        this.storage.set("ListPhoto",this.ListPhoto);
      }

      catch (e){
        alert(e.toString());}
    })

  }
  itemSelected() {
    console.log('addPhoto()');
  }
  RunCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(imageData);
      //alert(base64Image);
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
}
