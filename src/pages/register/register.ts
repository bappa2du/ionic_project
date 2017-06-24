import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from "angularfire2/auth";


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

	constructor(private fauth: AngularFireAuth, 
		public navCtrl: NavController, 
		public alertCtrl: AlertController, 
		public navParams: NavParams, public fb: FormBuilder) {
		this.registerForm = fb.group({
			email: ["", Validators.required],
			password: ["", Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
		});
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad RegisterPage');
	}

	async register(post) {
		// console.log(post);
		try{
			const result = await this.fauth.auth.createUserWithEmailAndPassword(post.email,post.password);
			// console.log(result);
		}catch(e){
			// console.log(e);
			this.showMessage(e.message);
		}
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

}
