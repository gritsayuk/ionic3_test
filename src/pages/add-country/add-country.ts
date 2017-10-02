import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  CloseModal() { this.storage.get('Countrys').then((val)=> {
    this.storage.get('Countrys').then((val)=> {
    try{
      this.view.dismiss(val);
    }
    catch(e){alert(e.toString());}
    });
  });
  }
  AddCountry() {
    this.storage.get('Countrys').then((val)=> {
      try{
      this.Countrys = val;
        if(!this.Countrys) {
          this.Countrys = [];
          }
      this.Countrys.push(this.NewCountry);
      this.storage.set('Countrys', this.Countrys);
      this.view.dismiss(this.Countrys);
      }
      catch(e){alert(e.toString());}


    });
  }
}
