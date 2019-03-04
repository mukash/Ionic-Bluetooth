import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";

import { MyApp } from "./app.component";
import { MainMenuPage } from "../pages/main-menu/main-menu";

import { AboutPage } from "../pages/about/about";
import { AboutPageModule } from "../pages/about/about.module";
import { MainMenuPageModule } from "../pages/main-menu/main-menu.module";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    MainMenuPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, MainMenuPage, AboutPage],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
