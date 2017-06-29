import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
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
        public alertCtrl: AlertController,
        public userList: UserListProvider) {

        
    }

    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
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
        if (this.displayName) {
            this.signOut();
            this.navCtrl.setRoot(HomePage);
        } else {
            this.navCtrl.push(LoginPage);
        }
    }

    showSearch() {
        this.status = !this.status;
    }

    ionViewDidLoad() {
        //this.userList.getRemoteData();
        // this.userList.getRemoteData().subscribe(response => {
        //     this.lists = response;
        // });

        if (this.displayName) {
            this.loggedIn = !this.loggedIn;
        }
    }

    signOut() {
        firebase.auth().signOut();
    }




}
