import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Storage } from '@ionic/storage';

import { OrderPage } from '../pages/order/order';
import { AlamatPage } from '../pages/alamat/alamat';
import { DaftarPage } from '../pages/daftar/daftar';
import { TabsPage } from '../pages/tabs/tabs';
import { ReviewPage } from '../pages/review/review';
import { KonfirmasiPage } from '../pages/konfirmasi/konfirmasi';

import { IonRating } from '../components/ion-rating/ion-rating';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { UserDataProvider } from '../pages/providers/user-data';


@NgModule({
  declarations: [
    MyApp,
    OrderPage,
    AlamatPage,
    DaftarPage,
    TabsPage,
    ReviewPage,
    KonfirmasiPage,
    IonRating
   // UserDataProvider
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrderPage,
    AlamatPage,
    DaftarPage,
    TabsPage,
    ReviewPage,
    KonfirmasiPage,
   // UserDataProvider
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
   // UserDataProvider,
   // Storage
  ]
})
export class AppModule {}
