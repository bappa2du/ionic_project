import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';
import firebase from 'firebase';


@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {

	registerForm: FormGroup;
	post: any;
	email: string = '';
	password: string = '';
	username: string = '';
	loading: any;

	constructor(
		public navCtrl: NavController,
		public storage: Storage,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		public navParams: NavParams, public fb: FormBuilder) {
		this.registerForm = fb.group({
			username: ["", Validators.required],
			email: ["", Validators.required],
			password: ["", Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
		});
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad RegisterPage');
	}

	loadingDefault() {
		this.loading = this.loadingCtrl.create({
			content: 'Loading...',
		});
		this.loading.present();
	}

	async register(post) {
		// console.log(post);
		this.loadingDefault();
		firebase.auth().createUserWithEmailAndPassword(post.email, post.password).then((result) => {
			//console.log(JSON.stringify(result));
			this.setAuth(result.uid);
			this.writeUserInfo(result.uid, post.email, post.username);
			this.navCtrl.setRoot(HomePage, {}, { animate: false });
		}).catch(function (error) {
			//console.log(JSON.stringify(error));
			this.showMessage(error);
		});
	}

	loginPage() {
		this.navCtrl.push(LoginPage);
	}

	showMessage(m) {
		let alert = this.alertCtrl.create({
			title: 'Registration Failed',
			subTitle: m,
			buttons: ['Try Later']
		});
		alert.present();
	}

	writeUserInfo(userId, email, username) {
		firebase.database().ref('users/' + userId).set({
			email: email,
			username: username,
		}).then(()=>{
			this.loading.dismiss();
		}).catch(function (error) {
			console.log(error);
		});
	}

	setAuth(uid) {
		this.storage.set('auth', true);
		this.storage.set('uid', uid);
	}

}
