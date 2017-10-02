import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  Title:string;
  NewItem:string
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private view: ViewController) {
  this.Title = this.navParams.get("Title");
  }

  CloseModal() {
    /*    this.storage.get('Countrys').then((val)=> {
    this.storage.get('Countrys').then((val)=> {
      try{
        this.view.dismiss(val);
      }
      catch(e){alert(e.toString());}
    });
  });*/
    this.view.dismiss();

  }
  AddItem(){
    /*this.storage.get('Countrys').then((val)=> {
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


    });*/
    this.view.dismiss(this.NewItem);
  }

}
