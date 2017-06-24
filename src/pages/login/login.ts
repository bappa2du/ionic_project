import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController,LoadingController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';


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


    constructor(private fauth: AngularFireAuth,
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public fb: FormBuilder) {
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
            // console.log(result.uid);
            if(result && result.uid){
                this.navCtrl.setRoot(HomePage);
            }else{
                this.loginFailed('Verification Failed');
            }
        }catch(e){
            console.log(e);
        }
    }

    async loginWithFacebook(){
        try{
            const result = await this.fauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
            console.log(result);
        }catch(e){
            // console.log(e.message);
            this.loginFailed(e.message);
        }
    }

    async loginWithGoogle(){
        try{
            const result = await this.fauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            console.log(result);
            if(result.user){
                this.presentLoading();
                this.navCtrl.setRoot(HomePage);
            }else{
                this.loginFailed('Verification Failed');
            }
        }catch(e){
            // console.log(e);
            this.loginFailed(e.message);
        }
    }

    loginFailed(m) {
        let alert = this.alertCtrl.create({
            title: 'Login Failed',
            subTitle: m,
            buttons: ['Try Later']
        });
        alert.present();
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }

}
