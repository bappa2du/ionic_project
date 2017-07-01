import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { UserDetailsPage } from './../pages/user-details/user-details';
import { CallNumber } from '@ionic-native/call-number';
import { ChatOpenPage } from './../pages/chat-open/chat-open';
import { ProductListPage } from './../pages/product-list/product-list';
import { ProductDetailsPage } from './../pages/product-details/product-details';
import { CartPage } from './../pages/cart/cart';
import { UserdashboardPage } from './../pages/userdashboard/userdashboard';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SQLite} from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { UserListProvider } from '../providers/user-list/user-list';
import { IonicStorageModule } from '@ionic/storage';
import { CacheModule } from 'ionic-cache';
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
    LoginPage,
    RegisterPage,
    UserdashboardPage,
    CartPage,
    ProductDetailsPage,
    ProductListPage,
    ChatOpenPage,
    UserDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CacheModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    UserdashboardPage,
    CartPage,
    ProductDetailsPage,
    ProductListPage,
    ChatOpenPage,
    UserDetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserListProvider,
    Network,
    CallNumber,
    SQLitePorter,
    SQLite,
  ]
})
export class AppModule { }
