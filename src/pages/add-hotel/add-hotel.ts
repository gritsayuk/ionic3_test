import {Component} from '@angular/core';
import {File} from '@ionic-native/file';
import {IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-hotel',
  templateUrl: 'add-hotel.html',
})
export class AddHotelPage {
  ThisDirs: Object;
  PrePath: string;
  ListPhoto:String [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File, public storage: Storage, private view:ViewController) {

    this.itemSelected('');
  }

  itemSelected(item) {
    var Path : string;
    var Dir : string;
    var Go :boolean;
    if (item){
      Path = this.PrePath;
      this.PrePath = item.nativeURL;
      Dir = item.name;
      Go = item.isDirectory;
    }
    else
    {
      this.PrePath = 'file:///';
      Path = 'file:///';
      Dir = '';
      Go = true;
    }

    if (Go) {
      this.file.listDir(Path, Dir)
        .then((val)=> {
          this.ThisDirs = val;
          })
        .catch((err)=> {
          alert(JSON.parse(err));
          });
    }
    else {
      this.storage.get('ListPhoto').then((val)=> {
        try{
          this.ListPhoto = val;
          if(!this.ListPhoto) {
            this.ListPhoto = [];
          }
          this.ListPhoto.push(item.name);
          this.storage.set('ListPhoto', this.ListPhoto);
          this.view.dismiss(this.ListPhoto);
        }
        catch(e){alert(e.toString());}


      });
    }
  }
  PreFolder(){
    var Paths : string [];
    var Path : string = '';
    var Dir : string = '';
    var i :number;
    try {
      if (this.PrePath) {
        Paths = this.PrePath.split('/');
        console.log(Paths);
        if (Paths.length > 5) {
          Dir = Paths[Paths.length - 3];
          for (i = 0; i<=Paths.length-4; i++) {
            Path = Path+Paths[i]+'/';
          }
          this.PrePath = Path+Paths[Paths.length-3]+'/';
        }
        else {
          this.PrePath = 'file:///';
          Path = 'file:///';
          Dir = '';
        }
        console.log('Dir:'+Dir);
        console.log('Path:'+Path);
        this.file.listDir(Path, Dir)
          .then((val)=> {
            this.ThisDirs = val;
          })
          .catch((err)=> {
            alert(err.toString());
          });
      }
    }
    catch(e){alert(e.toString());}
  }

}
