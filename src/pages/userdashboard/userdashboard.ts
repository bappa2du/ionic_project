import { UserDetailsPage } from './../user-details/user-details';
import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-userdashboard',
  templateUrl: 'userdashboard.html',
})
export class UserdashboardPage {

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserdashboardPage');
  }

  logout() {
    this.storage.remove('auth');
    this.storage.remove('uid');
    this.navCtrl.setRoot(HomePage, {}, { animate: false });
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  userDetails(){
    this.navCtrl.push(UserDetailsPage);
  }

}
