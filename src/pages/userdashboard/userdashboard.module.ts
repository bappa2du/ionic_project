import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserdashboardPage } from './userdashboard';

@NgModule({
  declarations: [
    UserdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(UserdashboardPage),
  ],
  exports: [
    UserdashboardPage
  ]
})
export class UserdashboardPageModule {}
