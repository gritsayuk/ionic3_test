import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddCountryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-country',
  templateUrl: 'add-country.html',
})
export class AddCountryPage {
  Countrys:String [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  CloseModal() {
    this.navCtrl.pop();
  }
  AddCountry() {
    this.storage.get('Countrys').then((val)=>{
      this.Countrys=val;
      this.Countrys.push('Пока');
      this.storage.set('Countrys', this.Countrys);
    });
    this.navCtrl.pop();
  }
}
