import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  post:any;
  email:string = '';
  password:string = '';


  constructor(private fauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.compose([Validators.minLength(6),Validators.maxLength(12),Validators.required])]
    });
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  regstrationPage() {
    this.navCtrl.push(RegisterPage);
  }

  async logForm(post) {
    // console.log(post.username);
    try{
      const result = await this.fauth.auth.signInWithEmailAndPassword(post.email,post.password);
      console.log(result);
    }catch(e){
      console.log(e);
    }
  }

}
