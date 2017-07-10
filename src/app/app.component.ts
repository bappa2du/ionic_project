import { CacheService } from 'ionic-cache';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  toast: any;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    private network: Network,
    private cache: CacheService,
    private toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public splashScreen: SplashScreen) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Men', component: HomePage },
      { title: 'Women', component: HomePage },
      { title: 'Kids', component: HomePage },
      { title: 'Electronics', component: HomePage },
      { title: 'Home Appliance', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.cache.setDefaultTTL(60 * 60 * 12);
      this.cache.setOfflineInvalidate(false);

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.network.onDisconnect().subscribe(() => {
        this.toast = this.toastCtrl.create({
          message: 'Network Disconnected',
        });
        this.toast.present();
      });
      this.network.onConnect().subscribe(() => {
        this.toast.dismiss();
      });
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  goToHome() {
    this.menuCtrl.close();
    this.nav.setRoot(HomePage);
  }
}
