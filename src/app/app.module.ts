import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { UserListProvider } from '../providers/user-list/user-list';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAo9uKdxDfbh1YV4rroAV67CIZhTxntVMY",
  authDomain: "ionicapp-75fda.firebaseapp.com",
  databaseURL: "https://ionicapp-75fda.firebaseio.com",
  projectId: "ionicapp-75fda",
  storageBucket: "ionicapp-75fda.appspot.com",
  messagingSenderId: "479271618357"
})

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserListProvider,
    Network,
  ]
})
export class AppModule { }
