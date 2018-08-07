import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlPanelPage } from './control-panel';

@NgModule({
  declarations: [
    ControlPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(ControlPanelPage),
  ],
})
export class ControlPanelPageModule {}
