import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController,LoadingController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import firebase from 'firebase';

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
    loader:any;


    constructor(
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
        firebase.auth().signInWithEmailAndPassword(post.email,post.password).then(()=>{
            firebase.auth().getRedirectResult().then((result)=>{
                console.log(JSON.stringify(result));
            }).catch(function(error){
                console.log(JSON.stringify(error));
            });
        });
        // try{
        //     const result = await this.fauth.auth.signInWithEmailAndPassword(post.email,post.password);
        //     if(result && result.uid){
        //         this.navCtrl.setRoot(HomePage);
        //     }else{
        //         this.loginFailed('Verification Failed');
        //     }
        // }catch(e){
        //     console.log(e);
        // }
    }

    async loginWithFacebook(){
        let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(()=>{
            firebase.auth().getRedirectResult().then((result)=>{
                console.log(JSON.stringify(result));
            }).catch(function(error){
                console.log(JSON.stringify(error));
            });
        });
    }

    async loginWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(()=>{
            firebase.auth().getRedirectResult().then((result)=>{
                console.log(JSON.stringify(result));
            }).catch(function(error){
                console.log(JSON.stringify(error));
            });
        });
        // try{
        //     this.presentLoading();
        //     const result = await this.fauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        //     // console.log(result);
        //     if(result && result.user){
        //         this.loader.dismiss();
        //         this.navCtrl.setRoot(HomePage);
        //     }else{
        //         this.loader.dismiss();
        //         this.loginFailed('Verification Failed');
        //     }
        // }catch(e){
        //     // console.log(e);
        //     this.loginFailed(e.message);
        // }
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
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    }

}
