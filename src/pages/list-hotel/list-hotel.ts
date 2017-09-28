import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListHotelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html',
})
export class ListHotelPage {
  ListHotel:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.ListPhoto = ['Египет','Украина'];
    //this.storage.set('ListPhoto', this.ListPhoto);
    this.storage.get('ListHotel').then((val)=>{
      this.ListHotel = val;
    })
  }
  addHotel() {
    let modal: Modal = this.modalCtrl.create(AddHotelPage);
    //Откріваем модальное окно
    modal.present();
    //получаем список стран из модального окна
    modal.onDidDismiss((data)=>{this.ListHotel =data;})

  }

  itemSelected() {
    console.log('addPhoto()');
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListHotelPage');
  }

}
