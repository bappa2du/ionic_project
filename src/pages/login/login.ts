import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  post:any;
  username:string = '';
  password:string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ["", Validators.required],
      password: ["", Validators.compose([Validators.minLength(6),Validators.maxLength(12),Validators.required])]
    });
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  regstrationPage() {
    this.navCtrl.push(RegisterPage);
  }

  logForm(post) {
    console.log(post.username);
  }

}
