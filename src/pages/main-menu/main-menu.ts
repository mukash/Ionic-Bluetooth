import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }
       navtoCM():void {
         this.navCtrl.push('ConnectionManagerPage');
       }

       navtoCP(): void {
         this.navCtrl.push('ControlPanelPage');
       }

       navtoSetting(): void {
         this.navCtrl.push('SettingPage');
       }
       navtoAbout(): void {
        this.navCtrl.push('AboutPage');
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
  }

}
