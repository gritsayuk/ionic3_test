import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html',
})
export class ListHotelPage {
  ListHotel:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public modalCtrl: ModalController) {
    //this.ListPhoto = ['Египет','Украина'];
    //this.storage.set('ListPhoto', this.ListPhoto);

    this.storage.get('ListHotel').then((val)=>{
      this.ListHotel = val;
      alert (this.navParams.get("Country"));
    })
  }
  addHotel() {
    //let modal: Modal = this.modalCtrl.create(AddHotelPage);
    //Откріваем модальное окно
    //modal.present();
    //получаем список стран из модального окна
    //modal.onDidDismiss((data)=>{this.ListHotel =data;})
  }

  itemSelected() {
    console.log('addPhoto()');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListHotelPage');
  }

}
