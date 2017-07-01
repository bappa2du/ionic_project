import { UserdashboardPage } from './../userdashboard/userdashboard';
import { FormGroup,FormBuilder } from '@angular/forms';
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

  private myForm: FormGroup;
  uid: string = '';
  email: string = '';
  username: string = '';
  mobile: number = null;
  loading: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private storage: Storage) {
    this.loadingDefault();
    this.myForm = this.fb.group({
      username: [''],
      email:[''],
      mobile:['']
    })
    this.getAuthUid();

  }

  ionViewDidLoad() {
  }
 
  async getAuthUid() {
    await this.storage.get('uid').then((val) => {
      this.uid = val;
      this.getUserInfo(val);
    });
  }

  getUserInfo(val): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.database().ref('users/' + val).on('value', data => {
        // resolve(data.val());
        this.email = data.val().email;
        this.mobile = data.val().mobile;
        this.username = data.val().username;
        this.loading.dismiss();
      });
    });
  }

  loadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      dismissOnPageChange:true,
    });
    this.loading.present();
  }



  formSubmit() {
    this.loadingDefault();
    // console.log(this.myForm.value);
    this.writeUserInfo(this.uid,this.myForm.value.username,this.myForm.value.mobile,this.myForm.value.email);
  }

  writeUserInfo(userId,username,mobile,email){
        firebase.database().ref('users/'+userId).set({
            username:username,
            mobile:mobile,
            email:email,
        }).then(()=>{
          this.navCtrl.setRoot(UserdashboardPage);
        }).catch(function(error){
            console.log(error);
        });
    }

}
