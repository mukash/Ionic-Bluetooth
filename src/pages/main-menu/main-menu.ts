import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { AlertController } from "ionic-angular";
import { Platform } from "ionic-angular";

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-main-menu",
  templateUrl: "main-menu.html"
})
export class MainMenuPage {
  dataSend: number;
  // public check: boolean = false;
  bt: boolean;
  on1: boolean;
  off1: boolean;

  on2: boolean;
  off2: boolean;

  on3: boolean;
  off3: boolean;

  on4: boolean;
  off4: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bluetoothSerial: BluetoothSerial,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public platform: Platform
  ) {
    this.platform = platform;
    this.on1 = true;
    this.off1 = false;

    this.on2 = true;
    this.off2 = false;

    this.on3 = true;
    this.off3 = false;

    this.on4 = true;
    this.off4 = false;
    this.checkBluetoothEnabled();
  }

  navtoAbout(): void {
    this.navCtrl.push("AboutPage");
  }
  checkBluetoothEnabled() {
    this.bluetoothSerial.isEnabled().then(
      success => {},
      error => {
        this.ShowError(error);
        this.bt = false;
      }
    );
  }

  sendONData() {
    for (var i = 1; i < 4; i++) {
      this.dataSend = 11;
    }
    this.showToast(this.dataSend);
    this.bluetoothSerial.write(this.dataSend).then(
      success => {
        this.showToast;
      },
      error => {
        this.ShowError(error);
      }
    );
  }
  check() {
    if (this.bt === true) {
    }
  }
  sendOFFData() {
    this.dataSend = 10;
    this.showOFFToast(this.dataSend);
    this.bluetoothSerial.write(this.dataSend).then(
      success => {
        this.showOFFToast;
      },
      error => {
        this.ShowError(error);
      }
    );
  }

  showToast(message) {
    const toast = this.toastCtrl.create({
      message: "Socket is ON",
      duration: 1000
    });
    toast.present();
  }
  showOFFToast(message) {
    const toast = this.toastCtrl.create({
      message: "Socket is OFF",
      duration: 1000
    });
    toast.present();
  }

  func1() {
    this.sendONData();
    this.off1 = true;
    this.on1 = false;
  }

  func2() {
    this.sendOFFData();
    this.on1 = true;
    this.off1 = false;
  }

  func3() {
    this.sendONData();
    this.off2 = true;
    this.on2 = false;
  }

  func4() {
    this.sendOFFData();
    this.on2 = true;
    this.off2 = false;
  }

  func5() {
    this.sendONData();
    this.off3 = true;
    this.on3 = false;
  }

  func6() {
    this.sendOFFData();
    this.on3 = true;
    this.off3 = false;
  }

  func7() {
    this.sendONData();
    this.off4 = true;
    this.on4 = false;
  }

  func8() {
    this.sendOFFData();
    this.on4 = true;
    this.off4 = false;
  }
  ShowError(error) {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: error,
      message: "Please Enable Bluetoorh",
      buttons: [
        {
          text: "Open Settings",
          handler: () => {
            this.btsettings();
          }
        }
      ]
    });
    alert.present();
  }
  btsettings() {
    this.bluetoothSerial.showBluetoothSettings();
  }
  exitApp() {
    this.platform.exitApp();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad MainMenuPage");
  }
}
