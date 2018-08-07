import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainMenuPage } from '../pages/main-menu/main-menu';

import { ControlPanelPage } from '../pages/control-panel/control-panel';
import { SettingPage } from '../pages/setting/setting';
import { ControlPanelPageModule } from '../pages/control-panel/control-panel.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { AboutPage } from '../pages/about/about';
import { AboutPageModule } from '../pages/about/about.module';
import { ConnectionManagerPage } from '../pages/connection-manager/connection-manager';
import { ConnectionManagerPageModule } from '../pages/connection-manager/connection-manager.module';

@NgModule({
  declarations: [
    MyApp,
    MainMenuPage,
    //ConnectionManagerPage
    //SettingPage
    //ControlPanelPage
   // AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ControlPanelPageModule,
    SettingPageModule,
    AboutPageModule,
    ConnectionManagerPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainMenuPage,
    ConnectionManagerPage,
    SettingPage,
    ControlPanelPage,
    AboutPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
