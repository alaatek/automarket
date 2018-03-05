import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileNumbersPage } from './mobile-numbers';

@NgModule({
  declarations: [
    MobileNumbersPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileNumbersPage),
  ],
})
export class MobileNumbersPageModule {}
