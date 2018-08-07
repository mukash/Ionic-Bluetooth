import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionManagerPage } from './connection-manager';

@NgModule({
  declarations: [
    ConnectionManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectionManagerPage),
  ],
})
export class ConnectionManagerPageModule {}
