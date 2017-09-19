import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { ListPhotoPage } from '../list-photo/list-photo';
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
  NewCountry:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private view:ViewController) {
  }

  CloseModal() {
    this.view.dismiss();
  }
  AddCountry() {
    this.storage.get('Countrys').then((val)=>{
      this.Countrys=val;
      this.Countrys.push(this.NewCountry);
      this.storage.set('Countrys', this.Countrys);
      this.view.dismiss(this.Countrys);
    });
  }
}
