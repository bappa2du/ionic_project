import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { ChatOpenPage } from './../chat-open/chat-open';
import { UserdashboardPage } from './../userdashboard/userdashboard';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CallNumber } from '@ionic-native/call-number';
import { UserListProvider } from '../../providers/user-list/user-list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    @ViewChild(Nav) nav: Nav;

    status: boolean = false;
    loggedIn: boolean = false;

    lists: any = [];

    sliders: any = [
        { "image": "https://image.ibb.co/ckE5yQ/bkash.jpg" },
        { "image": "https://image.ibb.co/nP7QyQ/eid.jpg" },
        { "image": "https://image.ibb.co/h2RUQ5/estacy.jpg" },
        { "image": "https://image.ibb.co/cZvOk5/flash.jpg" },
        { "image": "https://image.ibb.co/dhQdJQ/home.jpg" },
        { "image": "https://image.ibb.co/knZusk/master.jpg" },
        { "image": "https://image.ibb.co/nOeSCk/visa.jpg" },
    ];

    displayName: string;

    constructor(public navCtrl: NavController,
        private storage: Storage,
        private sqlite: SQLite,
        private callNumber: CallNumber,
        public alertCtrl: AlertController,
        public userList: UserListProvider) {

        this.storage.get('auth').then((val) => {
            if (val) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }).catch(function (error) {
            console.log(error);
        });

        this.sqlite.create({
            name: 'app.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('create table danceMoves(name VARCHAR(32))', {})
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
        }).catch(error=>{
            console.log(JSON.stringify(error));
        })


    }

    /*showAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
    
    addToCart() {
        let alert = this.alertCtrl.create({
            title: 'Added to Cart',
            buttons: ['OK']
        });
        alert.present();
    }*/

    openLogin() {
        this.navCtrl.push(LoginPage);
    }

    showSearch() {
        // this.status = !this.status;
        this.navCtrl.push(SearchPage);
    }

    openCart(){
        this.navCtrl.push(CartPage);
    }

    ionViewDidLoad() {

    }

    userDashboard() {
        this.navCtrl.setRoot(UserdashboardPage);
    }

    doRefresh(refresher) {
        // console.log('Begin async operation', refresher);

        setTimeout(() => {
            this.navCtrl.setRoot(HomePage);
            refresher.complete();
        }, 2000);
    }

    callHelpline() {
        this.callNumber.callNumber("112", true).then(() => {
            console.log('Call to number');
        }).catch(function (error) {
            console.log(error);
        })
    }

    openChat() {
        this.navCtrl.push(ChatOpenPage);
    }




}
