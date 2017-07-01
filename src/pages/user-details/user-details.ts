import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  uid: string = '';
  email: string = '';
  username: string = '';
  mobile: number = null;
  loading:any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams, private storage: Storage) {
    this.loadingDefault();
    this.getAuthUid();
    
  }

  ionViewDidLoad() {
  }

  async getAuthUid() {
    await this.storage.get('uid').then((val) => {
      this.loading.dismiss();
      firebase.database().ref('users/'+val).on('value',function(snapshot){
        console.log(snapshot.val().email);
      });
    });
  }

  async setEmail(email){
    this.email = email;
    console.log(email);
  }

  loadingDefault(){
    this.loading = this.loadingCtrl.create({
      content:'Loading...',
    });
    this.loading.present();
  }



  formSubmit() {
    console.log(this.username);
  }

}
